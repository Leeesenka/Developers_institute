import random 
string = str(input("Write string="))
print(len(string))


if len(string) > 10:
    print("string too long")
if len(string) == 10:
    print("Good")    
else: print("string not long enough")

print(string)
print(string[0])
print(string[-1])



print(string)
multiplier = ""
for char in string:
    multiplier=multiplier + char
    print(multiplier)




string = list(string)
random.shuffle(string)
print(''.join(string))







