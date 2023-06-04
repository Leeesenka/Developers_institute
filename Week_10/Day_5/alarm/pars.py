import requests
import json
import time
import psycopg2
import re
def delete_duplicates():
    try:
       
        connection = psycopg2.connect(
            host='localhost',
            dbname='alarm',
            user='postgres',
            password='',
            port="5432"
        )

        cursor = connection.cursor()

       
        cursor.execute("""
            DELETE FROM alerts
            WHERE ctid NOT IN (
                SELECT MAX(ctid)
                FROM alerts
                GROUP BY date, time, city1, city2
            )
        """)

       
        connection.commit()

    except (Exception, psycopg2.DatabaseError) as error:
        print("Error while executing SQL", error)

    finally:
        if connection is not None:
            cursor.close()
            connection.close()
