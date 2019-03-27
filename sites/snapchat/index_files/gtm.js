
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"61",
  "macros":[{
      "function":"__c",
      "vtp_value":"snapchat.com"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=",["escape",["macro",0],8,16],".split(\",\"),d=",["escape",["macro",1],8,16],".toLowerCase(),a=\"false\";if(d===document.domain)a=\"true\";else for(var b=0;b\u003Cc.length;b++)if(-1\u003Cd.indexOf(c[b].trim().toLowerCase())){a=\"true\";break}return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.pathname+window.location.search+window.location.hash})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){var g=[{name:\"EMAIL\",regex:\/[^\\\/]{4}(@|%40)(?!example\\.com)[^\\\/]{4}\/gi},{name:\"SELF-EMAIL\",regex:\/[^\\\/]{4}(@|%40)(?=example\\.com)[^\\\/]{4}\/gi},{name:\"TEL\",regex:\/((tel=)|(telephone=)|(phone=)|(mobile=)|(mob=))[\\d\\+\\s][^\u0026\\\/\\?]+\/gi},{name:\"NAME\",regex:\/((firstname=)|(lastname=)|(surname=))[^\u0026\\\/\\?]+\/gi},{name:\"PASSWORD\",regex:\/((password=)|(passwd=)|(pass=))[^\u0026\\\/\\?]+\/gi},{name:\"ZIP\",regex:\/((postcode=)|(zipcode=)|(zip=))[^\u0026\\\/\\?]+\/gi}],f=\"_\"+a.get(\"trackingId\")+\"_sendHitTask\",\nh=window[f]=window[f]||a.get(\"sendHitTask\"),b,c,d,e;a.set(\"sendHitTask\",function(a){c=a.get(\"hitPayload\").split(\"\\x26\");for(b=0;b\u003Cc.length;b++){d=c[b].split(\"\\x3d\");try{e=decodeURIComponent(decodeURIComponent(d[1]))}catch(k){e=decodeURIComponent(d[1])}g.forEach(function(a){e=e.replace(a.regex,\"[REDACTED \"+a.name+\"]\")});d[1]=encodeURIComponent(e);c[b]=d.join(\"\\x3d\")}a.set(\"hitPayload\",c.join(\"\\x26\"),!0);h(a)})}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"eventAction"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"eventNonInt"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"eventValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"responseSizeInByte"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"requestSizeInByte"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"0",
      "vtp_name":"x-tr-st-1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageType"
    },{
      "function":"__c",
      "vtp_value":"auto"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"errorType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"language"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",18],
      "vtp_map":["list",["map","key","forbusiness.snapchat.com","value","UA-41740027-30"],["map","key","lensstudio.snapchat.com","value","UA-41740027-31"],["map","key","grant-test-gtm-dot-dev-dot-advertising-web.appspot.com","value","UA-41740027-30"],["map","key","forbusiness-dec14-dot-dev-dot-advertising-web.appspot.com","value","UA-41740027-30"],["map","key","lens-studio-web.appspot.com","value","UA-41740027-31"],["map","key","ads.snapchat.com","value","UA-41740027-18"],["map","key","self-serve-ads.snap-dev.net","value","UA-41740027-19"],["map","key","business.snapchat.com","value","UA-41740027-22"],["map","key","business-manager.snap-dev.net","value","UA-41740027-21"],["map","key","ads-local","value","UA-41740027-19"],["map","key","business-local","value","UA-41740027-21"],["map","key","geofilters.snapchat.com","value","UA-41740027-6"],["map","key","odg-local","value","UA-41740027-29"],["map","key","staging-dot-geofilters-on-demand.appspot.com","value","UA-41740027-29"],["map","key","geofilters-on-demand-dev.appspot.com","value","UA-41740027-29"],["map","key","gtm-dot-geofilters-on-demand-dev.appspot.com","value","UA-41740027-29"],["map","key","create.snapchat.com","value","UA-41740027-6"],["map","key","create.snap-dev.net","value","UA-41740027-29"],["map","key","whatis.snapchat.com","value","UA-41740027-39"],["map","key","whatis-dot-dev-dot-it-services-temp.appspot.com","value","UA-41740027-39"],["map","key","yellowla.com","value","UA-41740027-44"],["map","key","it-services-temp.appspot.com","value","UA-41740027-45"],["map","key","www.yellowla.com","value","UA-41740027-44"],["map","key","accounts.snapchat.com","value","UA-41740027-4"],["map","key","kit.snapchat.com","value","UA-41740027-47"],["map","key","places.snap-dev.net","value","UA-41740027-52"],["map","key","places.snapchat.com","value","UA-41740027-53"],["map","key","snaporiginals.snapchat.com","value","UA-41740027-55"],["map","key","snapcamera.snapchat.com","value","UA-107043855-2"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",13]]],
      "vtp_autoLinkDomains":["macro",0],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":["macro",14],
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","userId","value",["macro",15]],["map","fieldName","legacyCookieDomain","value","false"],["map","fieldName","siteSpeedSampleRate","value","100"],["map","fieldName","customTask","value",["macro",4]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",13]],["map","index","2","dimension",["macro",15]],["map","index","3","dimension",["macro",16]],["map","index","4","dimension",["macro",17]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",19],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_name":"eventLabel"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"virtualPageviewPath"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"__BUY_REASON_REQUIRED__"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"__FOURSTEP__"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"__GEOCODER__"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"__PRICING_VERSION_TEST__"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-event-label"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventVariable"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"conversionValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"orderId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"currencyCode"
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"useType"
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",39],
      "vtp_map":["list",["map","key","objectives","value","advertising objectives"],["map","key","adformats","value","advertising adformats"],["map","key","targeting","value","advertising targeting"],["map","key","measurement","value","advertising measurement"]]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "priority":5,
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",25]],["map","fieldName","legacyHistoryImport","value","false"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",20],
      "vtp_dimension":["list",["map","index","10","dimension",["macro",26]],["map","index","11","dimension",["macro",27]],["map","index","12","dimension",["macro",28]],["map","index","13","dimension",["macro",29]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":7
    },{
      "function":"__ua",
      "priority":3,
      "vtp_nonInteraction":["macro",8],
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",9],
      "vtp_fieldsToSet":["list",["map","fieldName","transport","value","beacon"],["map","fieldName","legacyHistoryImport","value","false"]],
      "vtp_eventCategory":["macro",5],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","1","metric",["macro",10]],["map","index","2","metric",["macro",11]],["map","index","3","metric",["macro",12]]],
      "vtp_gaSettings":["macro",20],
      "vtp_eventAction":["macro",6],
      "vtp_eventLabel":["macro",21],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":2
    },{
      "function":"__ua",
      "priority":3,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","transport","value","beacon"],["map","fieldName","legacyHistoryImport","value","false"]],
      "vtp_eventCategory":"outbound link",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",20],
      "vtp_eventAction":["macro",23],
      "vtp_eventLabel":["macro",1],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":3
    },{
      "function":"__ua",
      "priority":3,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",20],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":4
    },{
      "function":"__ua",
      "priority":3,
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","transport","value","beacon"],["map","fieldName","legacyHistoryImport","value","false"]],
      "vtp_trackType":"TRACK_TIMING",
      "vtp_timingLabel":["macro",21],
      "vtp_timingCategory":["macro",5],
      "vtp_gaSettings":["macro",20],
      "vtp_timingVar":["macro",32],
      "vtp_timingValue":["macro",9],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsTiming":true,
      "tag_id":19
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","legacyHistoryImport","value","false"]],
      "vtp_eventCategory":["macro",5],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",20],
      "vtp_eventAction":["macro",6],
      "vtp_eventLabel":["macro",21],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":9
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Viewport",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",20],
      "vtp_eventAction":"Scroll",
      "vtp_eventLabel":["macro",30],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":12
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"AW-845934552",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",31],
      "tag_id":13
    },{
      "function":"__ua",
      "setup_tags":["list",["tag",26,0]],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",20],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":21
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "tag_id":22
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",33],
      "vtp_orderId":["macro",34],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"866629025",
      "vtp_currencyCode":["macro",35],
      "vtp_conversionLabel":"yASdCMPZs2wQoeuenQM",
      "vtp_url":["macro",31],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":23
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",20],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":24
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value","\/vpv\/QLF\/success"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",20],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":26
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"ContactUsFormSubmission",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",20],
      "vtp_eventAction":"\/contact-us\/thank-you",
      "vtp_eventLabel":"FormSubmit",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":27
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value","\/partners\/contact-us\/submit"],["map","fieldName","title","value","Snap Business Contact Form"]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",20],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":28
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",3]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",20],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":29
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"845934552",
      "vtp_conversionLabel":"yfA6CODsxH0Q2N-vkwM",
      "vtp_url":["macro",31],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":43
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"7997829_9",
      "tag_id":44
    },{
      "function":"__fsl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"7997829_39",
      "tag_id":45
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_elementSelector":"[data-ga-section]",
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"7997829_43",
      "tag_id":46
    },{
      "function":"__evl",
      "vtp_elementId":"globalfooter",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":false,
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_selectorType":"ID",
      "vtp_onScreenRatio":"100",
      "vtp_uniqueTriggerId":"7997829_44",
      "tag_id":47
    },{
      "function":"__hl",
      "tag_id":48
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"7997829_89",
      "tag_id":49
    },{
      "function":"__fsl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"7997829_91",
      "tag_id":50
    },{
      "function":"__hl",
      "tag_id":51
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_linkedin_partner_id=\"69836\";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);\u003C\/script\u003E\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/dc.ads.linkedin.com\/collect\/?pid=69836\u0026amp;fmt=gif\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":25
    },{
      "function":"__opt",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_optimizeContainerId":"GTM-KKBPJ2N",
      "vtp_gaSettings":["macro",20],
      "tag_id":20
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"analyticsEvent"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"(^$|((^|,)7997829_9($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"geofilters.snapchat.com|geofilters.snap-dev.net|odg-local|create.snap-dev.net|cre ate.snapchat.com|geofilters-on-demand-dev.appspot.com|staging-dot-geofilters-on-demand.appspot.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"forbusiness.snapchat.com|"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"virtualPageview"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"ecommerce"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"(^$|((^|,)7997829_43($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"(^$|((^|,)7997829_44($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"accounts.snapchat.com"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"forbusiness.snapchat.com"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"self-serve-ads.snap-dev.net"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"ads.snapchat.com"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",21],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"analyticsTimingEvent"
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"forbusiness.snapchat.com"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"adConversion"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"UA-41740027-55"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"gtm.historyChange"
    },{
      "function":"_eq",
      "arg0":["macro",7],
      "arg1":"gtm.formSubmit"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"pushState"
    },{
      "function":"_cn",
      "arg0":["macro",37],
      "arg1":"forbusiness.snapchat.com\/advertising"
    }],
  "rules":[
    [["if",2],["unless",0,1],["add",1]],
    [["if",3,4,5],["add",2]],
    [["if",8],["unless",6,7],["add",3]],
    [["if",9],["add",0,9,12]],
    [["if",10],["add",5]],
    [["if",11,12],["add",6]],
    [["if",11,13],["add",6]],
    [["if",8,14,15,16,17],["add",7,9]],
    [["if",21],["unless",0,18,19,20],["add",4]],
    [["if",8,22],["add",8,25]],
    [["if",23],["add",10]],
    [["if",24,25],["add",11]],
    [["if",26],["add",13,14,16]],
    [["if",25,27,28],["add",15]],
    [["if",8],["add",17,18,19,20,21,22,23,24]]]
},
"runtime":[
[],[]
]


};
var da,ea=this,fa=/^[\w+/_-]+[=]{0,2}$/,ia=null,la=function(a,b){function c(){}c.prototype=b.prototype;a.Xg=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Gg=function(a,c,g){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var ma=function(){},na=function(a){return"function"==typeof a},f=function(a){return"string"==typeof a},oa=function(a){return"number"==typeof a&&!isNaN(a)},qa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},n=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ra=function(a,b){if(a&&qa(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},sa=function(a,b){if(!oa(a)||
!oa(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ta=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},ua=function(a){return Math.round(Number(a))||0},va=function(a){return"false"==String(a).toLowerCase()?!1:!!a},wa=function(a){var b=[];if(qa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},xa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},ya=function(){return(new Date).getTime()},za=function(){this.prefix="gtm.";this.values=
{}};za.prototype.set=function(a,b){this.values[this.prefix+a]=b};za.prototype.get=function(a){return this.values[this.prefix+a]};za.prototype.contains=function(a){return void 0!==this.get(a)};
var Ba=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ca=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Da=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Fa=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ga=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ha=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ia=function(a){if(null==a)return String(a);var b=Ha.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ja=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ka=function(a){if(!a||"object"!=Ia(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ja(a,"constructor")&&!Ja(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ja(a,b)},t=function(a,b){var c=b||("array"==Ia(a)?[]:{}),d;for(d in a)if(Ja(a,d)){var e=a[d];"array"==Ia(e)?("array"!=Ia(c[d])&&(c[d]=[]),c[d]=t(e,c[d])):Ka(e)?(Ka(c[d])||(c[d]={}),c[d]=t(e,c[d])):c[d]=e}return c};var x=window,y=document,La=navigator,Ma=y.currentScript&&y.currentScript.src,Na=function(a,b){var c=x[a];x[a]=void 0===c?b:c;return x[a]},Oa=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Pa=function(a,b,c){var d=y.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Oa(d,b);c&&(d.onerror=c);var e;if(null===ia)b:{var g=ea.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&fa.test(k)){ia=k;break b}}ia=""}e=ia;e&&d.setAttribute("nonce",e);var l=y.getElementsByTagName("script")[0]||y.body||y.head;l.parentNode.insertBefore(d,l);return d},Qa=function(){if(Ma){var a=Ma.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Ra=function(a,b){var c=y.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=y.body&&y.body.lastChild||
y.body||y.head;d.parentNode.insertBefore(c,d);Oa(c,b);void 0!==a&&(c.src=a);return c},Sa=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},A=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ta=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},C=function(a){x.setTimeout(a,0)},Va=function(a){var b=
y.getElementById(a);if(b&&Ua(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(Ua(document.all[a][c],"id")==a)return document.all[a][c];return b},Ua=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Wa=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Xa=function(a){var b=y.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=
[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Ya=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;g=g.parentElement}return null};var Za=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var $a=/:[0-9]+$/,cb=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},D=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=db(a.protocol)||db(x.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:x.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||x.location.hostname).replace($a,"").toLowerCase());var g=b,h,k=db(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=eb(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace($a,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":h="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=h.split("/");0<=
n(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=cb(h,e,void 0));break;case "extension":var p=a.pathname.split(".");h=1<p.length?p[p.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},db=function(a){return a?a.replace(":","").toLowerCase():""},eb=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},fb=function(a){var b=y.createElement("a");
a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(c="/"+c);var d=b.hostname.replace($a,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var gb=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},jb=function(a,b,c,d){var e=hb(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=ib(e,function(a){return a.yb},b);if(1===e.length)return e[0].id;e=ib(e,function(a){return a.Ta},c);return e[0]?e[0].id:void 0}};
function kb(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=gb(b,e).indexOf(c)}
var nb=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var p=l;p&&1200<p.length&&(p=p.substring(0,1200));l=p;m=a+"="+l}var q=void 0,r=void 0,w;for(w in h)if(h.hasOwnProperty(w)){var v=h[w];if(null!=v)switch(w){case "secure":v&&(m+="; secure");break;case "domain":q=v;break;default:"path"==w&&(r=v),"expires"==w&&v instanceof Date&&(v=
v.toUTCString()),m+="; "+w+"="+v}}if("auto"===q){for(var u=lb(),z=0;z<u.length;++z){var E="none"!=u[z]?u[z]:void 0;if(!mb(E,r)&&kb(m+(E?"; domain="+E:""),a,l)){k=!0;break a}}k=!1}else q&&"none"!=q&&(m+="; domain="+q),k=!mb(q,r)&&kb(m,a,l)}return k};function ib(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function hb(a,b){for(var c=[],d=gb(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),yb:1*k[0]||1,Ta:1*k[1]||1}))}}return c}
var ob=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,pb=/(^|\.)doubleclick\.net$/i,mb=function(a,b){return pb.test(document.location.hostname)||"/"===b&&ob.test(a)},lb=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));a.push("none");return a};
var qb=[],rb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},sb=function(a){return rb[a]},tb=/[\x00\x22\x26\x27\x3c\x3e]/g;var xb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,yb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},zb=function(a){return yb[a]};
qb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(xb,zb)+"'"}};var Hb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Ib={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Jb=function(a){return Ib[a]};qb[16]=function(a){return a};var Lb=[],Mb=[],Nb=[],Ob=[],Pb=[],Qb={},Rb,Sb,Tb,Ub=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Vb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=!!Qb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[d?g:g.substr(4)]=a[g]);return d?Qb[c](e):(void 0)(c,e,b)},Xb=function(a,b,c,d){c=c||[];d=d||ma;var e={},g;for(g in a)a.hasOwnProperty(g)&&(e[g]=Wb(a[g],b,
c,d));return e},Yb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Qb[b];return c?c.b||0:0},Wb=function(a,b,c,d){if(qa(a)){var e;switch(a[0]){case "function_id":return a[1];case "list":e=[];for(var g=1;g<a.length;g++)e.push(Wb(a[g],b,c,d));return e;case "macro":var h=a[1];if(c[h])return;var k=Lb[h];if(!k||b(k))return;c[h]=!0;try{var l=Xb(k,b,c,d);e=Vb(l,d);Tb&&(e=Tb.ff(e,l))}catch(E){d(E,h),e=!1}c[h]=!1;return e;case "map":e={};for(var m=1;m<a.length;m+=
2)e[Wb(a[m],b,c,d)]=Wb(a[m+1],b,c,d);return e;case "template":e=[];for(var p=!1,q=1;q<a.length;q++){var r=Wb(a[q],b,c,d);Sb&&(p=p||r===Sb.ob);e.push(r)}return Sb&&p?Sb.kf(e):e.join("");case "escape":e=Wb(a[1],b,c,d);if(Sb&&qa(a[1])&&"macro"===a[1][0]&&Sb.Nf(a))return Sb.Yf(e);e=String(e);for(var w=2;w<a.length;w++)qb[a[w]]&&(e=qb[a[w]](e));return e;case "tag":var v=a[1];if(!Ob[v])throw Error("Unable to resolve tag reference "+v+".");return e={wd:a[2],index:v};case "zb":var u={arg0:a[2],arg1:a[3],
ignore_case:a[5]};u["function"]=a[1];var z=Zb(u,b,c,d);a[4]&&(z=!z);return z;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Zb=function(a,b,c,d){try{return Rb(Xb(a,b,c,d))}catch(e){JSON.stringify(a)}return null};var $b=null,cc=function(a,b){function c(a){for(var b=0;b<a.length;b++)e[a[b]]=!0}var d=[],e=[];$b=ac(a,b||function(){});for(var g=0;g<Mb.length;g++){var h=Mb[g],k=bc(h);if(k){for(var l=h.add||[],m=0;m<l.length;m++)d[l[m]]=!0;c(h.block||[])}else null===k&&c(h.block||[])}for(var p=[],q=0;q<Ob.length;q++)d[q]&&!e[q]&&(p[q]=!0);return p},bc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=$b(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=$b(e[g]);if(null===
h)return null;if(h)return!1}return!0},ac=function(a,b){var c=[];return function(d){void 0===c[d]&&(c[d]=Zb(Nb[d],a,void 0,b));return c[d]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var H={},K=null,pc=Math.random();H.m="GTM-KZM6MXH";H.sb="3b2";var qc="www.googletagmanager.com/gtm.js";var rc=qc,sc=null,tc=null,uc=null,vc="//www.googletagmanager.com/a?id="+H.m+"&cv=61",wc={},xc={},yc=function(){var a=K.sequence||0;K.sequence=a+1;return a};var O=function(a,b,c,d){return(2===zc()||d||"http:"!=x.location.protocol?a:b)+c},zc=function(){var a=Qa(),b;if(1===a)a:{var c=rc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=y.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Ac=!1;var P=function(){var a=function(a){return{toString:function(){return a}}};return{Vc:a("convert_case_to"),Wc:a("convert_false_to"),Xc:a("convert_null_to"),Yc:a("convert_true_to"),Zc:a("convert_undefined_to"),qa:a("function"),ye:a("instance_name"),ze:a("live_only"),Ae:a("malware_disabled"),Cg:a("original_vendor_template_id"),Be:a("once_per_event"),md:a("once_per_load"),nd:a("setup_tags"),Ce:a("tag_id"),od:a("teardown_tags")}}();var Dc={},Ec=function(a){Dc.GTM=Dc.GTM||[];Dc.GTM[a]=!0};
var Fc=function(){return"&tc="+Ob.filter(function(a){return a}).length},Oc=function(){Gc&&(x.clearTimeout(Gc),Gc=void 0);void 0===Hc||Ic[Hc]&&!Jc||(Kc[Hc]||Lc.Pf()||0>=Mc--?(Ec(1),Kc[Hc]=!0):(Lc.gg(),Sa(Nc()),Ic[Hc]=!0,Jc=""))},Nc=function(){var a=Hc;if(void 0===a)return"";for(var b,c=[],d=Dc.GTM||[],e=0;e<d.length;e++)d[e]&&(c[Math.floor(e/6)]^=1<<e%6);for(var g=0;g<c.length;g++)c[g]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(c[g]||0);b=c.join("");return[Pc,Ic[a]?"":
"&es=1",Qc[a],b?"&u="+b:"",Fc(),Jc,"&z=0"].join("")},Rc=function(){return[vc,"&v=3&t=t","&pid="+sa(),"&rv="+H.sb].join("")},Sc="0.005000">Math.random(),Pc=Rc(),Tc=function(){Pc=Rc()},Ic={},Jc="",Hc=void 0,Qc={},Kc={},Gc=void 0,Lc=function(a,b){var c=0,d=0;return{Pf:function(){if(c<a)return!1;ya()-d>=b&&(c=0);return c>=a},gg:function(){ya()-d>=b&&(c=0);c++;d=ya()}}}(2,1E3),Mc=1E3,Uc=function(a,b){if(Sc&&!Kc[a]&&Hc!==a){Oc();Hc=a;Jc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):
"*";Qc[a]="&e="+c+"&eid="+a;Gc||(Gc=x.setTimeout(Oc,500))}},Vc=function(a,b,c){if(Sc&&!Kc[a]&&b){a!==Hc&&(Oc(),Hc=a);var d=c+String(b[P.qa]||"").replace(/_/g,"");Jc=Jc?Jc+"."+d:"&tr="+d;Gc||(Gc=x.setTimeout(Oc,500));2022<=Nc().length&&Oc()}};var Wc=new za,Xc={},Yc={},bd={set:function(a,b){t(Zc(a,b),Xc);$c()},get:function(a){return ad(a,2)},reset:function(){Wc=new za;Xc={};$c()}},ad=function(a,b){if(2!=b){var c=Wc.get(a);if(Sc){var d=cd(a);c!==d&&Ec(5)}return c}return cd(a)},cd=function(a,b,c){var d=a.split("."),e=!1,g=void 0;
return e?g:ed(d)},ed=function(a){for(var b=Xc,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var hd=function(a,b){Yc.hasOwnProperty(a)||(Wc.set(a,b),t(Zc(a,b),Xc),$c())},Zc=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},$c=function(a){ta(Yc,function(b,c){Wc.set(b,c);t(Zc(b,void 0),Xc);t(Zc(b,c),Xc);a&&delete Yc[b]})};var id=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),jd={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},kd={cl:["ecl"],customPixels:["customScripts","html"],ecl:["cl"],html:["customScripts"],
customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]};
var md=function(a){var b=ad("gtm.whitelist");b&&Ec(9);var c=b&&Ga(wa(b),jd),d=ad("gtm.blacklist");d||(d=ad("tagTypeBlacklist"))&&Ec(3);d?Ec(8):d=[];
ld()&&(d=wa(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=n(wa(d),"google")&&Ec(2);var e=d&&Ga(wa(d),kd),g={};return function(h){var k=h&&h[P.qa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=xc[k]||[],m=a(k);if(b){var p;if(p=m)a:{if(0>n(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>n(c,l[q])){Ec(11);p=!1;break a}}else{p=!1;break a}p=!0}m=p}var r=!1;if(d){var w=0<=n(e,k);
if(w)r=w;else{var v;b:{for(var u=l||[],z=new za,E=0;E<e.length;E++)z.set(e[E],!0);for(var B=0;B<u.length;B++)if(z.get(u[B])){v=!0;break b}v=!1}var G=v;G&&Ec(10);r=G}}return g[k]=!m||r}},ld=function(){return id.test(x.location&&x.location.hostname)};var od=function(a){return function(b,c){if(oa(c))a(b,c);else{b instanceof nd||(b=new nd(b));var d=b;c&&d.jc.push(c);throw d;}}},nd=function(a){this.Tf=a;this.jc=[]};la(nd,Error);var pd={ff:function(a,b){b[P.Vc]&&"string"===typeof a&&(a=1==b[P.Vc]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(P.Xc)&&null===a&&(a=b[P.Xc]);b.hasOwnProperty(P.Zc)&&void 0===a&&(a=b[P.Zc]);b.hasOwnProperty(P.Yc)&&!0===a&&(a=b[P.Yc]);b.hasOwnProperty(P.Wc)&&!1===a&&(a=b[P.Wc]);return a}};var qd={active:!0,isWhitelisted:function(){return!0}},rd=function(a){var b=K.zones;!b&&a&&(b=K.zones=a());return b};var sd=!1,td=0,ud=[];function vd(a){if(!sd){var b=y.createEventObject,c="complete"==y.readyState,d="interactive"==y.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){sd=!0;for(var e=0;e<ud.length;e++)C(ud[e])}ud.push=function(){for(var a=0;a<arguments.length;a++)C(arguments[a]);return 0}}}function wd(){if(!sd&&140>td){td++;try{y.documentElement.doScroll("left"),vd()}catch(a){x.setTimeout(wd,50)}}}var xd=function(a){sd?a():ud.push(a)};var yd=function(){function a(a){return!oa(a)||0>a?0:a}if(!K._li&&x.performance&&x.performance.timing){var b=x.performance.timing.navigationStart,c=oa(bd.get("gtm.start"))?bd.get("gtm.start"):0;K._li={cst:a(c-b),cbt:a(tc-b)}}};var Cd=!1,Dd=function(){return x.GoogleAnalyticsObject&&x[x.GoogleAnalyticsObject]},Ed=!1;var Fd=function(a){x.GoogleAnalyticsObject||(x.GoogleAnalyticsObject=a||"ga");var b=x.GoogleAnalyticsObject;if(!x[b]){var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);x[b]=c}yd();return x[b]},Gd=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Dd();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Id=function(){},Hd=function(){return x.GoogleAnalyticsObject||"ga"},Jd=!1;var Qd=function(a){};
function Pd(a,b){a.containerId=H.m;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function Rd(a,b,c,d,e){var g=Ob[a],h=Sd(a,b,c,d,e);if(!h)return null;var k=Wb(g[P.nd],d.da,[],ma);if(k&&k.length){var l=k[0];h=Rd(l.index,b,{I:h,O:1===l.wd?c.terminate:h,terminate:c.terminate},d,e)}return h}
function Sd(a,b,c,d,e){function g(){if(h[P.Ae])l();else{var b=Xb(h,d.da,[],od(function(a){Ec(6);Qd(a)})),c=!1;b.vtp_gtmOnSuccess=function(){if(!c){c=!0;Vc(d.id,Ob[a],"5");k()}};b.vtp_gtmOnFailure=function(){if(!c){c=!0;Vc(d.id,Ob[a],"6");l()}};b.vtp_gtmTagId=h.tag_id;Vc(d.id,h,"1");var e=
!1,g=function(a,b){if(!e){a instanceof nd||(a=new nd(a));var g=a;b&&g.jc.push(b);throw g;}Qd(a);Vc(d.id,h,"7");c||(c=!0,l())};try{Vb(b,g)}catch(M){try{e=!0,g(M)}catch(F){}}}}
var h=Ob[a],k=c.I,l=c.O,m=c.terminate;if(d.da(h))return null;var p=Wb(h[P.od],d.da,[],ma);if(p&&p.length){var q=p[0],r=Rd(q.index,b,{I:k,O:l,terminate:m},d,e);if(!r)return null;k=r;l=2===q.wd?m:r}if(h[P.md]||h[P.Be]){var w=h[P.md]?Pb:b,v=k,u=l;if(!w[a]){g=Ca(g);var z=Td(a,w,g);k=z.I;l=z.O}return function(){w[a](v,u)}}return g}function Td(a,b,c){var d=[],e=[];b[a]=Ud(d,e,c);return{I:function(){b[a]=Vd;for(var c=0;c<d.length;c++)d[c]()},O:function(){b[a]=Wd;for(var c=0;c<e.length;c++)e[c]()}}}
function Ud(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Vd(a){a()}function Wd(a,b){b()};function Xd(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ca(function(){b++;d&&b>=c&&a()})},Qe:function(){d=!0;b>=c&&a()}}}var $d=function(a){for(var b=Xd(a.callback),c=[],d=[],e=0;e<Ob.length;e++)if(a.Va[e]){var g=Ob[e];var h=b.add();try{var k=Rd(e,c,{I:h,O:h,terminate:h},a,e);k?d.push({Wd:e,b:Yb(g),uf:k}):(Yd(e,a),h())}catch(m){h()}}b.Qe();d.sort(Zd);for(var l=0;l<d.length;l++)d[l].uf();return 0<d.length};
function Zd(a,b){var c,d=b.b,e=a.b;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.Wd,k=b.Wd;g=h>k?1:h<k?-1:0}return g}function Yd(a,b){if(!Sc)return;var c=function(a){var d=b.da(Ob[a])?"3":"4",g=Wb(Ob[a][P.nd],b.da,[],ma);g&&g.length&&c(g[0].index);Vc(b.id,Ob[a],d);var h=Wb(Ob[a][P.od],b.da,[],ma);h&&h.length&&c(h[0].index)};c(a);}
var ae=!1,be=function(a,b,c,d){if("gtm.js"==b){if(ae)return!1;ae=!0}Uc(a,b);var e=md(c),g={id:a,name:b,callback:d||ma,da:e,Va:[]};g.Va=cc(e,od(function(a){Qd(a)}));var h=$d(g);"gtm.js"!==b&&"gtm.sync"!==b||Id();if(!h)return h;for(var k={__cl:!0,__ecl:!0,__evl:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},l=0;l<g.Va.length;l++)if(g.Va[l]){var m=
Ob[l];if(m&&!k[m[P.qa]])return!0}return!1};var Q={Pb:"event_callback",Rb:"event_timeout"};var de={};var ee=/[A-Z]+/,fe=/\s/,ge=function(a){if(f(a)&&(a=xa(a),!fe.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(ee.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],ca:d}}}}},ie=function(a){for(var b={},c=0;c<a.length;++c){var d=ge(a[c]);d&&(b[d.id]=d)}he(b);var e=[];ta(b,function(a,b){e.push(b)});return e};
function he(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.ca[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var je=null,ke={},le={},me,ne=function(a,b){var c={event:a};b&&(c.eventModel=t(b),b[Q.Pb]&&(c.eventCallback=b[Q.Pb]),b[Q.Rb]&&(c.eventTimeout=b[Q.Rb]));return c};
var se={config:function(a){},event:function(a){var b=a[1];if(f(b)&&!(3<a.length)){var c;if(2<a.length){if(!Ka(a[2]))return;
c=a[2]}var d=ne(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];de[b]||(de[b]=[]);de[b].push(c)}},set:function(a){var b;2==a.length&&Ka(a[1])?b=t(a[1]):3==a.length&&f(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=t(b),b.event="gtag.set",b._clear=!0,b}},te={policy:!0};var ue=function(){return!1};var ze=function(a){this.vg=a};ze.prototype.Af=function(){return this.vg};var Ae=function(a){return!a||"object"!==Ia(a)||Ka(a)?!1:"getUntrustedUpdateValue"in a};ze.prototype.getUntrustedUpdateValue=ze.prototype.Af;var Be=!1,Ce=[];function De(){if(!Be){Be=!0;for(var a=0;a<Ce.length;a++)C(Ce[a])}}var Ee=function(a){Be?C(a):Ce.push(a)};var Fe=[],Ge=!1;function He(a){var b=a.eventCallback,c=Ca(function(){na(b)&&C(function(){b(H.m)})}),d=a.eventTimeout;d&&x.setTimeout(c,Number(d));return c}
var Ie=function(a){return x["dataLayer"].push(a)},Ke=function(a){var b=a._clear;ta(a,function(a,c){"_clear"!==a&&(b&&hd(a,void 0),hd(a,c))});var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=yc(),a["gtm.uniqueEventId"]=d,hd("gtm.uniqueEventId",d));uc=c;var e=Je(a);uc=null;if(!sc){sc=a["gtm.start"];}return e};
function Je(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=K.zones;d=e?e.checkState(H.m,c):qd;if(!d.active)return!1;var g=He(a);return be(c,b,d.isWhitelisted,g)?!0:!1}
var Le=function(){for(var a=!1;!Ge&&0<Fe.length;){Ge=!0;delete Xc.eventModel;$c();var b=Fe.shift();if(null!=b){var c=Ae(b);if(c){var d=b;b=Ae(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=ad(h,1);if(qa(k)||Ka(k))k=t(k);Yc[h]=k}}try{if(na(b))try{b.call(bd)}catch(u){}else if(qa(b)){var l=b;if(f(l[0])){var m=
l[0].split("."),p=m.pop(),q=l.slice(1),r=ad(m.join("."),2);if(void 0!==r&&null!==r)try{r[p].apply(r,q)}catch(u){}}}else{var w=b;if(w&&("[object Arguments]"==Object.prototype.toString.call(w)||Object.prototype.hasOwnProperty.call(w,"callee"))){a:{if(b.length&&f(b[0])){var v=se[b[0]];if(v&&(!c||!te[b[0]])){b=v(b);break a}}b=void 0}if(!b){Ge=!1;continue}}a=Ke(b)||a}}finally{c&&$c(!0)}}Ge=!1}
return!a},Me=function(){var a=Le();try{var b=H.m,c=x["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},Ne=function(){var a=Na("dataLayer",[]),b=Na("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};xd(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Ee(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b;
if(0<K.SANDBOXED_JS_SEMAPHORE){b=[];for(var e=0;e<arguments.length;e++)b[e]=new ze(arguments[e])}else b=[].slice.call(arguments,0);var g=c.apply(a,b);Fe.push.apply(Fe,b);if(300<this.length)for(Ec(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Le()&&h};Fe.push.apply(Fe,a.slice(0));C(Me)};var Pe=function(a){return Oe?y.querySelectorAll(a):null},Qe=function(a,b){if(!Oe)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!y.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Re=!1;if(y.querySelectorAll)try{var Se=y.querySelectorAll(":root");Se&&1==Se.length&&Se[0]==y.documentElement&&(Re=!0)}catch(a){}var Oe=Re;var Te;var pf={};pf.ob=new String("undefined");
var qf=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===pf.ob?b:a[d]);return c.join("")}};qf.prototype.toString=function(){return this.resolve("undefined")};qf.prototype.valueOf=qf.prototype.toString;pf.De=qf;pf.$b={};pf.kf=function(a){return new qf(a)};var rf={};pf.hg=function(a,b){var c=yc();rf[c]=[a,b];return c};pf.td=function(a){var b=a?0:1;return function(a){var c=rf[a];if(c&&"function"===typeof c[b])c[b]();rf[a]=void 0}};pf.Nf=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};pf.Yf=function(a){if(a===pf.ob)return a;var b=yc();pf.$b[b]=a;return'google_tag_manager["'+H.m+'"].macro('+b+")"};pf.Rf=function(a,b,c){a instanceof pf.De&&(a=a.resolve(pf.hg(b,c)),b=ma);return{oc:a,I:b}};var sf=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||Ua(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return d},tf=function(a){K.hasOwnProperty("autoEventsSettings")||(K.autoEventsSettings={});var b=K.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},uf=
function(a,b,c,d){var e=tf(a),g=Ba(e,b,d);e[b]=c(g)},vf=function(a,b,c){var d=tf(a);return Ba(d,b,c)};var wf=function(){for(var a=La.userAgent+(y.cookie||"")+(y.referrer||""),b=a.length,c=x.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(ya()/1E3)].join(".")},zf=function(a,b,c,d){var e=xf(b);return jb(a,e,yf(c),d)},xf=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},yf=function(a){if(!a||
"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Af(a,b){var c=""+xf(a),d=yf(b);1<d&&(c+="-"+d);return c};var Bf=["1"],Cf={},Gf=function(a,b,c,d){var e=Df(a);Cf[e]||Ef(e,b,c)||(Ff(e,wf(),b,c,d),Ef(e,b,c))};function Ff(a,b,c,d,e){var g;g=["1",Af(d,c),b].join(".");nb(a,g,c,d,0==e?void 0:new Date(ya()+1E3*(void 0==e?7776E3:e)))}function Ef(a,b,c){var d=zf(a,b,c,Bf);d&&(Cf[a]=d);return d}function Df(a){return(a||"_gcl")+"_au"};var Hf=function(){for(var a=[],b=y.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Nc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Nc]||(g[a[h].Nc]=[]),g[a[h].Nc].push({timestamp:k[1],xf:k[2]}))}return g};function If(){for(var a=Jf,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Kf(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var Jf,Lf,Mf=function(a){Jf=Jf||Kf();Lf=Lf||If();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,p=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(p=64));b.push(Jf[l],Jf[m],Jf[p],Jf[q])}return b.join("")},Nf=function(a){function b(b){for(;d<a.length;){var c=a.charAt(d++),e=Lf[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}Jf=Jf||Kf();Lf=Lf||
If();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Of;function Pf(a,b){if(!a||b===y.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}var Qf=function(){var a=Na("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Rf=/(.*?)\*(.*?)\*(.*)/,Sf=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Tf=/^(?:www\.|m\.|amp\.)+/,Uf=/([^?#]+)(\?[^#]*)?(#.*)?/,Vf=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,Xf=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Mf(String(d))))}var e=b.join("*");return["1",Wf(e),e].join("*")},Wf=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Of)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}Of=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Of[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Zf=function(){return function(a){var b=fb(x.location.href),c=b.search.replace("?",""),d=cb(c,"_gl",!0)||"";a.query=Yf(d)||{};var e=D(b,"fragment").match(Vf);a.fragment=Yf(e&&e[3]||
"")||{}}},Yf=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=Rf.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],p=0;p<b;++p)if(m===Wf(k,p)){l=!0;break a}l=!1}if(l){for(var q={},r=k?k.split("*"):[],w=0;w<r.length;w+=2)q[r[w]]=Nf(r[w+1]);return q}}}}catch(v){}};
function $f(a,b,c){function d(a){var b=a,c=Vf.exec(b),d=b;if(c){var e=c[2],g=c[4];d=c[1];g&&(d=d+e+g)}a=d;var h=a.charAt(a.length-1);a&&"&"!==h&&(a+="&");return a+l}c=void 0===c?!1:c;var e=Uf.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function ag(a,b,c){for(var d={},e={},g=Qf().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&Pf(k.domains,b)&&(k.fragment?Da(e,k.callback()):Da(d,k.callback()))}if(Fa(d)){var l=Xf(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var p=a.childNodes||[],q=!1,r=0;r<p.length;r++){var w=p[r];if("_gl"===w.name){w.setAttribute("value",l);q=!0;break}}if(!q){var v=y.createElement("input");v.setAttribute("type","hidden");v.setAttribute("name","_gl");v.setAttribute("value",
l);a.appendChild(v)}}else if("post"===m){var u=$f(l,a.action);Za.test(u)&&(a.action=u)}}}else bg(l,a,!1)}if(!c&&Fa(e)){var z=Xf(e);bg(z,a,!0)}}function bg(a,b,c){if(b.href){var d=$f(a,b.href,void 0===c?!1:c);Za.test(d)&&(b.href=d)}}
var cg=function(a){try{var b;a:{for(var c=a.target||a.srcElement||{},d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||ag(e,e.hostname,!1)}}catch(h){}},dg=function(a){try{var b=a.target||a.srcElement||{};if(b.action){var c=D(fb(b.action),"host");ag(b,c,!0)}}catch(d){}},eg=function(a,b,c,d){var e=Qf();e.init||(A(y,"mousedown",cg),A(y,"keyup",cg),A(y,"submit",dg),e.init=!0);var g={callback:a,domains:b,
fragment:"fragment"===c,forms:!!d};Qf().decorators.push(g)},fg=function(){var a=y.location.hostname,b=Sf.exec(y.referrer);if(!b)return!1;var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}return a.replace(Tf,"")===e.replace(Tf,"")},gg=function(a,b){return!1===a?!1:a||b||fg()};var hg=/^\w+$/,ig=/^[\w-]+$/,jg=/^~?[\w-]+$/,kg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function lg(a){return a&&"string"==typeof a&&a.match(hg)?a:"_gcl"}var ng=function(){var a=fb(x.location.href),b=D(a,"query",!1,void 0,"gclid"),c=D(a,"query",!1,void 0,"gclsrc"),d=D(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||cb(e,"gclid",void 0);c=c||cb(e,"gclsrc",void 0)}return mg(b,c,d)};
function mg(a,b,c){var d={},e=function(a,b){d[b]||(d[b]=[]);d[b].push(a)};if(void 0!==a&&a.match(ig))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function og(a,b,c){function d(a,b){var c=pg(a,e);c&&nb(c,b,h,g,l,!0)}b=b||{};var e=lg(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Jd?7776E3:b.Jd;c=c||ya();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),p=function(a){return["GCL",m,a].join(".")};a.aw&&(!0===b.bh?d("aw",p("~"+a.aw[0])):d("aw",p(a.aw[0])));a.dc&&d("dc",p(a.dc[0]));a.gf&&d("gf",p(a.gf[0]));a.ha&&d("ha",p(a.ha[0]))}
var pg=function(a,b){var c=kg[a];if(void 0!==c)return b+c},qg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)};function rg(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var sg=function(a,b,c,d,e){if(qa(b)){var g=lg(e);eg(function(){for(var b={},c=0;c<a.length;++c){var d=pg(a[c],g);if(d){var e=gb(d,y.cookie);e.length&&(b[d]=e.sort()[e.length-1])}}return b},b,c,d)}},tg=function(a){return a.filter(function(a){return jg.test(a)})},ug=function(a,b){for(var c=lg(b&&b.prefix),d={},e=0;e<a.length;e++)kg[a[e]]&&(d[a[e]]=kg[a[e]]);ta(d,function(a,d){var e=gb(c+d,y.cookie);if(e.length){var g=e[0],h=qg(g),p={};p[a]=[rg(g)];og(p,b,h)}})};var vg=/^\d+\.fls\.doubleclick\.net$/;function wg(a){var b=fb(x.location.href),c=D(b,"host",!1);if(c&&c.match(vg)){var d=D(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function xg(a,b){if("aw"==a||"dc"==a){var c=wg("gcl"+a);if(c)return c.split(".")}var d=lg(b);if("_gcl"==d){var e;e=ng()[a]||[];if(0<e.length)return e}var g=pg(a,d),h;if(g){var k=[];if(y.cookie){var l=gb(g,y.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var p=rg(l[m]);p&&-1===n(k,p)&&k.push(p)}h=tg(k)}else h=k}else h=k}else h=[];return h}
var yg=function(){var a=wg("gac");if(a)return decodeURIComponent(a);var b=Hf(),c=[];ta(b,function(a,b){for(var d=[],e=0;e<b.length;e++)d.push(b[e].xf);d=tg(d);d.length&&c.push(a+":"+d.join(","))});return c.join(";")},zg=function(a,b,c,d,e){Gf(b,c,d,e);var g=Cf[Df(b)],h=ng().dc||[],k=!1;if(g&&0<h.length){var l=K.joined_au=K.joined_au||{},m=b||"_gcl";if(!l[m])for(var p=0;p<h.length;p++){var q="https://adservice.google.com/ddm/regclk",r=q=q+"?gclid="+h[p]+"&auiddc="+g;La.sendBeacon&&La.sendBeacon(r)||Sa(r);k=l[m]=
!0}}k|=a;if(k&&g){var w=Df(b),v=Cf[w];v&&Ff(w,v,c,d,e)}};var Ag;if(3===H.sb.length)Ag="g";else{var Bg="G";Ag=Bg}
var Cg={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Ag},Dg=function(a){var b=H.m.split("-"),c=b[0].toUpperCase(),d=Cg[c]||"i",e=a&&"GTM"===c?b[1]:"",g;if(3===H.sb.length){var h=void 0;g="2"+(h||"w")}else g="";return g+d+H.sb+e};var Kg=!!x.MutationObserver,Lg=void 0,Mg=function(a){if(!Lg){var b=function(){var a=y.body;if(a)if(Kg)(new MutationObserver(function(){for(var a=0;a<Lg.length;a++)C(Lg[a])})).observe(a,{childList:!0,subtree:!0});else{var b=!1;A(a,"DOMNodeInserted",function(){b||(b=!0,C(function(){b=!1;for(var a=0;a<Lg.length;a++)C(Lg[a])}))})}};Lg=[];y.body?b():C(b)}Lg.push(a)};
var Ug=function(){var a=y.body,b=y.documentElement||a&&a.parentElement,c,d;if(y.compatMode&&"BackCompat"!==y.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(a,b){return a&&b?Math.min(a,b):Math.max(a,b)};Ec(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Vg=function(a){var b=Ug(),c=b.height,d=b.width,e=a.getBoundingClientRect(),g=e.bottom-e.top,h=e.right-e.left;return g&&h?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/g,1)):0},Wg=function(a){if(y.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!x.getComputedStyle)return!0;var c=x.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var g=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-1)),g=Math.min(h,
g))}if(void 0!==g&&0>=g)return!0;(d=d.parentElement)&&(e=x.getComputedStyle(d,null))}return!1};var Xg=[],Yg=!(!x.IntersectionObserver||!x.IntersectionObserverEntry),Zg=function(a,b,c){for(var d=new x.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var g=0;g<Xg.length;g++)if(!Xg[g])return Xg[g]=d,g;return Xg.push(d)-1},$g=function(a,b,c){function d(b,c){var d={top:0,bottom:0,right:0,left:0,width:0,height:0},e={boundingClientRect:b.getBoundingClientRect(),
intersectionRatio:c,intersectionRect:d,isIntersecting:0<c,rootBounds:d,target:b,time:ya()};C(function(){return a(e)})}for(var e=[],g=[],h=0;h<b.length;h++)e.push(0),g.push(-1);c.sort(function(a,b){return a-b});return function(){for(var a=0;a<b.length;a++){var h=Vg(b[a]);if(h>e[a])for(;g[a]<c.length-1&&h>=c[g[a]+1];)d(b[a],h),g[a]++;else if(h<e[a])for(;0<=g[a]&&h<=c[g[a]];)d(b[a],h),g[a]--;e[a]=h}}},ah=function(a,b,c){for(var d=0;d<c.length;d++)1<c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Yg){var e=!1;C(function(){e||
$g(a,b,c)()});return Zg(function(b){e=!0;for(var c={Da:0};c.Da<b.length;c={Da:c.Da},c.Da++)C(function(c){return function(){return a(b[c.Da])}}(c))},b,c)}return x.setInterval($g(a,b,c),1E3)},bh=function(a){Yg?0<=a&&a<Xg.length&&Xg[a]&&(Xg[a].disconnect(),Xg[a]=void 0):x.clearInterval(a)};var dh=x.clearTimeout,eh=x.setTimeout,T=function(a,b,c){if(ue()){b&&C(b)}else return Pa(a,b,c)},fh=function(){return new Date},U=function(){return x.location.href},gh=function(a){return D(fb(a),"fragment")},hh=function(a){return eb(fb(a))},V=function(a,b){return ad(a,b||2)},ih=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Ie(a)},jh=function(a,b){x[a]=b},W=function(a,b,c){b&&(void 0===x[a]||c&&
!x[a])&&(x[a]=b);return x[a]},kh=function(a,b,c){return gb(a,b,void 0===c?!0:!!c)},lh=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Jd:d},g=ng();og(g,e);ug(["aw"],e);ug(["dc"],e);},mh=function(a,b,c,d,e){var g=Zf(),h=Qf();h.data||(h.data=
{query:{},fragment:{}},g(h.data));var k={},l=h.data;l&&(Da(k,l.query),Da(k,l.fragment));for(var m=lg(b),p=0;p<a.length;++p){var q=a[p];if(void 0!==kg[q]){var r=pg(q,m),w=k[r];if(w){var v=Math.min(qg(w),ya()),u;b:{for(var z=v,E=gb(r,y.cookie),B=0;B<E.length;++B)if(qg(E[B])>z){u=!0;break b}u=!1}u||nb(r,w,c,d,0==e?void 0:new Date(v+1E3*(null==e?7776E3:e)),!0)}}}var G={prefix:b,path:c,domain:d};og(mg(k.gclid,k.gclsrc),G);},nh=function(a,b,c,d,e){
sg(a,b,c,d,e);},oh=function(a,b){if(ue()){b&&C(b)}else Ra(a,b)},ph=function(a){return!!vf(a,"init",!1)},qh=function(a){tf(a).init=!0},rh=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":rc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&ta(b,function(a,b){b&&(d+="&"+a+"="+encodeURIComponent(b))});T(O("https://","http://",d))};var th=pf.Rf;
var uh=new za;function vh(a,b){function c(a){var b=fb(a),c=D(b,"protocol"),d=D(b,"host",!0),e=D(b,"port"),g=D(b,"path").toLowerCase().replace(/\/$/,"");if(void 0===c||"http"==c&&"80"==e||"https"==c&&"443"==e)c="web",e="default";return[c,d,e,g]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0}
function wh(a){var b=a.arg0,c=a.arg1;if(a.any_of&&qa(c)){for(var d=0;d<c.length;d++)if(wh({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(u){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var p;p=String(b).split(",");return 0<=n(p,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var q;var r=a.ignore_case?"i":void 0;try{var w=String(c)+r,v=uh.get(w);v||(v=new RegExp(c,r),uh.set(w,v));q=v.test(b)}catch(u){q=!1}return q;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return vh(b,
c)}return!1};var yh=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var zh={},Ah=encodeURI,X=encodeURIComponent,Bh=Sa;var Ch=function(a,b){if(!a)return!1;var c=D(fb(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var Y=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};zh.Of=function(){var a=!1;return a};var li=function(a,b,c,d){this.n=a;this.t=b;this.p=c;this.d=d},mi=function(){this.c=1;this.e=[];this.p=null};function ni(a){var b=K,c=b.gss=b.gss||{};return c[a]=c[a]||new mi}var oi=function(a,b){ni(a).p=b},pi=function(a){var b=ni(a),c=b.p;if(c){var d=b.e,e=[];b.e=[];var g=function(a){for(var b=0;b<a.length;b++)try{var d=a[b];d.d?(d.d=!1,e.push(d)):c(d.n,d.t,d.p)}catch(m){}};g(d);g(e)}};var ri=function(){var a=x.gaGlobal=x.gaGlobal||{};a.hid=a.hid||sa();return a.hid};var Gi=window,Hi=document,Ii=function(a){var b=Gi._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Gi["ga-disable-"+a])return!0;try{var c=Gi.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=gb("AMP_TOKEN",Hi.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Hi.getElementById("__gaOptOutExtension")?!0:!1};var Oi=function(a,b,c){Ni(a);var d=Math.floor(ya()/1E3);ni(a).e.push(new li(b,d,c,void 0));pi(a)},Qi=function(a,b,c){Ni(a);var d=Math.floor(ya()/1E3);ni(a).e.push(new li(b,d,c,!0))},Ni=function(a){if(1===ni(a).c){ni(a).c=2;var b=encodeURIComponent(a);Pa(("http:"!=x.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},Si=function(a,b){},Ri=function(a,b){};var Z={a:{}};
Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.b=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.g="sp";Z.__sp.h=!0;Z.__sp.b=0})(function(a){var b=a.vtp_gtmOnFailure;yd();T("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=W("google_trackConversion");if(na(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=Y(a.vtp_customParams,"key","value"));var e={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(d.event=a.vtp_eventName),a.vtp_eventValue&&
(e.value=a.vtp_eventValue),a.vtp_eventItems&&(e.items=a.vtp_eventItems));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_gtag_event_data:e,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:Dg()})||b()}else b()},b)})}();Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.g="c";Z.__c.h=!0;Z.__c.b=0})(function(a){return a.vtp_value})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.b=0})(function(){return uc})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.g="f";Z.__f.h=!0;Z.__f.b=0})(function(a){var b=V("gtm.referrer",1)||y.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?D(fb(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):hh(String(b)):String(b)})}();

Z.a.u=["google"],function(){var a=function(a){return{toString:function(){return a}}};(function(a){Z.__u=a;Z.__u.g="u";Z.__u.h=!0;Z.__u.b=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:V("gtm.url",1))||U();var d=b[a("vtp_component")];if(!d||"URL"==d)return hh(String(c));var e=fb(String(c)),g;if("QUERY"==d&&b[a("vtp_multiQueryKeys")])a:{var h=b[a("vtp_queryKey")],k;k=qa(h)?h:String(h||"").replace(/\s+/g,"").split(",");for(var l=0;l<k.length;l++){var m=D(e,"QUERY",void 0,void 0,
k[l]);if(null!=m){g=m;break a}}g=void 0}else g=D(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,"QUERY"==d?b[a("vtp_queryKey")]:void 0);return g})}();Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.b=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=V(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();

Z.a.ua=["google"],function(){var a,b=function(b){var c={},e={},g={},h={},k={};if(b.vtp_gaSettings){var l=b.vtp_gaSettings;t(Y(l.vtp_fieldsToSet,"fieldName","value"),e);t(Y(l.vtp_contentGroup,"index","group"),g);t(Y(l.vtp_dimension,"index","dimension"),h);t(Y(l.vtp_metric,"index","metric"),k);b.vtp_gaSettings=null;l.vtp_fieldsToSet=void 0;l.vtp_contentGroup=void 0;l.vtp_dimension=void 0;l.vtp_metric=void 0;var m=t(l);b=t(b,m)}t(Y(b.vtp_fieldsToSet,"fieldName","value"),e);t(Y(b.vtp_contentGroup,"index",
"group"),g);t(Y(b.vtp_dimension,"index","dimension"),h);t(Y(b.vtp_metric,"index","metric"),k);var p=Fd(b.vtp_functionName);if(na(p)){var q="",r="";b.vtp_setTrackerName&&"string"==typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(r=b.vtp_trackerName,q=r+"."):(r="gtm"+yc(),q=r+".");var w={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,
storage:!0,useAmpClientId:!0,storeGac:!0},v={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},u=function(a){var b=[].slice.call(arguments,0);b[0]=q+b[0];p.apply(window,b)},z=function(a,b){return void 0===b?b:a(b)},E=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&u("set",a+c,b[c])},B=function(){
var a=function(a,b,c){if(!Ka(b))return!1;for(var d=Ba(Object(b),c,[]),e=0;d&&e<d.length;e++)u(a,d[e]);return!!d&&0<d.length},c;b.vtp_useEcommerceDataLayer?c=V("ecommerce",1):b.vtp_ecommerceMacroData&&(c=b.vtp_ecommerceMacroData.ecommerce);if(!Ka(c))return;c=Object(c);var d=Ba(e,"currencyCode",c.currencyCode);void 0!==d&&u("set","&cu",d);a("ec:addImpression",c,"impressions");if(a("ec:addPromo",c[c.promoClick?"promoClick":"promoView"],"promotions")&&c.promoClick){u("ec:setAction","promo_click",c.promoClick.actionField);
return}for(var g="detail checkout checkout_option click add remove purchase refund".split(" "),h=0;h<g.length;h++){var k=c[g[h]];if(k){a("ec:addProduct",k,"products");u("ec:setAction",g[h],k.actionField);break}}},G=function(a,b,c){var d=0;if(a)for(var e in a)if(a.hasOwnProperty(e)&&(c&&w[e]||!c&&void 0===w[e])){var g=v[e]?va(a[e]):a[e];"anonymizeIp"!=e||g||(g=void 0);b[e]=g;d++}return d},R={name:r};G(e,R,!0);p("create",b.vtp_trackingId||
c.trackingId,R);u("set","&gtm",Dg(!0));b.vtp_enableRecaptcha&&u("require","recaptcha","recaptcha.js");(function(a,c){void 0!==b[c]&&u("set",a,b[c])})("nonInteraction","vtp_nonInteraction");E("contentGroup",g);E("dimension",h);E("metric",k);var M={};G(e,M,!1)&&u("set",M);var F;b.vtp_enableLinkId&&u("require","linkid","linkid.js");
u("set","hitCallback",function(){var a=e&&e.hitCallback;na(a)&&a();b.vtp_gtmOnSuccess()});if("TRACK_EVENT"==b.vtp_trackType){b.vtp_enableEcommerce&&(u("require","ec","ec.js"),B());var N={hitType:"event",eventCategory:String(b.vtp_eventCategory||c.category),eventAction:String(b.vtp_eventAction||c.action),eventLabel:z(String,b.vtp_eventLabel||c.label),eventValue:z(ua,b.vtp_eventValue||c.value)};G(F,N,!1);u("send",N);}else if("TRACK_SOCIAL"==
b.vtp_trackType){}else if("TRACK_TRANSACTION"==b.vtp_trackType){}else if("TRACK_TIMING"==b.vtp_trackType){
var ja={hitType:"timing",timingCategory:String(b.vtp_timingCategory||c.category),timingVar:String(b.vtp_timingVar||c.name),timingValue:ua(b.vtp_timingValue||c.value),timingLabel:z(String,b.vtp_timingLabel||c.label)};G(F,ja,!1);u("send",ja);}else if("DECORATE_LINK"==b.vtp_trackType){}else if("DECORATE_FORM"==b.vtp_trackType){}else if("TRACK_DATA"==
b.vtp_trackType){}else{b.vtp_enableEcommerce&&(u("require","ec","ec.js"),B());if(b.vtp_doubleClick||"DISPLAY_FEATURES"==b.vtp_advertisingFeaturesType){var Aa="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");u("require","displayfeatures",void 0,{cookieName:Aa})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==b.vtp_advertisingFeaturesType){var ca=
"_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");u("require","adfeatures",{cookieName:ca})}F?u("send","pageview",F):u("send","pageview");b.vtp_autoLinkDomains&&Gd(q,b.vtp_autoLinkDomains,!!b.vtp_useHashAutoLink,!!b.vtp_decorateFormsAutoLink);}if(!a){var pa=b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";b.vtp_useInternalVersion&&!b.vtp_useDebugVersion&&
(pa="internal/"+pa);a=!0;T(O("https:","http:","//www.google-analytics.com/"+pa,e&&e.forceSSL),function(){var a=Dd();a&&a.loaded||b.vtp_gtmOnFailure();},b.vtp_gtmOnFailure)}}else C(b.vtp_gtmOnFailure)};Z.__ua=b;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.b=0}();




Z.a.opt=["google"],function(){var a,b=function(b){var c={};if(b.vtp_gaSettings){var e=b.vtp_gaSettings;t(Y(e.vtp_fieldsToSet,"fieldName","value"),c);b.vtp_gaSettings=null;e.vtp_fieldsToSet=void 0;var g=t(e);b=t(b,g)||{}}t(Y(b.vtp_fieldsToSet,"fieldName","value"),c);var h=Fd(b.vtp_functionName);if(na(h)){h.r=!0;var k="",l="";b.vtp_setTrackerName&&"string"===typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(l=b.vtp_trackerName,k=l+"."):(l="gtm"+yc(),k=l+".");var m={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},p={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},q=function(a,b,c){var d=0,e;for(e in a)if(a.hasOwnProperty(e)&&
(c&&m[e]||!c&&void 0===m[e])){var g=p[e]?va(a[e]):a[e];"anonymizeIp"!==e||g||(g=void 0);b[e]=g;d++}return d},r={name:l};q(c,r,!0);var w={"&gtm":Dg(!0)};q(c,w,!1);var v=encodeURI(O("https:","http:","//www.google-analytics.com/"+(b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!c.forceSSL));h("create",b.vtp_trackingId,r);h(k+"set",w);h(k+"require",b.vtp_optimizeContainerId,{dataLayer:"dataLayer"});h(b.vtp_gtmOnSuccess);h(k+"require","render");a||(a=!0,T(v,function(){return Dd().loaded||
b.vtp_gtmOnFailure()},b.vtp_gtmOnFailure));var u=W("dataLayer"),z=u&&u.hide;z&&z.end&&(z[b.vtp_optimizeContainerId]=!0)}else C(b.vtp_gtmOnFailure)};Z.__opt=b;Z.__opt.g="opt";Z.__opt.h=!0;Z.__opt.b=0}();
Z.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha"];(function(a){Z.__gclidw=a;Z.__gclidw.g="gclidw";Z.__gclidw.h=!0;Z.__gclidw.b=100})(function(b){C(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var g=e,h=c,k=d;b.vtp_enableCrossDomainFeature&&(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||fg())&&mh(a,g,h,k));lh(e,c,d);zg(!1,e,c,d);var l=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&
b.vtp_linkerDomains){var m=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");nh(a,m,b.vtp_urlPosition,!!b.vtp_formDecoration,l)}})}();
Z.a.aev=["google"],function(){var a=void 0,b="",c=0,d=void 0,e={ATTRIBUTE:"gtm.elementAttribute",CLASSES:"gtm.elementClasses",ELEMENT:"gtm.element",ID:"gtm.elementId",HISTORY_CHANGE_SOURCE:"gtm.historyChangeSource",HISTORY_NEW_STATE:"gtm.newHistoryState",HISTORY_NEW_URL_FRAGMENT:"gtm.newUrlFragment",HISTORY_OLD_STATE:"gtm.oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"gtm.oldUrlFragment",TARGET:"gtm.elementTarget"},g=function(a){var b=V(e[a.vtp_varType],1);return void 0!==b?b:a.vtp_defaultValue},h=function(a,
b){if(!a)return!1;var c=l(U()),d;d=qa(b.vtp_affiliatedDomains)?b.vtp_affiliatedDomains:String(b.vtp_affiliatedDomains||"").replace(/\s+/g,"").split(",");for(var e=[c],g=0;g<d.length;g++)if(d[g]instanceof RegExp){if(d[g].test(a))return!1}else{var h=d[g];if(0!=h.length){if(0<=l(a).indexOf(h))return!1;e.push(l(h))}}return!Ch(a,e)},k=/^https?:\/\//i,l=function(a){k.test(a)||(a="http://"+a);return D(fb(a),"HOST",!0)};(function(a){Z.__aev=a;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.b=0})(function(e){switch(e.vtp_varType){case "TAG_NAME":return V("gtm.element",
1).tagName||e.vtp_defaultValue;case "TEXT":var k,l=V("gtm.element",1),m=V("event",1),w=Number(fh());a===l&&b===m&&c>w-250?k=d:(d=k=l?Wa(l):"",a=l,b=m);c=w;return k||e.vtp_defaultValue;case "URL":var v;a:{var u=String(V("gtm.elementUrl",1)||e.vtp_defaultValue||""),z=fb(u);switch(e.vtp_component||"URL"){case "URL":v=u;break a;case "IS_OUTBOUND":v=h(u,e);break a;default:v=D(z,e.vtp_component,e.vtp_stripWww,e.vtp_defaultPages,e.vtp_queryKey)}}return v;case "ATTRIBUTE":var E;if(void 0===e.vtp_attribute)E=
g(e);else{var B=V("gtm.element",1);E=Ua(B,e.vtp_attribute)||e.vtp_defaultValue||""}return E;default:return g(e)}})}();
Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.g="gas";Z.__gas.h=!0;Z.__gas.b=0})(function(a){var b=t(a),c=b;c[P.qa]=null;c[P.ye]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.a.hl=["google"],function(){function a(a){return a.target&&a.target.location&&a.target.location.href?a.target.location.href:U()}function b(b,c){A(b,"hashchange",function(b){var d=a(b);c({source:"hashchange",state:null,url:hh(d),B:gh(d)})})}function c(b,c){A(b,"popstate",function(b){var d=a(b);c({source:"popstate",state:b.state,url:hh(d),B:gh(d)})})}function d(a,b,c){var d=b.history,e=d[a];if(na(e))try{d[a]=function(b,g,h){e.apply(d,[].slice.call(arguments,0));c({source:a,state:b,url:hh(U()),B:gh(U())})}}catch(p){}}
function e(){var a={source:null,state:W("history").state||null,url:hh(U()),B:gh(U())};return function(b){var c=a,d={};d[c.source]=!0;d[b.source]=!0;if(!d.popstate||!d.hashchange||c.B!=b.B){var e={event:"gtm.historyChange","gtm.historyChangeSource":b.source,"gtm.oldUrlFragment":a.B,"gtm.newUrlFragment":b.B,"gtm.oldHistoryState":a.state,"gtm.newHistoryState":b.state};
a=b;ih(e)}}}(function(a){Z.__hl=a;Z.__hl.g="hl";Z.__hl.h=!0;Z.__hl.b=0})(function(a){var g=W("self");if(!ph("hl")){var k=e();b(g,k);c(g,k);d("pushState",g,k);d("replaceState",g,k);qh("hl")}C(a.vtp_gtmOnSuccess)})}();
Z.a.awct=["google"],function(){var a=!1,b=[],c=function(a){var b=W("google_trackConversion"),c=a.gtm_onFailure;"function"==typeof b?b(a)||c():c()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(c){yd();var d={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:c.vtp_conversionId,google_conversion_label:c.vtp_conversionLabel,
google_conversion_value:c.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:c.vtp_gtmOnSuccess,gtm_onFailure:c.vtp_gtmOnFailure,google_gtm:Dg()},h=function(a){return function(b,e,g){var h="DATA_LAYER"==a?V(g):c[e];h&&(d[b]=h)}},k=h("JSON");k("google_conversion_currency","vtp_currencyCode");k("google_conversion_order_id","vtp_orderId");c.vtp_enableProductReporting&&(k=h(c.vtp_productReportingDataSource),k("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),k("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),k("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),k("google_basket_discount","vtp_discount","discount"),k("google_conversion_items","vtp_items","items"),d.google_conversion_items=d.google_conversion_items.map(function(a){return{value:a.price,quantity:a.quantity,item_id:a.id}}));!c.hasOwnProperty("vtp_enableConversionLinker")||c.vtp_enableConversionLinker?(c.vtp_conversionCookiePrefix&&(d.google_gcl_cookie_prefix=c.vtp_conversionCookiePrefix),
d.google_read_gcl_cookie_opt_out=!1):d.google_read_gcl_cookie_opt_out=!0;b.push(d);a||(a=!0,T("//www.googleadservices.com/pagead/conversion_async.js",g(),e("//www.googleadservices.com/pagead/conversion_async.js")))};Z.__awct=h;Z.__awct.g="awct";Z.__awct.h=!0;Z.__awct.b=0}();
Z.a.fsl=[],function(){function a(){var a=W("document"),g=c(),h=HTMLFormElement.prototype.submit;A(a,"click",function(a){var b=a.target;if(b&&(b=Ya(b,["button","input"],100))&&("submit"==b.type||"image"==b.type)&&b.name&&Ua(b,"value")){var c;(c=b.form?b.form.tagName?b.form:Va(b.form):Ya(b,["form"],100))&&g.store(c,b)}},!1);A(a,"submit",function(c){var e=c.target;if(!e)return c.returnValue;var k=c.defaultPrevented||!1===c.returnValue,p=!0;if(d(e,function(){if(p){var b=g.get(e),c;b&&(c=a.createElement("input"),
c.type="hidden",c.name=b.name,c.value=b.value,e.appendChild(c));h.call(e);c&&e.removeChild(c)}},k,b(e)&&!k))p=!1;else return k||(c.preventDefault&&c.preventDefault(),c.returnValue=!1),!1;return c.returnValue},!1);HTMLFormElement.prototype.submit=function(){var a=this,c=!0;d(a,function(){c&&h.call(a)},!1,b(a))&&(h.call(a),c=!1)}}function b(a){var b=a.target;return b&&"_self"!==b&&"_parent"!==b&&"_top"!==b?!1:!0}function c(){var a=[],b=function(b){return ra(a,function(a){return a.form===b})};return{store:function(c,
d){var e=b(c);e?e.button=d:a.push({form:c,button:d})},get:function(a){var c=b(a);return c?c.button:null}}}function d(a,b,c,d){var e=vf("fsl",c?"nv.mwt":"mwt",0),g;g=c?vf("fsl","nv.ids",[]):vf("fsl","ids",[]);if(!g.length)return!0;var h=sf(a,"gtm.formSubmit",g),k=a.action;k&&k.tagName&&(k=a.cloneNode(!1).action);h["gtm.elementUrl"]=k;if(d&&e){if(!ih(h,b,e))return!1}else ih(h,function(){},e||2E3);return!0}(function(a){Z.__fsl=a;Z.__fsl.g="fsl";Z.__fsl.h=!0;Z.__fsl.b=0})(function(b){var c=b.vtp_waitForTags,
d=b.vtp_checkValidation,e=Number(b.vtp_waitForTagsTimeout);if(!e||0>=e)e=2E3;var l=b.vtp_uniqueTriggerId||"0";if(c){var m=function(a){return Math.max(e,a)};uf("fsl","mwt",m,0);d||uf("fsl","nv.mwt",m,0)}var p=function(a){a.push(l);return a};uf("fsl","ids",p,[]);d||uf("fsl","nv.ids",p,[]);ph("fsl")||(a(),qh("fsl"));C(b.vtp_gtmOnSuccess)})}();Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.g="smm";Z.__smm.h=!0;Z.__smm.b=0})(function(a){var b=a.vtp_input,c=Y(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Z.a.html=["customScripts"],function(){function a(b,c,g,h){return function(){try{if(0<c.length){var d=c.shift(),e=a(b,c,g,h);if("SCRIPT"==String(d.nodeName).toUpperCase()&&"text/gtmscript"==d.type){var m=y.createElement("script");m.async=!1;m.type="text/javascript";m.id=d.id;m.text=d.text||d.textContent||d.innerHTML||"";d.charset&&(m.charset=d.charset);var p=d.getAttribute("data-gtmsrc");p&&(m.src=p,Oa(m,e));b.insertBefore(m,null);p||e()}else if(d.innerHTML&&0<=d.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];d.firstChild;)q.push(d.removeChild(d.firstChild));b.insertBefore(d,null);a(d,q,e,h)()}else b.insertBefore(d,null),e()}else g()}catch(r){C(h)}}}var c=function(d){if(y.body){var e=
d.vtp_gtmOnFailure,g=th(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.oc,k=g.I;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(y.body,Xa(h),k,e)()}else eh(function(){c(d)},
200)};Z.__html=c;Z.__html.g="html";Z.__html.h=!0;Z.__html.b=0}();


Z.a.lcl=[],function(){function a(){var a=W("document"),d=0,e=function(c){var e=c.target;if(e&&3!==c.which&&(!c.timeStamp||c.timeStamp!==d)){d=c.timeStamp;e=Ya(e,["a","area"],100);if(!e)return c.returnValue;var g=c.defaultPrevented||!1===c.returnValue,l=vf("lcl",g?"nv.mwt":"mwt",0),m;m=g?vf("lcl","nv.ids",[]):vf("lcl","ids",[]);if(m.length){var p=sf(e,"gtm.linkClick",m);if(b(c,e,a)&&!g&&l&&e.href){var q=W((e.target||"_self").substring(1)),r=!0;if(ih(p,function(){r&&q&&(q.location.href=e.href)},l))r=
!1;else return c.preventDefault&&c.preventDefault(),c.returnValue=!1}else ih(p,function(){},l||2E3);return!0}}};A(a,"click",e,!1);A(a,"auxclick",e,!1)}function b(a,b,e){if(2===a.which||a.ctrlKey||a.shiftKey||a.altKey||a.metaKey)return!1;var c=b.href.indexOf("#"),d=b.target;if(d&&"_self"!==d&&"_parent"!==d&&"_top"!==d||0===c)return!1;if(0<c){var k=hh(b.href),l=hh(e.location);return k!==l}return!0}(function(a){Z.__lcl=a;Z.__lcl.g="lcl";Z.__lcl.h=!0;Z.__lcl.b=0})(function(b){var c=void 0===b.vtp_waitForTags?
!0:b.vtp_waitForTags,e=void 0===b.vtp_checkValidation?!0:b.vtp_checkValidation,g=Number(b.vtp_waitForTagsTimeout);if(!g||0>=g)g=2E3;var h=b.vtp_uniqueTriggerId||"0";if(c){var k=function(a){return Math.max(g,a)};uf("lcl","mwt",k,0);e||uf("lcl","nv.mwt",k,0)}var l=function(a){a.push(h);return a};uf("lcl","ids",l,[]);e||uf("lcl","nv.ids",l,[]);ph("lcl")||(a(),qh("lcl"));C(b.vtp_gtmOnSuccess)})}();
Z.a.evl=["google"],function(){function a(a,b){this.element=a;this.uid=b}function b(){var a=Number(V("gtm.start"))||0;return fh().getTime()-a}function c(a,c,d,l){function g(){if(!Wg(a.target)){c.has(e.rb)||c.set(e.rb,""+b());c.has(e.Zb)||c.set(e.Zb,""+b());var g=0;c.has(e.tb)&&(g=Number(c.get(e.tb)));g+=100;c.set(e.tb,""+g);if(g>=d){var h=sf(a.target,"gtm.elementVisibility",[c.uid]),k=Vg(a.target);h["gtm.visibleRatio"]=Math.round(1E3*k)/10;h["gtm.visibleTime"]=d;h["gtm.visibleFirstTime"]=Number(c.get(e.Zb));
h["gtm.visibleLastTime"]=Number(c.get(e.rb));ih(h);l()}}}if(!c.has(e.La)&&(0==d&&g(),!c.has(e.ra))){var h=W("self").setInterval(g,100);c.set(e.La,h)}}function d(a){a.has(e.La)&&(W("self").clearInterval(Number(a.get(e.La))),a.remove(e.La))}var e={La:"polling-id-",Zb:"first-on-screen-",rb:"recent-on-screen-",tb:"total-visible-time-",ra:"has-fired-"};a.prototype.has=function(a){return!!this.element.getAttribute("data-gtm-vis-"+a+this.uid)};a.prototype.get=function(a){return this.element.getAttribute("data-gtm-vis-"+
a+this.uid)};a.prototype.set=function(a,b){this.element.setAttribute("data-gtm-vis-"+a+this.uid,b)};a.prototype.remove=function(a){this.element.removeAttribute("data-gtm-vis-"+a+this.uid)};(function(a){Z.__evl=a;Z.__evl.g="evl";Z.__evl.h=!0;Z.__evl.b=0})(function(b){function g(){var b=!1,c=null;if("CSS"===l){try{c=Pe(m)}catch(F){}b=!!c&&u.length!=c.length}else if("ID"===l){var e=Va(m);e&&(c=[e],b=1!=u.length||u[0]!==e)}c||(c=[],b=0<u.length);if(b){for(var g=0;g<u.length;g++)d(new a(u[g],w));u=[];
for(var h=0;h<c.length;h++)u.push(c[h]);0<=z&&bh(z);0<u.length&&(z=ah(k,u,[r]))}}function k(b){var h=new a(b.target,w);b.intersectionRatio>=r?h.has(e.ra)||c(b,h,q,"ONCE"===v?function(){for(var b=0;b<u.length;b++){var c=new a(u[b],w);c.set(e.ra,"1");d(c)}bh(z);if(p&&Lg)for(var h=0;h<Lg.length;h++)Lg[h]===g&&Lg.splice(h,1)}:function(){h.set(e.ra,"1");d(h)}):(d(h),"MANY_PER_ELEMENT"===v&&h.has(e.ra)&&(h.remove(e.ra),h.remove(e.tb)),h.remove(e.rb))}var l=b.vtp_selectorType,m;"ID"===l?m=String(b.vtp_elementId):
"CSS"===l&&(m=String(b.vtp_elementSelector));var p=!!b.vtp_useDomChangeListener,q=b.vtp_useOnScreenDuration&&Number(b.vtp_onScreenDuration)||0,r=(Number(b.vtp_onScreenRatio)||50)/100,w=b.vtp_uniqueTriggerId,v=b.vtp_firingFrequency,u=[],z=-1;g();p&&Mg(g);C(b.vtp_gtmOnSuccess)})}();

var Ti={};Ti.macro=function(a){if(pf.$b.hasOwnProperty(a))return pf.$b[a]},Ti.onHtmlSuccess=pf.td(!0),Ti.onHtmlFailure=pf.td(!1);Ti.dataLayer=bd;Ti.callback=function(a){wc.hasOwnProperty(a)&&na(wc[a])&&wc[a]();delete wc[a]};Ti.Ve=function(){K[H.m]=Ti;xc=Z.a;Sb=Sb||pf;Tb=pd};
Ti.Jf=function(){K=x.google_tag_manager=x.google_tag_manager||{};if(K[H.m]){var a=K.zones;a&&a.unregisterChild(H.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Lb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Ob.push(e[g]);for(var h=b.predicates||[],k=0;k<h.length;k++)Nb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var p=l[m],q={},r=0;r<p.length;r++)q[p[r][0]]=
Array.prototype.slice.call(p[r],1);Mb.push(q)}Qb=Z;Rb=wh;Ti.Ve();Ne();sd=!1;td=0;if("interactive"==y.readyState&&!y.createEventObject||"complete"==y.readyState)vd();else{A(y,"DOMContentLoaded",vd);A(y,"readystatechange",vd);if(y.createEventObject&&y.documentElement.doScroll){var w=!0;try{w=!x.frameElement}catch(E){}w&&wd()}A(x,"load",vd)}Be=!1;"complete"===y.readyState?De():A(x,"load",De);a:{if(!Sc)break a;x.setInterval(Tc,864E5);}tc=(new Date).getTime();}};(0,Ti.Jf)();

})()
