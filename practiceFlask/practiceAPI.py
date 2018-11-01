import psycopg2
import json
from flask import Flask
app = Flask(__name__)


@app.route("/")
def display_index_page():
	return "<h1> Hello internet</h1>"

@app.route("/client/<id>")
def get_one_clients(id):
	conn = psycopg2.connect("dbname=evolveu")
	cur = conn.cursor()

	cur.execute(f" select * from clients where client_id = {id}")
	client = cur.fetchone()
	json_client = json.dumps(
		{
			"id":client[0],
			"name": client[1],
			"email": client[2],
			"city": client[3],
			"birth_year": client[4]

		})
	

	cur.close()
	conn.close()
	return json_client