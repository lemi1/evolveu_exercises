 
import psycopg2 

class Client:

	def  __init__(self,client_id, name, email, city, birth_year):
		self.id = client_id
		self.name = name
		self.email = email
		self.city = city
		self.birth_year = birth_year

	def get_lastName(self):
		lastname = self.name.split()
		print(lastname)
		return lastname[1]




def get_all_clients():
	conn = psycopg2.connect("dbname=evolveu")
	cur = conn.cursor()

	cur.execute(" select * from clients")
	client_list = cur.fetchall()
	
	client_array = []
	for i in client_list:
		client_array.append(Client(i[0],i[1],i[2],i[3],i[4]))


	print(client_array)
	cur.close()
	conn.close()
	return client_array


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












