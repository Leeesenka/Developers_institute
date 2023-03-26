whithout_A = input ("Write long string whithout A:")
for letter in whithout_A:
    if letter == "A" or letter == "a":
        print("You are NOT champion!")
        break
if len(whithout_A) <= 10:
    print("too short")
