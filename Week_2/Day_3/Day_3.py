# # Exercise 1 : Convert Lists Into Dictionaries
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
connected = dict(zip(keys, values))
print(connected)

# {'Ten': 10, 'Twenty': 20, 'Thirty': 30}
# Exercise 2 : Cinemax


price = 0
family_price = 0
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

for key, value in family.items():
    if value < 3:
        price = 0
        continue
    elif 3 <= value <= 12:
        price = 10
        family_price += price
    else: 
        price = 15
        family_price += price
    print(f"Name: {key}, {price}")
print("Price family:", family_price)
# Name: rick, 15
# Name: beth, 15
# Name: morty, 10
# Name: summer, 10
# Price family: 50


family = {}

while True:
    family_name = input("What your name?...")
    if family_name == 'exit':
        break
    family_age = input("What your age?...")
    family[family_name] = family_age
print(family)    

# What your name?...Alesya
# What your age?...34
# What your name?...Alex
# What your age?...6
# What your name?...Anna
# What your age?...9
# What your name?...Artem
# What your age?...34
# What your name?...exit
# {'Alesya': '34', 'Alex': '6', 'Anna': '9', 'Artem': '34'}

# Exercise 3: Zara
brand = {
    'name' : 'Zara',
    'creation_date' : '1975',
    'creator_name': 'Amancio Ortega Gaona', 
    'type_of_clothes': ['men, women, children, home'],
    'international_competitors': ['Gap', 'H&M', 'Benetton'], 
    'number_stores': '7000', 
    'major_color': {
    'France': 'blue', 
    'Spain': 'red', 
    'US': ['pink, green']}
}
brand['number_stores'] = '2'

print(brand['type_of_clothes'])
brand.update({'country_creation' : 'Spain'})
print(brand['international_competitors'])
brand['international_competitors'].append("Desigual")
del brand['creation_date']
print(brand['international_competitors'][2])
brand['international_competitors'].remove("Desigual")
print(brand['major_color']['US'])
print(brand.keys())
more_on_zara = {
    'creation_date': '1975', 
    'number_stores': '10 000'
}
connected = dict(zip(more_on_zara, brand))
print(connected)
print(['number_stores'])

# Exercise 4 : Disney Characters
users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
users_A = ['0','1','2','3', '4']
connected = dict(zip(users, users_A))
print(connected)
connected_1 = dict(zip(users_A, users))
print(connected_1)


disney_users_A = {index: char for index, char in enumerate(users)}

print(disney_users_A)

dsn = {}
for i, items in enumerate(users):
    dsn[items] = i
print(dsn)  

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
users.sort()
dsn = {}
for i, items in enumerate(users):
    dsn[items] = i
print(dsn)
# {0: 'Mickey', 1: 'Minnie', 2: 'Donald', 3: 'Ariel', 4: 'Pluto'}
# {'Mickey': 0, 'Minnie': 1, 'Donald': 2, 'Ariel': 3, 'Pluto': 4}
# {'Ariel': 0, 'Donald': 1, 'Mickey': 2, 'Minnie': 3, 'Pluto': 4}

# Challenge 1
mylist = []
while True:
    word = input("say me word...")
    if word == 'exit':
             break
    mylist = list(word)
print(mylist)

new_d = {}
for i, items in enumerate(mylist):
    if new_d.get(items) == None:
        new_d[items] = [i]
    else:  
        new_d[items] += [i]
print(new_d)  

# say me word...HelloWoorrld
# say me word...exit
# ['H', 'e', 'l', 'l', 'o', 'W', 'o', 'o', 'r', 'r', 'l', 'd']
# {'H': [0], 'e': [1], 'l': [2, 3, 10], 'o': [4, 6, 7], 'W': [5], 'r': [8, 9], 'd': [11]}

# Challenge 2
# The key is the product, the value is the price
items_purchase = {
  "Water": "1",
  "Bread": "3",
  "TV": "1000",
  "Fertilizer": "20"
}
final_list = []
sum_of_goods = 0
wallet = "300"
for key, value in items_purchase.items():
    if (int(value) <= int(wallet)) and (sum_of_goods <= int(wallet)):
            final_list.append(key)
final_list.sort()
if len(final_list) == 0:
    print("Nothing")
else:
    print(final_list)

# ['Bread', 'Fertilizer', 'Water']
# Nothing




