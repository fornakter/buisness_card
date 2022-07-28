from flask import Flask, render_template, request,jsonify

app = Flask(__name__, static_folder='styles')


@app.route('/')
def index():
    return render_template('main.html')


@app.route('/contacts/')
def contact():
    return render_template('contact.html')


@app.route('/send/', methods=['GET','POST'])
def sendData():
    import send
    mail = request.form.get('mail')
    message = request.form.get('message')
    if send.checkMail(mail) == True:
        send.sendMail(mail,message)
        #TODO zrobić szablon strony aby później można było dziedziczyć z niego i dodawać tylko do niego poszczególne elementy
        #TODO jsonify("Email został wysłany") należy zastąpić  render_template('email_sent.html')
        #TODO należy tam umieścić całą stronę internetową która ma zostać wyświetlona w przypadku gdy wiadomość  została pomyślnie wysłana
        return jsonify("Email został wysłany")
    else:
        #TODO zrobić podonie z jsonify("Email nie został wysłany") jak wyżej
        return jsonify("Problemy z wysłaniem emaila")


@app.route('/about_us/')
def about_us():
    return render_template('about_us.html')


@app.route('/projects/')
def projects():
    return render_template('projects.html')


if __name__ == '__main__':
    app.run(debug=True)
