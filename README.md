# Grocer-Free
> Belly good, wallet better.
## Inspiration
Our first spark of inspiration came from seeing a post on r/australia about someone complaining that their grocery cost is ‘skyrocketing’ despite buying the same products [link](https://www.reddit.com/r/australia/comments/slqiny/my_grocery_bill_is_skyrocketting_despite_buying/). Further research reveals that prices for products in supermarket chains like Woolworths and Aldi have indeed increased recently. The main reasons for this phenomenon are the increased cost to maintain supply chains because of the pandemic and decreased local supply of many products. Hence, we created Grocer-free, a solution for Australians to save as much money as possible in the face of not only inflation but also deliberate price increases from supermarket chains.
## What it does
After scraping the necessary data from supermarket chains like Woolworths, Coles or Aldi, the app would recommend the cheapest grocery products and which supermarket chains to buy them, which users can follow.
## How we built it
At first, we scraped products data from three websites Aldi, Woolworths and Coles. Then, we cleaned those data in R. Then we used the data to build the APIs. And after getting the APIs, we used ReactJS to implement those APIs and design the front-end.
## Challenges we ran into
- Coles, Woolworths and Aldi have a different format and we have to modify the web-scrapping code to get all the data from these pages. And finding the correct tags to scrap it down is hard. Then I have to modify the object to fit the APIs.
## Accomplishments that we're proud of
Cleaning the scraped data from three websites.
## What we learned
Scrapping, cleaning and preprocessing the data.
Build APIs for these data.
## What's next for Grocer-Free
- We are planning to make a "Plan your meals" feature that lets you input your (and your family) BMI, health conditions and other details. With that knowledge, the website will automatically plan out your meals and suggest products accordingly, using the same process as normal grocery shopping (prioritize the most economical products from a certain grocery chain.)
- We will also find a way to get the data concerning the availability of products from each specific supermarket in the chain. Then, the website will also take into account your distance to the nearest stores (aside from prices of products) and recommend where to buy your grocery accordingly.
