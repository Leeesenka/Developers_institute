month = input ("Say month 1-12:")
winter_list = [1,2,12]

for shishka in winter_list:
    if shishka == int(month):
        print("winter")
if int(month) in range(3, 6):
    print("spring")
if int(month) in range(6, 9): 
    print("summer")
if int(month) in range(9, 12):   
    print("autumn")
