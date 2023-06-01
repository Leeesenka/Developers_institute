import re
message_text = "\u0422\u0435\u0440\u0440\u043e\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043f\u0440\u043e\u043d\u0438\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u0435 \u0432 \u0422\u0435\u043d\u0435 \u041e\u043c\u0430\u0440\u0438\u043c [09:44]:\n\n26/05/2023 09:44:24:\n \u2022 \u0419\u0435\u0433\u0443\u0434\u0430 - \u0422\u0435\u043d\u0435 \u041e\u043c\u0430\u0440\u0438\u043c\n\n|| \u0440\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u043e\u0432\u0435\u0442: \u0425\u0430\u0440 \u0445\u0435\u0431\u0440\u043e\u043d ||\n\n\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u043e\u0442 @CumtaAlertsRussianChannel"

date_time_match = re.search(r'(\d{2}/\d{2}/\d{4} \d{2}:\d{2}:\d{2}):', message_text)
if date_time_match:
    date_time = date_time_match.group(1)  # extract the matched date_time
    date, time = date_time.split(' ')
    print(f"Date: {date}, Time: {time}")

cities_match = re.search(r'\u2022 (.*) - (.*)\n', message_text)
if cities_match:
    
    city2 = cities_match.group(2)
    print(f"City 2: {city2}")