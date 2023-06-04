import requests
import json
import time
import psycopg2
import re


def parse_message(message_text):
    date_time_city_matches = re.findall(r'(\d{2}/\d{2}/\d{4} \d{2}:\d{2}:\d{2}):\n \u2022 (.*?) - (.*?)\n', message_text)
    parsed_data = []
    for match in date_time_city_matches:
        date_time, city1, cities2 = match
        date, time = date_time.split(' ')
        day, month, year = date.split('/')
        date = f"{year}-{month}-{day}"  
        for city2 in cities2.split(','):  
            city2 = city2.strip()  
            parsed_data.append((date, time, city1, city2))
    return parsed_data

def insert_to_db(data):
    try:

        connection = psycopg2.connect(
            host='localhost',
            dbname='alarm',
            user='postgres',
            password='Oi3msd4d907'
        )
        cursor = connection.cursor()

       
        cursor.execute("""
        CREATE TABLE IF NOT EXISTS messages (
            date DATE,
            time TIME,
            city1 TEXT,
            city2 TEXT
        )
        """)

      
        for row in data:
            cursor.execute("""
            INSERT INTO messages (date, time, city1, city2)
            VALUES (%s, %s, %s, %s)
            """, row)

       
        connection.commit()

    except Exception as e:
        print(f"An error occurred: {e}")
    finally:
        if connection:
            cursor.close()
            connection.close()


with open('messages.json', 'r') as f:
    messages = json.load(f)


for message in messages:
    data = parse_message(message['text'])
    if data:  
        insert_to_db(data)

TOKEN = "6017048572:AAHdWXvMdL4lMUjbpDjulBxAUQ6djtsnFqg"
URL = f"https://api.telegram.org/bot{TOKEN}/"

def get_updates(offset=None):
    url = URL + "getUpdates?timeout=100"
    if offset:
        url += f"&offset={offset}"
    response = requests.get(url)
    return response.json()

def main():
    update_id = None
    while True:
        updates = get_updates(offset=update_id)
        if "result" in updates and updates["result"]:
            for update in updates["result"]:
                update_id = update["update_id"] + 1
                message = update.get("message")
                if message:
                    chat_id = message["chat"]["id"]
                    text = message["text"]
                    data = parse_message(text)
                    if data:  
                        insert_to_db(data)
        else:
            print("Error: ", updates) 
        time.sleep(1)

if __name__ == "__main__":
    main()
