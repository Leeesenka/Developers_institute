
# import random

# def get_words_from_file(filename):
#     with open(filename, 'r') as file:
#         words = file.read().splitlines()
#     return words

def get_random_sentence(length, words):
    random_w = random.sample(words, length)
    sentence = ' '.join(random_w).lower()
    return sentence

def main():
    print("This program generates a random sentence.")
    
    try:
        length = int(input("Enter the length between 2 and 20: "))
    except ValueError:
        print("Enter a valid integer between 2 and 20.")
        return

    if length < 2 or length > 20:
        print("Enter a valid integer between 2 and 20.")
        return

    words = get_words_from_file('sowpods.txt')
    random_sentence = get_random_sentence(length, words)
    print("Sentence:", random_sentence)

if __name__ == '__main__':
    main()

#     This program generates a random sentence using words from a word list.
# Enter the length between 2 and 20: 3
# Generated sentence: patrials supererogations sliddering


import json

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""


pay = json.loads(sampleJson)
salary = pay["company"]["employee"]["payable"]["salary"]
print("Salary:", salary)


pay["company"]["employee"]["birth_date"] = "1988-05-08"


with open("output.json", "w") as outfile:
    json.dump(pay, outfile, indent=2)

# Salary: 7000


# Daily Challenge : Text Analysis
class Text:
    def __init__(self, sentence = "A good book would sometimes cost as much as a good house."):
        self.sentence = sentence
        
    def frequency_word(self, sentence):    
        new_sent = self.sentence.split()
        if sentence in new_sent:
            return new_sent.count(sentence)
        else:
            return None

    

    def common_word(self):
        new_sent = self.sentence.split()
        word_new = []
        for item in new_sent:
            count = 0
            for x in new_sent:
                if x == item:
                    count +=1
            word_new.append(count)
               

        duplicates = set()
        index = 0
        while index < len(new_sent):
            if  word_new[index] !=1:

                duplicates.add(new_sent[index])
            index += 1 
        print(duplicates) 

    def set_word(self):
        new_sent = self.sentence.split()
        return list(set(new_sent))

text = "A good book would sometimes cost as much as a good house."
texts = Text(text) 
word_frequency = texts.frequency_word("good")
print(f"Frequency of 'good': {word_frequency}")
most_common = texts.common_word()
print(f"Most common word: {most_common}")
un_word = texts.set_word()
print(f"Unique words: {un_word}")



       