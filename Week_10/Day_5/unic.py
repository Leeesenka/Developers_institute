import requests

def get_coordinates(place_name):
    api_key = ''  
    url = f'https://maps.googleapis.com/maps/api/geocode/json?address={place_name}&key={api_key}'
    
    response = requests.get(url)
    data = response.json()
    
    if data['status'] == 'OK':
        location = data['results'][0]['geometry']['location']
        latitude = location['lat']
        longitude = location['lng']
        return latitude, longitude
    
    return None

# Пример использования
place = 'Tel Aviv'  # Замените на нужное вам место
coordinates = get_coordinates(place)
if coordinates:
    latitude, longitude = coordinates
    print(f'Координаты для {place}: Широта - {latitude}, Долгота - {longitude}')
else:
    print(f'Не удалось получить координаты для {place}')
