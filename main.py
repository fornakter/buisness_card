from flask import Flask, render_template, request


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('main.html')


@app.route('/kontakt/')
def kontakt():
    return render_template('contact.html')

@app.route('/send/', methods=['GET','POST'])
def sendData():
    import send
    import checkinform
    mail = request.form.get('mail')
    message = request.form.get('message')
    name = request.form.get('client_name')
    if checkinform.checkMail(mail) == True:
        send.sendMail(mail,message)
        return "Poszło"
    else:
        return "Nie"


@app.route('/o_nas/')
def about():
    return render_template('about_us.html')


@app.route('/projects/')
def projects():
    return render_template('projects.html')



if __name__ == '__main__':
    app.run(debug=True)
