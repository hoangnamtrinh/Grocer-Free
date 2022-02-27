from bs4 import BeautifulSoup as soup
from selenium import webdriver
from urllib.request import urlopen
from time import sleep
from aldi_helper import *
import json
import datetime

# adding webdriver options
options = webdriver.ChromeOptions()
options.add_argument("--start-maximized")
# driver = webdriver.Chrome(executable_path=r'C:/Users/Ultabook/Downloads/chromedriver_win32/chromedriver.exe',options=options)
driver = webdriver.Chrome(
    executable_path=r'../../utils/chromedriver', options=options)

# contain full list details for woolies
full_list = []
seller = {
    "seller":
    {"name": "Aldi",
     "description": "Aldi Supermarket",
     "url": "https://www.aldi.com.au",
     "added_datetime": None
     }
}
full_list.append(seller)
arr = []  # used to store every object

# list of url section
url_header = [
    'https://www.aldi.com.au/en/groceries/fresh-produce/dairy-eggs/',
    'https://www.aldi.com.au/en/groceries/freezer/',
    'https://www.aldi.com.au/en/groceries/health/',
    'https://www.aldi.com.au/en/groceries/laundry-household/laundry/',
    'https://www.aldi.com.au/en/groceries/laundry-household/household/',
    'https://www.aldi.com.au/en/groceries/pantry/chocolate/',
    'https://www.aldi.com.au/en/groceries/pantry/coffee/',
    'https://www.aldi.com.au/en/groceries/pantry/olive-oil/',
    'https://www.aldi.com.au/en/groceries/liquor/wine/',
    'https://www.aldi.com.au/en/groceries/liquor/beer-cider/',
    'https://www.aldi.com.au/en/groceries/liquor/champagne-sparkling/',
    'https://www.aldi.com.au/en/groceries/liquor/spirits/',
    'https://www.aldi.com.au/en/groceries/beauty/'
]

# scrapping for each section selected in the list
for header in url_header:
    url = header
    print(url)
    driver.get(url)
    # sleep(10)
    html = driver.page_source
    page_soup = soup(html, 'html.parser')
    container_soup = page_soup.findAll('a', {'title': 'to product detail'})
    if(len(container_soup) != 0):
        category = None
        print(category)
    arrSinglePage, n_items = scrapping(container_soup, category)
    for obj in arrSinglePage:
        arr.append(obj)

# add the products array to the full list
products = {'products': arr}
full_list.append(products)

# write a json file on all items
with open('aldiData.json', 'w') as outfile:
    json.dump(full_list, outfile, default=myconverter)


print(len(arr))
