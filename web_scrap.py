# Python script for web scraping to extract data from a website
import requests
from bs4 import BeautifulSoup
def scrape_data(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    with open('file_saida.txt', 'w', encoding='utf-8') as file:
        # Write the scraped data to the file
        file.write(soup.title.string)
        file.write('\n')
        file.write(soup.body.text)
        # Add more lines to write additional scraped data
# Your code here to extract relevant data from the website


#output this call to a file
scrape_data('https://www.globo.com')