# sample_dict = { 
#    "class":{ 
#       "student":{ 
#          "name":"Mike",
#          "marks":{ 
#             "physics":70,
#             "history":80
#          }
#       }
#    }
# }
# print(sample_dict["class"]["student"]["marks"]["history"])

sample_dict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"

}
keys_to_remove = ["name", "salary"]

for key in keys_to_remove:
    del sample_dict[key]


# del sample_dict["name"]
# del sample_dict["salary"]
# print(sample_dict)


# alpha = "אברקם"
# heb_dict = dict(enumerate(alpha))
# print(heb_dict)

# even_letters = [value for key, value in heb_dict.items() if key %2 ==1]
# print(even_letters)

# def calculation(a, b):
#     add = a + b
#     sub = a - b
#     return add, sub
# res = calculation(40, 10)
# print(res)

#  3702 (3 + 33 + 333 + 3333)
# X+XX+XXX+XXXX
# if x = 3

# def multiply_add(num: int, limit):
#     res = num *1 + num *11 +num *111 +num *1111
#     return res
# print(multiply_add(3))    

# def multiply_add(num: int, limit: int):
#     base = "1"
#     res = 0
#     for i in range(1, limit +1):
#         multiplicator = base * i
#         multiplicator = int(multiplicator)
#         res += num * multiplicator
#     return res
# print(multiply_add(3,4))  

# word = ['dog', 'cat', 'ball']

# result_list = list(map(lambda num: num.capitalize(), word))
# print(result_list)
