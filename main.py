from flask import Flask, render_template, request,jsonify
import os

app = Flask(__name__, static_folder='static')


@app.route('/')
def index():
    return render_template('main.html')


@app.route('/contacts/')
def contact():
    return render_template('contact.html')

@app.route('/send/', methods=['GET', 'POST'])
def sendData():
    import send
    mail = request.form.get('mail')
    message = request.form.get('message')
    if send.checkMail(mail) == True:
        send.sendMail(mail, message)
        return render_template('email_sent.html')
    else:
        return render_template('email_error.html')


@app.route('/about_us/')
def about_us():
    return render_template('about_us.html')


@app.route('/projects/')
def projects():
    return render_template('projects.html')



if __name__ == '__main__':
    app.run(debug=True)
