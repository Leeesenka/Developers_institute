import json
from info.models import Animal, Family

def run():
    with open('info/data.json', 'r') as file:
        data = json.load(file)

    for family in data['families']:
        Family.objects.create(id=family['id'], name=family['name'])

    for animal in data['animals']:
        Animal.objects.create(
            id=animal['id'],
            name=animal['name'],
            legs=animal['legs'],
            weight=animal['weight'],
            height=animal['height'],
            speed=animal['speed'],
            family=Family.objects.get(id=animal['family']),
        )

if __name__ == '__main__':
    run()
