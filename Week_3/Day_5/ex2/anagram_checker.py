from collections import Counter
import os
from anagrams import get_user_item

class AnagramChecker:
    def __init__(self, filename):
        with open(filename, 'r') as file:
            self.filename = file.read().splitlines()

    def is_valid_word(self, word):
        for value in self.filename:
            if value == word:
                return True
        return False

    def get_anagrams(self, word):
        word_list = list(word)
        for word_from_list in self.filename:
            counter = 0
            if len(word) != len(word_from_list) or is_anagram(word, word_from_list):
                continue
            for letter in word_list:
                if letter in list(word_from_list):
                    counter += 1
                    continue
                else:
                    break
            if counter == len(word_list):
                print("Anogram", word, word_from_list)
            
def is_anagram(word1, word2):
    if word1 == word2:
        return True
    else:
        return False

def main():
    anagram = AnagramChecker("sowpod.txt")
    word = get_user_item()
    valid_word = anagram.is_valid_word(word)
    my_anagram = anagram.get_anagrams(word)

main()
