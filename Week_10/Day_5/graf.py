import psycopg2
import json
from collections import defaultdict

# Connect to your postgres DB
conn = psycopg2.connect(
    host='localhost',
    dbname='alarm',
    user='postgres',
    password='Oi3msd4d907',
    port="5432"
)

# Open a cursor to perform database operations
cur = conn.cursor()

# Execute a query
cur.execute("SELECT date, city2_english FROM messages")

# Retrieve query results
rows = cur.fetchall()

data_for_graph = defaultdict(list)
for row in rows:
    date = row[0].isoformat()  # convert date to string
    city = row[1]
    data_for_graph[city].append(date)

# Close connection
cur.close()
conn.close()

# Write data to JSON file
with open('data.json', 'w') as f:
    json.dump(data_for_graph, f)

