import psycopg2
from datetime import date
HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'N9ec7hyv'
DATABASE = 'acters'

connection = psycopg2.connect(host = HOSTNAME, user = USERNAME, password = PASSWORD, dbname = DATABASE)

cursor = connection.cursor()
query = 'select * from actors'
def select_column(column_name:str, table_name: str):
    query = f' select {column_name} from {table_name}'
    return query

def run_query(query: str):

    with connection.cursor() as cursor:
        cursor.execute(query)
        result = cursor.fetchall()
    return result 

# def select_columns(columns:list[str], table_name: str):
#     query = f'select {columns} from {table_name}'
#     return query
# query3 = select_columns('age', 'actors')
# query4 = select_columns('actor_id', 'actors')
# resul3 = run_query(query3)
# result4 = run_query(query4)
# print("AGE:", resul3)
# print("ACTOR-ID:", result4)

def select_columns(columns:list[str], table_name: str):
    start = 'select '
    columns_str = ''
    for ind, column in enumerate(columns):
        columns_str += column
        if ind < len(columns) -1:
            columns_str +=', '

    end = f' from {table_name}'
    query = start + columns_str + end
    return query

columns = ['first_name', 'last_name']
q:str = select_columns(columns, 'actors')
print(q)



# query1 = select_column('first_name', 'actors')
# query2 = select_column('last_name', 'actors')

# result1 = run_query(query1)
# result2 = run_query(query2)

# print("FIRST NAMES:", result1)
# print("LAST NAMES:", result2)
# FIRST NAMES: [('George',), ('Matt',), ('Brandan',), ('Will',), ('Anthony',), ('Renee',)]
# LAST NAMES: [('Clooney',), ('Damon',), ('Fraser',), ('Smith',), ('Hopkins',), ('Zellweger',)]
# query = select_column('first_name', 'actors')

output = run_query(q)
print(output)
# [('George',), ('Matt',), ('Brandan',), ('Will',), ('Anthony',), ('Renee',)]

f_name = 'Brad'
l_name = 'Pitt'
age = date(1970,1,1)
num_oscars = 2 

q =f"insert into actors (first_name, last_name, age, number_oscars) values ('{f_name}', '{l_name}', '{age}', '{num_oscars}');"
def run_change_query(query:str):
    with connection.cursor() as cursor:
        cursor.execute(query)
        connection.commit()
run_change_query(q)        
print(q)