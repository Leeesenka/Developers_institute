print("Write string:")
string = str(input("String="))
print(len(string))


if len(string) >= 10:
    print("string too long")
else: print("string not long enough")

print(string)
print(string[0])
print(string[-1])



print(string)
multiplier = ""
for char in string:
    multiplier=multiplier + char
    print(multiplier)



import random
string = list(string)
random.shuffle(string)
print(string)







