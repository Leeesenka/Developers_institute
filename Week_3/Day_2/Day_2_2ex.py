import random
from Day_2 import Dog


class PetDog(Dog):
    def __init__(self, name, age, weight,trained = False ):
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        bark_output = self.bark()
        self.trained = True
        print(bark_output)

    def play(self, *args):
        dog_names = [self.name]
        for arg in args:
            dog_names.append(arg.name)
        print(f"{' and '.join(dog_names)} play together.")

    def do_a_trick(self):
        if self.trained == False:
            return
        else:
            trick = [
                f"{self.name} does a barrel roll.",
                f"{self.name} stands on his back legs.",
                f"{self.name} shakes your hand.",
                f"{self.name} plays dead."
            ]
            selected_trick = random.choice(trick)
            print(selected_trick)
dog_1 = PetDog("Puppy", 3, 12) 
dog_2 = PetDog("Pluto", 4, 5)   
dog_3 = PetDog("Rubby", 1, 35)    

dog_1.train()
dog_1.do_a_trick()



