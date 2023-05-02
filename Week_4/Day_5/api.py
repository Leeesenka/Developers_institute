import requests
import psycopg2
import json


conn = psycopg2.connect(
    host='localhost',
    database='game_new',
    user='postgres',
    password='Oi3msd4d907'
)


cur = conn.cursor()


url = 'https://opentdb.com/api.php?amount=20&difficulty=easy&type=multiple'
response = requests.get(url)
data = json.loads(response.text)
questions = data['results']


for question in questions:

    question_text = question['question']
    correct_answer = question['correct_answer']
    incorrect_answers = question['incorrect_answers']

    cur.execute(
        "INSERT INTO questions_answers (question, correct_answer, incorrect_answers) VALUES (%s, %s, %s)",
        (question_text, correct_answer, incorrect_answers)
    )
    conn.commit()


cur.close()
conn.close()
