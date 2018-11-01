import sqlobjects
from flask import Flask, render_template
app = Flask(__name__)


@app.route("/")
def show_all_clients():
	clients = sqlobjects.get_all_clients()
	return render_template("clients.html", clients = clients, date = 'October 29')


@app.route("/july")
def july_clients():
	return sqlobjects.clients_in_july()

@app.route("/no_credits")
def no_credits():
	return sqlobjects.clients_no_credits()

@app.route("/no_clients")
def  no_clients():
	return sqlobjects.credits_no_clients()




