import random

class Game:
    def __init__(self, winner=0, message = ""):
        # winner = 0 by default. 
        # winner = 1 user
        # winner = 2 computer
        # winner = 3 drow
        self.winner = winner
        self.message = message
        
    def get_user_item(self):
        while True:
            user_item = input("Select (r)ock, (p)aper, or (s)cissors: ")
            if user_item.lower() in ["r", "p", "s"]:
                return list(user_item.lower())

    def get_computer_item(self):
        list_choos = ["r", "p", "s"]
        return random.choices(list_choos)

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            self.message = "Game is over, draw"
            self.winner = 3
            return self
        elif user_item == ["r"] and computer_item == ["p"]:
            self.message = "Game is over, you lose"
            self.winner = 2
            return self
        elif user_item == ["p"] and computer_item == ["r"]:
            self.message = "Game is over, you win"
            self.winner = 1
            return self
        elif user_item == ["p"] and computer_item == ["s"]:
            self.message = "Game is over, you lose"
            self.winner = 2
            return self
        elif user_item == ["s"] and computer_item == ["p"]:
            self.message = "Game is over, you win"
            self.winner = 1
            return self
        elif user_item == ["r"] and computer_item == ["s"]:
            self.message = "Game is over, you win"
            self.winner = 1
            return self
        elif user_item == ["s"] and computer_item == ["r"]:
            self.message = "Game is over, you lose"
            self.winner = 2
            return self

