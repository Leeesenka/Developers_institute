from googletrans import Translator
import requests
import json
import time
import psycopg2
import re
def get_unique_cities():
    try:
        connection = psycopg2.connect(
            host='localhost',
            dbname='alarm',
            user='postgres',
            password='',
            port="5432"
        )

        cursor = connection.cursor()

      
        cursor.execute("SELECT DISTINCT city2, city2_english FROM messages ORDER BY city2, city2_english;")
        rows = cursor.fetchall()
        
        for row in rows:
            print(f"City2: {row[0]}, City2 English: {row[1]}")

    except (Exception, psycopg2.DatabaseError) as error:
        print("Error while executing SQL", error)

    finally:
        if connection is not None:
            cursor.close()
            connection.close()

get_unique_cities()
