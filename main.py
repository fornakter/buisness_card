from flask import Flask, render_template, request,jsonify

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('main.html')


@app.route('/contacts/')
def kontakt():
    return render_template('kontakt.html')

@app.route('/send/', methods=['GET','POST'])
def sendData():
    import send
    mail = request.form.get('mail')
    message = request.form.get('message')
    # mail="abc@example.com"
    if send.checkMail(mail) == True:
        send.sendMail(mail,message)
        return jsonify("Poszło")
    else:
        return jsonify("Nie")


@app.route('/about_us/')
def about():
    return render_template('o_nas.html')


@app.route('/projects/')
def projects():
    return render_template('projects.html')



if __name__ == '__main__':
    app.run(debug=True)
