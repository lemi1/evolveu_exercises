 
import psycopg2 



def get_all_clients():
	conn = psycopg2.connect("dbname=evolveu")
	cur = conn.cursor()

	cur.execute(" select * from clients")
	client_list = cur.fetchall()
	

	cur.close()
	conn.close()
	return str(client_list)


def clients_in_july():
	conn = psycopg2.connect("dbname=evolveu")
	cur = conn.cursor()
	cur.execute(" select name from clients left join credits on clients.client_id = credits.client_id where month ='2018-07';")
	client_list = cur.fetchall()

	cur.close()
	conn.close()
	return str(client_list)



def clients_no_credits():
	conn = psycopg2.connect("dbname=evolveu")
	cur = conn.cursor()

	cur.execute(" select name from clients left join credits on clients.client_id = credits.client_id where credits is null;")
	client_list = cur.fetchall()
	
	cur.close()
	conn.close()
	return str(client_list)

def credits_no_clients():
	conn = psycopg2.connect("dbname=evolveu")
	cur = conn.cursor()
	
	cur.execute(" select credits from credits left join clients on clients.client_id = credits.client_id where name is null;")
	client_list = cur.fetchall()

	cur.close()
	conn.close()
	return str(client_list)












