#!/usr/bin/python
##############################
#
# INSTALLER SCRIPT
#
###############################

"""
Import Modules
"""
import os
import subprocess

print("""


  __    _____  ___    ________  ___________   __      ___      ___       _______   _______   
 |" \  (\"   \|"  \  /"       )("     _   ") /""\    |"  |    |"  |     /"     "| /"      \  
 ||  | |.\\   \    |(:   \___/  )__/  \\__/ /    \   ||  |    ||  |    (: ______)|:        | 
 |:  | |: \.   \\  | \___  \       \\_ /   /' /\  \  |:  |    |:  |     \/    |  |_____/   ) 
 |.  | |.  \    \. |  __/  \\      |.  |  //  __'  \  \  |___  \  |___  // ___)_  //      /  
 /\  |\|    \    \ | /" \   :)     \:  | /   /  \\  \( \_|:  \( \_|:  \(:      "||:  __   \  
(__\_|_)\___|\____\)(_______/       \__|(___/    \___)\_______)\_______)\_______)|__|  \___) 
                            
                        EvilPhisher - Installation                                                                             


\n\n""")

# Created the directory
if os.path.isdir("/root/EvilPhisher/creds/") == False:
    subprocess.call(["mkdir", "/root/EvilPhisher/creds/"])

# Created the directory
if os.path.isdir("/root/EvilPhisher/creds/saved") == False:
    subprocess.call(["mkdir", "/root/EvilPhisher/creds/saved"])

# Installs the requirements
subprocess.call(["pip", "install", "-r", "requirements.txt"])

# Downloads ngrok
subprocess.call(["wget", "https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip"])

# Unpacks Ngrok
subprocess.call(["unzip", "ngrok-stable-linux-amd64.zip"])

# Remove the zip file
subprocess.call(["rm", "ngrok-stable-linux-amd64.zip"])
