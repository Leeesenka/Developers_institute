# Exercise 1: Cats

class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age
    

cats_list = []       
cats_list.append(Cat("Milka", 4))
cats_list.append(Cat("Lana", 6))
cats_list.append(Cat("Poly", 9))


def show_old_cat(cats):
    ages = []
    for i in cats:
        ages.append(i.age)
    print(max(ages))   
    for i in cats:
        if i.age == max(ages):          
            print(print("The oldest cat is", i.name,  ", and is",  i.age,  "years old."))
            break



    # oldest = 0
    # oldest_name = ""
    # for key, value in cats.items():
    #     if value > oldest:
    #         oldest = value
    #         oldest_name = key
    # print("The oldest cat is", oldest_name,  ", and is",  oldest,  "years old.")


show_old_cat(cats_list)
     
# Exercise 2 : Dogs 
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height
    
    def bark(self):
        print(f"{self.name} goes woof!")
    
    def jump(self):
        x = self.height * 2
        print(f"{self.name} jumps {x} cm high!")
    
davids_dog = Dog("Rex", 50)
print(f"David's dog's name is {davids_dog.name} and his height is {davids_dog.height}cm.")
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog("Teacup", 20)
print(f"Sarah's dog's name is {sarahs_dog.name} and his height is {sarahs_dog.height}cm.")
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(f"{davids_dog.name} is bigger.")
else:
    print(f"{sarahs_dog.name} is bigger.")


# Rex goes woof!
# Rex jumps 100 cm high!
# Sarah's dog's name is Teacup and his height is 20cm.
# Teacup goes woof!
# Teacup jumps 40 cm high!
# Rex is bigger.   

# Exercise 3 : Who’s The Song Producer?

class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for i in self.lyrics:
            print(i)

stairway = Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()


# Exercise 4 : Afternoon At The Zoo

class Zoo:
    def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
            print(self.animals)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
                self.animals.remove(animal_sold)

    def sort_animals(self):
        self.animals.sort()
        animals_all = {}
        for animal in self.animals:
                if animal[0] not in animals_all:
                    animals_all[animal[0]] = [animal]
                else:
                    animals_all[animal[0]].append(animal)
        return animals_all


    def get_groups(self):
            animals_all = self.sort_animals()
            for key, value in animals_all.items():
                print(f"{key}: {value}")
      
ramat_gan_safari = Zoo("Ramat Gan Safari")
ramat_gan_safari.add_animal("Boar")
ramat_gan_safari.add_animal("Panther")
ramat_gan_safari.add_animal("Giraffe")
ramat_gan_safari.add_animal("Koala")
ramat_gan_safari.add_animal("Emu")
ramat_gan_safari.add_animal("Elephant")
ramat_gan_safari.add_animal("Baboon")
ramat_gan_safari.get_animals()
ramat_gan_safari.sell_animal("Panther")
ramat_gan_safari.get_animals()
ramat_gan_safari.get_groups()


# B: ['Baboon', 'Boar']
# E: ['Elephant', 'Emu']
# G: ['Giraffe']
# K: ['Koala']

# Daily Challenge: Old MacDonald’s Farm

class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = []
        
    def add_animal(self, new_animal, quantity=1):
        for _ in range(quantity):
            self.animals.append(new_animal)


    def get_info(self):
        unique_animals = set(self.animals)
        for animal in unique_animals:
            print(animal + " : " + str(self.animals.count(animal)))
    

macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)

print(macdonald.animals)
macdonald.get_info()
text = "E-I-E-I-0!"
formatted_text = "{:>20}".format(text)
print(formatted_text)

# ['cow', 'cow', 'cow', 'cow', 'cow', 'sheep', 'sheep', 'goat', 'goat', 'goat', 'goat', 'goat', 'goat', 'goat', 'goat', 'goat', 'goat', 'goat', 'goat']
# goat : 12
# sheep : 2
# cow : 5

#           E-I-E-I-0!

    








       
                
       
       
       