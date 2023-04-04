# Exercise 1 : Pets

class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'

bengal_cat = Bengal('Bengal', 4)
chartreux_cat = Chartreux('Chartreux', 1)
siamese_cat = Siamese('Siamese', 2)

all_cats = [bengal_cat, chartreux_cat, siamese_cat]
sara_pets = Pets(all_cats)
sara_pets.walk()

# Bengal is just walking around
# Chartreux is just walking around
# Siamese is just walking around


# Exercise 2 : Dogs

class Dog:
    def __init__(self, name, age, weight):
         self.name = name
         self.age = age
         self.weight = weight

    def bark(self):
         return f"{self.name} is barking."
      
    def run_speed(self):
         return self.weight/self.age*10
         
    
    def fight(self, other_dog):
        if self.run_speed() * self.weight > other_dog.run_speed() * other_dog.weight:
             return f"{self.name} won the fight!!!"
        else:
            return f"{other_dog.name} won the fight!!!"
         
dog_1 = Dog("Puppy", 3, 12) 
dog_2 = Dog("Pluto", 4, 5)   
dog_3 = Dog("Rubby", 1, 35)
print(dog_1.bark())
print(dog_2.bark())  
print(dog_3.bark()) 
print(dog_1.run_speed())
print(dog_2.run_speed())  
print(dog_3.run_speed()) 
print(dog_1.fight(dog_3))

# 40.0
# 12.5
# 350.0
# Rubby won the fight!!!


# Daily Challenge : Pagination

class Pagination:
    def __init__(self, items, pageSize, currentPage=1, totalPages=0):
        self.items = items
        if isinstance(pageSize, float):
            self.pageSize = int(pageSize)
        else:
            self.pageSize = pageSize
        self.currentPage = currentPage
        self.totalPages = totalPages
        self.getVisibleItems()


    def getVisibleItems(self):
        myslice = []
        for i in range(0, len(self.items),self.pageSize):
            myslice.append(self.items[i:i+self.pageSize])
        self.totalPages = len(myslice)
        return myslice[self.currentPage-1]
    def prevPage(self):
        if self.currentPage == 1:
            return self
        else:
            self.currentPage = self.currentPage - 1
            return self
    def nextPage(self):
        if self.currentPage == self.pageSize:
            return self
        else:
            self.currentPage = self.currentPage + 1
            return self
        return
    def firstPage(self):
        self.currentPage = 1
        return self
    def lastPage(self):
        print("My", self.getVisibleItems())
        self.currentPage = self.totalPages
        return self
    def  goToPage(self,pageNumber):
        if pageNumber > self.totalPages:
            self.currentPage = self.totalPages
        elif pageNumber <= 0:
            self.currentPage = 1
        else:
            self.currentPage = pageNumber
        return self


alphabetList = "abcdefghijklmnopqrstuvwxyz"
alphabetList = list(alphabetList)

p = Pagination(alphabetList, 4.5)
# print(p.totalPages)          
# print(p.getVisibleItems())
# print(p.prevPage())
# print(p.getVisibleItems())
# print(p.nextPage())
# print(p.getVisibleItems())
# # print(p.firstPage())
# print(p.getVisibleItems())
# print(p.lastPage())
# print(p.getVisibleItems())

print(p.nextPage().nextPage())
print(p.getVisibleItems())








