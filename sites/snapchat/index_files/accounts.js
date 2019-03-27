Snapchat = {};

Snapchat.default_message = {
    username_cannot_be_empty : "Username cannot be empty.",
    current_password_cannot_be_empty : "Current password cannot be empty.",
    new_password_cannot_be_empty : "New password(s) cannot be empty.",
    new_password_must_be_at_least_8_characters_long : "New password must be at least 8 characters long.",
    new_passwords_must_be_identical : "New passwords must be identical.",
    new_password_cannot_be_identical_to_your_current_password : "New password cannot be identical to your current password.",
    please_enter_your_password : "Please enter your password.",
    email_cannot_be_empty : "Email cannot be empty.",
    password_cannot_be_empty : "Password cannot be empty.",
    verification_code_cannot_be_empty : "Verification code cannot be empty."
};

Snapchat.update_message = function(lang) {
    var error_msgs = [
            "username_cannot_be_empty",
            "current_password_cannot_be_empty",
            "new_password_cannot_be_empty",
            "new_password_must_be_at_least_8_characters_long",
            "new_passwords_must_be_identical",
            "new_password_cannot_be_identical_to_your_current_password",
            "please_enter_your_password",
            "email_cannot_be_empty",
            "password_cannot_be_empty",
            "verification_code_cannot_be_empty"
        ];

    var jqxhr = $.post("/accounts/get_messages", {'messages[]' : error_msgs});
    jqxhr.done(function (data) {
        Snapchat.message = data;
    });
    jqxhr.fail(function () {
        Snapchat.message = Snapchat.default_message;
    });
}

Snapchat.getCookie = function getCookie(name) {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
}

// TODO: remove this legacy logic after all pages are migrated to react
Snapchat.initializeDropdown = function() {
    if ($('#sc-global-locale-selector').length > 0) {
      // The new dropdown is on the page, no need to initialize
      return;
    }

    var lang = Snapchat.getCookie("sc-language");
    $("#sc-global-footer-language").change(function() {
        //Cookie expires in 7 days
        date = new Date();
        date.setTime(date.getTime()+(7*24*60*60*1000));
        document.cookie = "sc-language=" + $("#sc-global-footer-language").val()
            + ";path=/;secure;expires="+date.toGMTString()
            + ";domain=.snapchat.com";
        if (document.readyState === "complete") {
            document.location.reload();
        }
    });
    $('.ui.dropdown').dropdown();
}

Snapchat.toggleNavigationMenu = function() {
	return $('#navigationMenu').sidebar('toggle');
}

Snapchat.initialize = function() {
	// Configure navigation menu button settings
	$('#navigationMenu').sidebar('setting', 'transition', 'push');
	$('#navigationMenu').sidebar('setting', 'dimPage', false);

	$('#navigationMenuButton').on('click', function() {
		Snapchat.toggleNavigationMenu();
	});

	Snapchat.initializeDropdown();
	Snapchat.update_message();

	return true;
};

$(document).ready(function() {
	Snapchat.initialize();
});
