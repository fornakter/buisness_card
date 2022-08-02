#TODO wykonać moduł do sprawdzania informacji z forumlarza

# sprawdzenie poprawności wpisanego maila
def checkMail(mail):
    #sprawdzenie czy wpisane dane w formularzu to adres mailowy, sprawdzenie czy znajduje się 1 znak @ i 1 znak .
    if mail.count('@') == 1 and mail.count('.') == 1:
        return True
    else:
        return False