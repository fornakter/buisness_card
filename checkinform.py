# sprawdzenie poprawności wpisanego maila
import re

def checkMail(mail):
    #sprawdzenie czy wpisane dane w formularzu to adres mailowy, sprawdzenie czy znajduje się 1 znak @ i 1 znak .
    pat = "^[a-zA-Z0-9-_]+@[a-zA-Z0-9]+\.[a-z]{1,3}$"
    if re.match(pat, mail):
        return True
    else:
        return False

#sprawdzenie wiadomości
def checkMessage(message):
    if len(message) > 0:
        return True
    else:
        return False

#sprawdzenie imienia
def checkName(name):
    if len(name) > 0:
        return True
    else:
        return False
