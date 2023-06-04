import psycopg2
import json
from collections import defaultdict


conn = psycopg2.connect(
    host='localhost',
    dbname='alarm',
    user='postgres',
    password='Oi3msd4d907',
    port="5432"
)


cur = conn.cursor()

cur.execute("SELECT date, city2_english FROM messages")

rows = cur.fetchall()

data_for_graph = defaultdict(list)
for row in rows:
    date = row[0].isoformat() 
    city = row[1]
    data_for_graph[city].append(date)


cur.close()
conn.close()


with open('data.json', 'w') as f:
    json.dump(data_for_graph, f)

