import random
import psycopg2

import html


db_params = {

        'dbname': 'game',
        'user': 'postgres',
        'password': 'Oi3msd4d907',
        'host': 'localhost',
        'port': '5432',
}


class Question:
    def __init__(self, question, correct_answer, incorrect_answers):
        self.question = question
        self.correct_answer = correct_answer
        self.incorrect_answers = incorrect_answers

    def get_answers(self):
        return self.incorrect_answers + [self.correct_answer]


class MillionaireGame:
    def __init__(self, db_params):
        self.db_params = db_params
        self.current_question_index = -1
        self.current_money = 0
        self.prizes = [
            '$100', '$200', '$300', '$500', '$1,000',
            '$2,000', '$4,000', '$8,000', '$16,000',
            '$32,000', '$64,000', '$125,000', '$250,000',
            '$500,000', '$1,000,000'
        ]
        self.questions = self.load_questions()

    def load_questions(self):
        conn = psycopg2.connect(**self.db_params)
        cur = conn.cursor()
        cur.execute('SELECT * FROM questions_answers ORDER BY id')
        questions = []
        for row in cur:
            question = Question(row[1], row[2], row[3])
            questions.append(question)
        cur.close()
        conn.close()
        return questions
    
    def reset_game(self):
        self.current_question_index = -1
        self.current_money = 0
        self.questions = self.load_questions()

    def ask_question(self):
        self.current_question_index += 1
        question = self.questions[self.current_question_index]
        answers = question.get_answers()
        random.shuffle(answers)
        print('Question {}: {}'.format(
        self.current_question_index + 1, html.unescape(question.question)))
        for i, answer in enumerate(answers):
            print('{}) {}'.format(i + 1, answer))
        while True:
            user_answer = input('Your answer (enter a number): ')
            if user_answer.isdigit() and int(user_answer) in range(1, 5):
                if answers[int(user_answer) - 1] == question.correct_answer:
                    self.current_money += 1
                    print('Correct! You won', self.prizes[self.current_money - 1])
                    return
                else:
                    print('Incorrect!')
                    break
            else:
                print('Invalid answer!')
        print('Game over.')

    def save_score(self, user_id, name, score):
        conn = psycopg2.connect(**self.db_params)
        print(user_id, score)
        cur = conn.cursor()
        cur.execute('INSERT INTO scores (user_id, name, score) VALUES (%s, %s, %s) ON CONFLICT (user_id) DO UPDATE SET score = EXCLUDED.score, name = EXCLUDED.name', (user_id, name, score))
        conn.commit()
        cur.close()
        conn.close()


    def play(self):
        print('Welcome to Who Wants to Be a Millionaire!')
        print('You have to answer 15 questions to win $1,000,000.')
        print('You can quit anytime by typing "quit".')
        self.reset_game() 
        while self.current_money < 15:
            self.ask_question()
            if self.current_money == 5 or self.current_money == 10:
                print('You have won', self.prizes[self.current_money - 1])
                answer = input('Do you want to continue? (yes/no): ')
                if answer.lower() == 'no':
                    break
        if self.current_money == 15:
            print('Congratulations! You won $1,000,000!')
        else:
            print('You won', self.prizes[self.current_money - 1])
        self.save_score(user_id, user_name, self.current_money)       
       


game = MillionaireGame(db_params)
game.reset_game()
user_id = input("Please enter your user ID: ")
user_name = input("Please enter your name: ")
game.play()