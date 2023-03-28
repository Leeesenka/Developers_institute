# Exercise 1 : Set
my_fav_numbers=[1, 2, 3, 4, 5, 6, 7, 8]
friend_fav_numbers=[11, 12, 13, 14, 15, 16]
idx = ""
my_fav_numbers.append(9)
print(my_fav_numbers)

deleted_item = my_fav_numbers.pop()
print(my_fav_numbers)

our_fav_numbers = my_fav_numbers + friend_fav_numbers
print(our_fav_numbers)

# [1, 2, 3, 4, 5, 6, 7, 8, 9]
# [1, 2, 3, 4, 5, 6, 7, 8]
# [1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16]


# Exercise 3: List
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
print(basket)

basket.pop()
print(basket)

basket.append("Kiwi")
print(basket)


idx = basket.index("Apples")
basket.insert(idx+1, "Apples") 
print(basket)

conunt = basket.count(str("Apples"))
print(conunt)

element=basket.clear()
print(element)
print(basket)

# ['Apples', 'Apples', 'Oranges', 'Kiwi']
# 2
# None
# []

# Exercise 4: Floats
number_list = []
i = 0
while i <= 7:
    if i == 0:
        number_list.append(1.5)
        i += 1
        continue
    if i % 2:
        number_list.append(int(number_list[-1]+ 0.5))
    else:
        number_list.append(number_list[-1]+ 0.5)
    i += 1
print(number_list)
# [1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]

# Exercise 5: For Loop
for number in range(1,21):
    print(number)

for number in range(1,21):
    if number%2==0:
        print(number)
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9
# 10
# 11
# 12
# 13
# 14
# 15
# 16
# 17
# 18
# 19
# 20
# 2
# 4
# 6
# 8
# 10
# 12
# 14
# 16
# 18
# 20

# Exercise 6 : While Loop

login = ''
while login != 'Leeesenka':
  login = input('What is your login? ')

print('You guessed the right login!')
# What is your login? Leeesenka
# You guessed the right login!

# Exercise 7: Favorite Fruits
fruits = (input("Please say me  your favorite fruit(s)"))
print(f"List of Words = {fruits.split()}")
f_fruits = (input("Please say me fruit(s)"))
if f_fruits in fruits:
  print('You chose one of your favorite fruits! Enjoy!')
else: print('You chose a new fruit. I hope you enjoy')  

# Please say me  your favorite fruit(s)mango apples
# List of Words = ['mango', 'apples']
# Please say me fruit(s)orange
# You chose a new fruit. I hope you enjoy

# Please say me  your favorite fruit(s)mango apple
# List of Words = ['mango', 'apple']
# Please say me fruit(s)apple
# You chose one of your favorite fruits! Enjoy!

# Exercise 8: Who Ordered A Pizza ?
all_toppings = []

while True:
    toppings = input('What is your favorit pizza toppings? ')
    print("Thanks, We’ll add that topping to your pizza", toppings)  
    if toppings == 'exit':
        break
    all_toppings.append(toppings)
print(f"List of toppings = {all_toppings}")
count = len(all_toppings)
print(count*2.5+10)

# What is your favorit pizza toppings? cheese
# Thanks, We’ll add that topping to your pizza cheese
# What is your favorit pizza toppings? mushrooms
# Thanks, We’ll add that topping to your pizza mushrooms
# What is your favorit pizza toppings? exit
# Thanks, We’ll add that topping to your pizza exit
# List of toppings = ['cheese', 'mushrooms']
# 15.0

# Exercise 9: Cinemax
price =[]
while True:
    age = input("Say age your family: ")
    if str(age) == 'all':
        break  
    if int(age) < 3:
        price.append(0)
    if int(age) in range(3,12):
        price.append(10)  
    if int(age) >= 12:
        price.append(15)     
    print(f"Price = {sum(price)}") 

#     Say age your family: 6       
# Price = 10
# Say age your family: 8
# Price = 20
# Say age your family: 56
# Price = 35
# Say age your family: 12
# Price = 50
# Say age your family: all

# Exercise 9: (4)

names = ["Alex", "Anna", "Nina", "Dor"]
names_final = ["Alex", "Anna", "Nina", "Dor"]
i = 0
while i < len(names):
    age = input("Hi," + names[i] + " say age: ")
    if int(age) not in range(16,21):
        names_final.remove(names[i])
    i +=1
print(names_final)

# Hi,Alex say age: 6
# Hi,Anna say age: 9
# Hi,Nina say age: 17
# Hi,Dor say age: 20
# ['Nina', 'Dor']

# Exercise 10 : Sandwich Orders
sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]
finished_sandwiches = []
i = 0
while i < len(sandwich_orders):
    finished_sandwiches.append(sandwich_orders[i])
    i +=1
print("I made your", ', '.join(finished_sandwiches))
# I made your Tuna sandwich, Avocado sandwich, Egg sandwich, Sabih sandwich, Pastrami sandwich

# Exercise 11 : Sandwich Orders#2
print("run out of pastrami")
sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]
pastarami_list = ["pastrami"]*3
sandwich_orders += pastarami_list
final_sandwich_orders = sandwich_orders.copy()
print(sandwich_orders)
i = 0

while i < len(sandwich_orders):
    if sandwich_orders[i] == "pastrami":
       final_sandwich_orders.remove(sandwich_orders[i])
    i += 1
print(final_sandwich_orders)

# run out of pastrami
# ['Tuna sandwich', 'Avocado sandwich', 'Egg sandwich', 'Sabih sandwich', 'Pastrami sandwich', 'pastrami', 'pastrami', 'pastrami']
# ['Tuna sandwich', 'Avocado sandwich', 'Egg sandwich', 'Sabih sandwich', 'Pastrami sandwich']

# Challenge 1
number = input("Say number ")
length = input ("Say length ")
i = 0
final = []
number = int(number)
while i < int(length):
    if i == 0:
        final.append(number)
        i += 1
        continue
    final.append(final[-1] + number)
    i+=1
print(final)

# Say number 6
# Say length 7
# [6, 12, 18, 24, 30, 36, 42]

# Challenge 2

phrase = input("Say phrase...")
phrase = list(phrase)
print(phrase)
i = 0
delete_counter = 0
final_phrase = phrase.copy()
while i <len(phrase):
    if i == 0:  
        i +=1
        continue
    if phrase[i] == phrase[i-1]:
        del final_phrase[i-delete_counter]
        delete_counter += 1
    i +=1
print(''.join(final_phrase)) 

# Say phrase...uuuuuffffffppppppeeeeeuuuuggggiidhgduhh
# ['u', 'u', 'u', 'u', 'u', 'f', 'f', 'f', 'f', 'f', 'f', 'p', 'p', 'p', 'p', 'p', 'p', 'e', 'e', 'e', 'e', 'e', 'u', 'u', 'u', 'u', 'g', 'g', 'g', 'g', 'i', 'i', 'd', 'h', 'g', 'd', 'u', 'h', 'h']
# ufpeugidhgduh

# Exercise 1: Formula Ninja

D = input("Write number ")
D = D.split(",")
i = 0
C = 50
H = 30
new = []
while i < len(D):
    Q = ((2 * C * int(D[i]))/H) ** 0.5
    new.append(int(Q))
    i += 1
print(new)

# Write number 66, 88, 56
# [14, 17, 13]


