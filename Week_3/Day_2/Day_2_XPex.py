class Family:
    def __init__(self, last_name, members):
        self.last_name = last_name
        self.members = members
        

    def born(self, **kwargs):
            kwargs['is_child'] = True
            self.members.append(kwargs)
            print(f"Congratulations {self.last_name} family!")

    def is_18(self, name):
         for key in self.members:
              if key["name"] == name:
                return key['age'] >= 18
         return False
         

    def family_presentation(self):
        print(f"The {self.last_name} family members:")
        for member in self.members:
            print(member['name'])
     

members_all = [
    {'name':'Michael','age':35,'gender':'Male','is_child':False},
    {'name':'Sarah','age':32,'gender':'Female','is_child':False}
]  


family_1 = Family("Frolov", members_all)  

family_1.born(name="Anna", age=1, gender="Female") 
family_1.born(name="Alex", age=6, gender="Male")  

family_1.family_presentation()

print(family_1.is_18("Michael"))
print(family_1.is_18("Alex"))

# Congratulations Frolov family!
# The Frolov family members:
# Michael
# Sarah
# Anna
# Alex
# True
# False


