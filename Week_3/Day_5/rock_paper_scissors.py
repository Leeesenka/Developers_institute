from game import Game
class Output_game():
    def get_user_menu_choice(self):
        print("Menu:")
        print("(g) Play a new game")
        print("(x) Show scores and exit")
        while True:
            user_input = input(":")
            if user_input == "g":
                return True
            elif user_input == "x":
                return False
            else:
                print("Write x or g")
                continue

    def print_results(self, results):
        print("Game results:")
        print(results)

    def play(self, results):
        while True:
            game = Game()
            user_item = game.get_user_item()
            computer_item = game.get_computer_item()
            result = game.get_game_result(user_item, computer_item)
            print("You choosed:", ' '.join(user_item)) 
            print("Computer choosed:", ' '.join(computer_item)) 
            print(result.message)
            if result.winner == 1:
                results["win"] +=1
            elif result.winner == 2:
                results["loss"] +=1   
            else:
                results["draw"] +=1
            return results
def main():
    results = {"win": 0, "loss": 0, "draw": 0}
    while True:
        my_game = Output_game()
        menu = my_game.get_user_menu_choice()
        if menu:
            results = my_game.play(results)
        else:
            my_game.print_results(results)
            break
main()
        
