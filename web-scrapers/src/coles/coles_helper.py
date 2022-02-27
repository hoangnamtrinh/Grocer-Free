from bs4 import BeautifulSoup as soup
from selenium import webdriver
from urllib.request import urlopen
from time import sleep
import json
import datetime

def scrapping(container_soup, category):
    
    containers = container_soup
    print('Total items in this page: ' + str(len(containers)))
    print('')
    
    arr = []
    
    for container in containers:

        # get the product name
        if (container.find('span', {'class':'product-name'})):
            product_name = container.find('span', {'class':'product-name'}).text.strip()
            product_brand = container.find('span', {'class':'product-brand'}).text.strip()
            product_name = product_brand + product_name
        else:
            product_name = None
        # initial product is available
        availability = True
        # get the date and time of the scrapping time
        date_now = datetime.datetime.now()        

        # check price and availability of each item
        
        if (container.find('span', {'class':'dollar-value'})):
            price_dollar = container.find('span',{'class':'dollar-value'})
            price_cent = container.find('span', {'class': 'cent-value'})
            price = price_dollar.text + '.' + price_cent.text
        else:
            price = 'Unavailable at the momment'
            availability = False

        if (container.find('div', {'class': 'product-image'})):
            tmp = container.find('div', {'class': 'product-image'})
            pic = tmp.img['src']
        else:
            pic = None
        obj = {
            "name": product_name,
            "price": price,
            "availability": availability,
            "datetime": date_now,
            "category": category,
            "pic": pic
        }
        #return all the items in the page
        arr.append(obj)
    return arr, len(containers)

# convert datetime format to fit json
def myconverter(o):
    if isinstance(o, datetime.datetime):
        return o.__str__()

