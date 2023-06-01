import psycopg2
import re

# This is a placeholder. You need to replace it with your actual message text
message_text = "Террористическое проникновение в Тене Омарим [09:44]:\n\n26/05/2023 09:44:24:\n \u2022 Йегуда - Тене Омарим\n\n|| региональный совет: Хар хеброн ||\n\nОтправлено от @CumtaAlertsRussianChannel"

# Parse the date and time from the message text
date_time_match = re.search(r'(\d{2}/\d{2}/\d{4} \d{2}:\d{2}:\d{2}):', message_text)
if date_time_match:
    date_time = date_time_match.group(1)
    date, time = date_time.split(' ')
    print(f"Date: {date}, Time: {time}")
else:
    print("Could not find a date and time in the message text")
    exit(1)  # Exit if we could not find a date and time

# Connect to your postgres DB
conn = psycopg2.connect(
    dbname="alarm", 
    user="postgres", 
    password="Oi3msd4d907", 
    host="localhost", 
    port="5432"
)

# Open a cursor to perform database operations
cur = conn.cursor()

# Your SQL query to execute
sql = """
    INSERT INTO data_alert (date, time)
    VALUES (%s, %s)
"""

# Execute the SQL command
cur.execute(sql, (date, time))

# Commit the changes
conn.commit()

# Close the cursor and connection
cur.close()
conn.close()
