from bs4 import BeautifulSoup as soup
from selenium import webdriver
from urllib.request import urlopen
from time import sleep
from coles_helper import *
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
    {"name": "Coles",
     "description": "Coles Supermarket",
     "url": "https://shop.coles.com.au/a/national/home?cid=cdc:navigation:shop-online",
     "added_datetime": None
     }
}
full_list.append(seller)
arr = []  # used to store every object

# list of url section
url_header = ['https://shop.coles.com.au/a/national/everything/browse/bakery?pageNumber=1',
            'https://shop.coles.com.au/a/national/everything/browse/fruit-vegetables?pageNumber=1',
            'https://shop.coles.com.au/a/national/everything/browse/meat-seafood?pageNumber=1',
            'https://shop.coles.com.au/a/national/everything/browse/from-deli?pageNumber=1',
            'https://shop.coles.com.au/a/national/everything/browse/dairy-eggs-meals?pageNumber=1',
            'https://shop.coles.com.au/a/national/everything/browse/convenience-meals-4390551?pageNumber=1',
            'https://shop.coles.com.au/a/national/everything/browse/pantry?pageNumber=1',
            'https://shop.coles.com.au/a/national/everything/browse/frozen?pageNumber=1',
            'https://shop.coles.com.au/a/national/everything/browse/drinks?pageNumber=1',
            'https://shop.coles.com.au/a/national/everything/browse/international-foods?pageNumber=1',
            'https://shop.coles.com.au/a/national/everything/browse/household?pageNumber=1',
            'https://shop.coles.com.au/a/national/everything/browse/health-beauty?pageNumber=1',
            'https://shop.coles.com.au/a/national/everything/browse/baby?pageNumber=1',
            'https://shop.coles.com.au/a/national/everything/browse/pet?pageNumber=1',
              ]

# scrapping for each section selected in the list
for header in url_header:
    url = header
    print(url)
    driver.get(url)
    # sleep(10)
    html = driver.page_source
    page_soup = soup(html, 'html.parser')

    container_soup = page_soup.findAll(
        'div', {'class': 'product'})
    # print(container_soup)
    if(len(container_soup) != 0):
        category = None
    arrSinglePage, n_items = scrapping(container_soup, category)
    for obj in arrSinglePage:
        arr.append(obj)

# add the products array to the full list
products = {'products': arr}
full_list.append(products)

# write a json file on all items
with open('colesData.json', 'w') as outfile:
    json.dump(full_list, outfile, default=myconverter)

print(len(arr))
