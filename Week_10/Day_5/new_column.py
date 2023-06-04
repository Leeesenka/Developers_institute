from googletrans import Translator
import requests
import json
import time
import psycopg2
import re

def translate_cities():
    try:
        connection = psycopg2.connect(
            host='localhost',
            dbname='alarm',
            user='postgres',
            password='Oi3msd4d907',
            port="5432"
        )

        cursor = connection.cursor()

        # Fetch all rows
        cursor.execute("SELECT id, city2 FROM messages;")
        rows = cursor.fetchall()
        
        translator = Translator()
        for row in rows:
            # Translate city2 into English
            print(row)
            city2_english = translator.translate(row[1], dest='en').text
            print(f"Original: {row}, Translated: {city2_english}")
            
            # Update the row
            cursor.execute("""
            UPDATE messages
            SET city2_english = %s
            WHERE id = %s
        """, (city2_english, row[0]))

        connection.commit()

    except (Exception, psycopg2.DatabaseError) as error:
        print("Error while executing SQL", error)

    finally:
        if connection is not None:
            cursor.close()
            connection.close()
translate_cities()