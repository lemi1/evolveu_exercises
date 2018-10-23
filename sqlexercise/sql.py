 
import psycopg2 
from Client import Client
conn = psycopg2.connect("dbname=evolveu")

# Open a cursor to perform database operations
cur = conn.cursor()

# execute a sql statement
cur.execute("select * from clients where client_id = 6;")
first_id = cur.fetchone()
print(first_id)

client_1 = Client(first_id)
print(client_1)