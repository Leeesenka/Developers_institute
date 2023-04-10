#from anagram_checker import AnagramChecker

def get_user_menu_choice(self):
        print("Menu:")
        print("(g) Play a new game")
        print("(x) Exit")
        while True:
            user_input = input(":")
            if user_input == "g":
                return True
            elif user_input == "x":
                return False
            else:
                print("Write x or g")
                continue
def get_user_item():
            word = input("Say word: ")
            words = word.split()
            word = word.replace(" ", "")
            word_count = len(words)
            if  word_count > 1:
                   print("Error")
            return (word)            

