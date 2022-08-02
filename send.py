#wysłanie maila za pomocą gmaila, protokółów SSL i SMTP
def sendMail(mail, mess):
    #importowanie potrzebnych bibliotek
    from email.message import EmailMessage
    import ssl
    import smtplib

    #określanie nadawcy maila, odbiorcy, hasła nadawcy, tematu oraz treści wiadomości
    sender = 'stronapython@gmail.com'
    password = 'bnyjmrhfdlvdvpuz'
    receiver = 'theforgedev@gmail.com'

    subject = 'Zlecenie'
    body = f'''
    Mail kontaktowy klienta: {mail}
    {mess}
    '''

    #Tworzenie obiektu emailmessage i ustawianie jego parametrów()
    email = EmailMessage()
    email['From'] = sender
    email['To'] = receiver
    email['Subject'] = subject
    email.set_content(body)

    #Tworzenie połączenia
    context = ssl.create_default_context()

    with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as smtp:
        #logowanie do maila
        smtp.login(sender, password)
        #wysłanie wiadomości
        smtp.sendmail(sender, receiver, email.as_string())