def display_board(board_position, player):
    board = ('*')
    y = ('*', '','|')
    x = ("-")
    external_delimter = (board * 17)
    delimetr = (y[0] + " " *2+x*3 + y[2] + x*3 + y[2]+x*3+" " * 2 + y[0])
    print(external_delimter)
    for position, external in enumerate(board_position):
        position1 = " "
        position2 = " "
        position3 = " "
        for i, value in enumerate(external):
            if value != "":
                if i == 0:
                    position1 = value
                elif i == 1:
                    position2 = value
                elif i == 2:
                    position3 = value
        row = y[0] + " "*2 + position1 + " "*2 + y[2]+ " " + position2 + " " +y[2] + " "*2 + position3 + " "*2 + y[0]
        print(row)
        if position == 0 or position == 1:
            print(delimetr)
    print(external_delimter)    

def player_input(player, board_position):
    print("Player " +  player + "'s turn")
    player_answer_x = int(input("Where will we put row? "))
    player_answer_y = int(input("Where will we put column? "))
    if player_answer_x > 3 or player_answer_y > 3:
        print("Incorrect input. Enter the number from 1 to 3.")
    else:
        if board_position[player_answer_x-1][player_answer_y-1] != "":
            print("This position is already set, choose another one")
            return 0, 0
        else:
            print("go")
    return player_answer_x, player_answer_y
def check_win(board_position, player):
    # Check for rows win
    for i, _ in enumerate(board_position):
        if len(set(board_position[i])) == 1 and board_position[i][0] != "":
            return True
    # Check for columns win
        if (board_position[0][i] == board_position[1][i] == board_position[2][i]) and board_position[0][i] != "":
            return True
    # Check for diagonal win
    if (board_position[0][0] == board_position[1][1] == board_position[2][2]) and board_position[0][0] != "":
        return True 
    if (board_position[2][0] == board_position[1][1] == board_position[0][2]) and board_position[2][0] != "":
        return True
    return False

def play():
    print("*" * 10, " TicTacToe game in python ", "*" * 10)
    board_position = [["","",""], ["","",""], ["","",""]]
    player = ""
    display_board(board_position, player)
    iteration = 1
    while True:
        if iteration % 2:
            player = "X"
        else:
            player = "O"
        row, column = player_input(player, board_position)
        while row == 0 or column == 0:
            row, column = player_input(player, board_position)
        board_position[row-1][column-1] = player
        display_board(board_position, player)
        maybe_win = check_win(board_position, player)
        if maybe_win:
            print("Congratulations to winner ", player)
            break
        iteration += 1
        if iteration == 10:
            print("Game is over, DRAW!")
            break
play()




          







