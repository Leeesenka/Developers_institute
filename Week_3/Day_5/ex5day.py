# Daily Challenge: Modules

import requests
import time

class LoadTimer:
    def __init__(self, url):
        self.url = url
    
    def load_time(self):
        start_time = time.time()
        response = requests.get(self.url)
        end_time = time.time()
        load_time = end_time - start_time
        return load_time


websites = [
    'https://www.google.com',
    'https://www.ynet.co.il',
    'https://www.imdb.com'
]

for site in websites:
    timer = LoadTimer(site)
    load_time = timer.load_time()
    print(f'Loading {site} took {load_time:.2f} seconds')

# Loading https://www.google.com took 0.35 seconds
# Loading https://www.ynet.co.il took 0.09 seconds
# Loading https://www.imdb.com took 0.20 seconds

import random
class Deck:
    def __init__(self):

        my_deck = []
        suit = ["Hearts", "Diamonds", "Clubs", "Spades"]
        value = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"] 
        for suit_data in suit:
            for values in value:
                my_string = suit_data + " " + values
                my_deck.append(my_string)
        self.cards = my_deck



    def shuffle(self):
        if len(self.cards) == 52:
            return random.shuffle(self.cards)
      

    def deal(self):
        if len(self.cards) > 0:
            return self.cards.pop()
            
        else:
            return "Deck is empty" 
    

           
       
class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        return f"{self.value} of {self.suit}"        
decks = Deck()
decks.shuffle()
card1 = decks.deal()
print(card1)

# Clubs 8
# Hearts A