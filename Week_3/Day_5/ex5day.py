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
