import requests
from bs4 import BeautifulSoup

# URL of the website to scrape
url = 'https://splash30.com/collections/fitness-accessories'

# Fetch the HTML content of the webpage
try:
    response = requests.get(url)
    response.raise_for_status()  # Check for HTTP errors
except requests.exceptions.RequestException as e:
    print(f"Error fetching the URL: {e}")
    exit()

# Parse the HTML content using BeautifulSoup
soup = BeautifulSoup(response.text, 'html.parser')

# Save the HTML structure to a file for review
html_file = 'website_structure.html'
with open(html_file, 'w', encoding='utf-8') as file:
    file.write(soup.prettify())

print(f"HTML structure saved to {html_file}")

# Optional: Print out specific sections of the page
print("\n### Titles and Meta Tags ###")
print(soup.title.string)
for meta in soup.find_all('meta'):
    print(meta)

print("\n### Links ###")
for link in soup.find_all('a'):
    print(f"Text: {link.text.strip()} | Href: {link.get('href')}")

print("\n### Images ###")
for img in soup.find_all('img'):
    print(f"Alt: {img.get('alt')} | Src: {img.get('src')}")
