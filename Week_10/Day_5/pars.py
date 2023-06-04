import requests
import json
import time
import psycopg2
import re
def delete_duplicates():
    try:
        # Establish a connection
        connection = psycopg2.connect(
            host='localhost',
            dbname='alarm',
            user='postgres',
            password='Oi3msd4d907',
            port="5432"
        )

        cursor = connection.cursor()

        # Execute the query
        cursor.execute("""
            DELETE FROM alerts
            WHERE ctid NOT IN (
                SELECT MAX(ctid)
                FROM alerts
                GROUP BY date, time, city1, city2
            )
        """)

        # Commit the changes
        connection.commit()

    except (Exception, psycopg2.DatabaseError) as error:
        print("Error while executing SQL", error)

    finally:
        if connection is not None:
            cursor.close()
            connection.close()
