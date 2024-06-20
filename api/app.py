from flask import Flask, render_template, request, redirect, url_for, session
import secrets

app = Flask(__name__)
app.secret_key = secrets.token_hex(16)  # Generate a secret key

# Dummy user data
users = {
    'john': 'password123',
    'jane': 'mypassword'
}

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if username in users and users[username] == password:
            session['username'] = username
            return redirect(url_for('course'))
        else:
            return 'Invalid credentials. Please try again.'
    return render_template('login.html')

@app.route('/course')
def course():
    if 'username' in session:
        return render_template('course.html', username=session['username'])
    return render_template('login.html')

@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect(url_for('home'))

@app.route('/da')
def da():
    return render_template("course-da.html")

if __name__ == '__main__':
    app.run(debug=True)
