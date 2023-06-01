import logging
from telegram import Update
from telegram.ext import Updater, CommandHandler, MessageHandler, Filters, CallbackContext
from parse_alert import parse_alert  # импортируем функцию, которую мы написали ранее
import psycopg2
from telegram import Update
from telegram.ext import Updater, CommandHandler, MessageHandler, CallbackContext
from telegram.ext.filters import BaseFilter
from telegram.ext import MessageFilter



# Настройка логирования
logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
                    level=logging.INFO)

logger = logging.getLogger(__name__)

# Установка соединения с базой данных
conn = psycopg2.connect(
    host='localhost',
    database='alarm',
    user='postgres',
    password='Oi3msd4d907'
)
cur = conn.cursor()

def insert_into_db(date, time, cities):
    for city in cities:
        cur.execute("""
            INSERT INTO alerts (date, time, city)
            VALUES (%s, %s, %s)
        """, (date, time, city))
    conn.commit()

def handle_message(update: Update, _: CallbackContext) -> None:
    text = update.message.text
    data = parse_alert(text)
    if data is not None:
        insert_into_db(data['date'], data['time'], data['cities'])

def main() -> None:
    # Создайте Updater и передайте ему токен вашего бота.
    updater = Updater("6017048572:AAHdWXvMdL4lMUjbpDjulBxAUQ6djtsnFqg", use_context=True)

    # Получите диспетчер для регистрации обработчиков
    dp = updater.dispatcher

    # Регистрация обработчика для сообщений
    dp.add_handler(MessageHandler(Filters.text & ~Filters.command, handle_message))

    # Запуск бота
    updater.start_polling()

    # Запуск бота до тех пор, пока вы не остановите скрипт (например, с помощью Ctrl + C)
    updater.idle()


if __name__ == '__main__':
    main()
