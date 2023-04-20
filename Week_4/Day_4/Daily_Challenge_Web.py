import psycopg2
import requests
import random
from datetime import date
import os
HOSTNAME = 'localhost'
USERNAME = os.environ['PGUSER']
PASSWORD = os.environ['PGPWD']
DATABASE = 'country'
response = requests.get('https://restcountries.com/v2/all')
# data = response.json()

connection = psycopg2.connect(host = HOSTNAME, user = USERNAME, password = PASSWORD, dbname = DATABASE)
cursor = connection.cursor()


def run_change_query(data):
    data_len = len(data)
    for i in range(10):
        data_ind = random.randint(0, data_len -1)
        name = data[data_ind]['name']
        capital = data[data_ind]['capital']
        flag = data[data_ind]['flag']
        subregion = data[data_ind]['subregion']
        population = data[data_ind]['population']
        query = f"insert into country (name, capital, flag, subregion, population) values ('{name}', '{capital}', '{flag}', '{subregion}', '{population}');"
        with connection.cursor() as cursor:
            cursor.execute(query)
            connection.commit()
         
data_1 = response.json()
run_change_query(data_1) 