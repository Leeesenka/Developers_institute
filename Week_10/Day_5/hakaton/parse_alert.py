import re
from datetime import datetime

def parse_alert(text):
    # регулярное выражение для поиска даты и времени
    datetime_pattern = r"\d{2}/\d{2}/\d{4} \d{2}:\d{2}:\d{2}"
    datetime_match = re.search(datetime_pattern, text)
    if datetime_match is None:
        return None

    # преобразуем строку с датой и временем в объект datetime
    alert_datetime_str = datetime_match.group(0)
    alert_datetime = datetime.strptime(alert_datetime_str, "%d/%m/%Y %H:%M:%S")

    # регулярное выражение для поиска городов
    city_pattern = r"• Округ Газа - ([^\n]+)"
    city_matches = re.findall(city_pattern, text)

    return {
        "date": alert_datetime.date(),
        "time": alert_datetime.time(),
        "cities": city_matches,
    }
