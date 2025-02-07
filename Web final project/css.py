import requests
from bs4 import BeautifulSoup
import os
from urllib.parse import urljoin

# URL of the website to scrape
url = 'https://splash30.com/'

# Folder to save the CSS files
css_folder = 'css_files'
os.makedirs(css_folder, exist_ok=True)

try:
    # Fetch the HTML content of the webpage
    response = requests.get(url)
    response.raise_for_status()
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find all linked CSS files
    css_links = [link['href'] for link in soup.find_all('link', rel='stylesheet') if 'href' in link.attrs]

    if not css_links:
        print("No CSS files found on the webpage.")
    else:
        for css_link in css_links:
            # Resolve relative URLs to absolute URLs
            absolute_css_link = urljoin(url, css_link)

            # Fetch the CSS content
            css_response = requests.get(absolute_css_link)
            css_response.raise_for_status()

            # Extract the file name and save the CSS file locally
            css_filename = os.path.join(css_folder, os.path.basename(absolute_css_link.split('?')[0]))
            with open(css_filename, 'w', encoding='utf-8') as css_file:
                css_file.write(css_response.text)

            print(f"CSS file saved: {css_filename}")

except requests.exceptions.RequestException as e:
    print(f"Error fetching the URL: {e}")
