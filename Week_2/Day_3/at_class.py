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
print(sample_dict)


alpha = "אברקם"
heb_dict = dict(enumerate(alpha))
print(heb_dict)

even_letters = [value for key, value in heb_dict.items() if key %2 ==1]
print(even_letters)


