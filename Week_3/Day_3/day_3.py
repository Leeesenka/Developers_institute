# class Functions:
#     def __init__(self) -> None:
#         return

#     abc = -10
#     print(f"{abs(abc)}")  
#     print(abc.__doc__) 

#     int_1 = input("Say number: ")

#     int_1_int = int(int_1)
#     print(f" {int_1_int}")
#     print(int_1_int.__doc__)


#     rut = input("Name")
#     print(rut.__doc__)


# Exercise 2: Currencies

# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount

#     #Your code starts HERE
#     def __str__(self):
#         return str(self.amount) + " " + str(self.currency)+"s"
    
#     def __int__(self):
#         return int(self.amount)
    
#     def __repr__(self):
#         return repr(str(self.amount) + " " + str(self.currency)+"s")
    


#     def __add__(self, other):
#         if type(other) == Currency:
#             if self.currency != other.currency:
#                 raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
#             else:
#                 self.amount + other.amount
#                 return self
#         else:
#             self.amount + other
#             return self
        
#     def __iadd__(self, other):
#         if type(other) == Currency:
#             if self.currency != other.currency:
#                 return self
#             else:
#                 self.amount += other
#                 return self

           

        
        

    

        

# c1 = Currency('dollar', 5)
# c2 = Currency('dollar', 10)
# c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10)



# print(c1.str())
# print(str(c1))
# print(int(c1))
# print(repr(c1))
# print(c1 + c2)
# print(c1)
# c1 += 5
# print(c1)

# print(c1 + c3)

# c1 += c2
# print(c1)


#  Exercise 2: Random Module
# import random
# first_number = int(input("Say number 1-100..."))
# def numb(first_number):
#     second_number = random.randrange(1,100)
#     if first_number == second_number:
#         print("Good",first_number, second_number)
#     elif first_number != second_number:
#         print("Error",first_number, second_number)

# numb(first_number)


# Say number 1-100...1
# Good 1 1  


#  Exercise 3: String Module
# import random
# import string
# def string_1():
#     length = 33
#     line = random.choices(string.ascii_letters, k=length)
#     print(''.join(line))

# string_1()
    
# YCgotRWcptnVSxVHwkUebNJDYsKUVqeij


# Exercise 4 : Current Date


# import datetime

# today_date = datetime.date.today()
# actual_datetime = datetime.datetime.now()

# print(f"Today is the {today_date.strftime('%d/%m')}")

# Today is the 04/04

# Exercise 5 : Amount Of Time Left Until January 1st

# import datetime

# today_date = datetime.date.today()
# actual_datetime = datetime.datetime.now()

# print(f"Today is the {today_date.strftime('%d/%m')}")

# Exercise 5 : Amount Of Time Left Until January 1st

# import datetime

# today_date = datetime.date.today()
# actual_datetime = datetime.datetime.now()

# print(f"Today is the {today_date.strftime('%d/%m')}")
# jan_1 = datetime.datetime(actual_datetime.year + 1, 1, 1)
# last_days = jan_1 - actual_datetime
# print(f"the 1st of January is in", last_days)

# the 1st of January is in 271 days, 4:25:55.762023

# Exercise 6 : Birthday And Minutes
# from datetime import datetime
# actual_datetime = datetime.now()
# b_date = "08/05/1988"
# def date_1(b_date):
  
#     dt = datetime.strptime(b_date, "%d/%m/%Y")
#     print(dt)
#     my_life = actual_datetime -  dt
#     print(my_life)
# date_1(b_date)

# 12749 days, 19:46:48.281416

# Exercise 7 : Upcoming Holiday

# import datetime

# today_date = datetime.date.today()
# actual_datetime = datetime.datetime.now()

# print(f"Today is the {today_date.strftime('%d/%m')}")
# from datetime import datetime
# actual_datetime = datetime.now()
# hol_date = "06/04/2023"
# def date_1(hol_date): 
#     dt = datetime.strptime(hol_date, "%d/%m/%Y")
#     print(dt)
#     passover = dt - actual_datetime
#     passover_1 = passover.days
#     passover_2 = passover.seconds//3600
#     print(f"The next holiday is in", passover_1,  "days", passover_2, "hours")
# date_1(hol_date)

# The next holiday is in 1 days 3 hours









