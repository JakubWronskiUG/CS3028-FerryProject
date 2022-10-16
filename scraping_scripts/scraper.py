from abc import abstractclassmethod
from ast import Str
from calendar import HTMLCalendar
from bs4 import BeautifulSoup
from enum import Enum, auto
import requests
import pandas as pd
from ferry_companies import FerryCompany
import ferry_companies


class CompanyNotSupportedException(Exception):
    pass


class ScrapingMethodDidNotWorkOnAWebsite(Exception):
    pass


class ScrapingType(Enum):
    HTMLTABLE = auto()


class Scraper:

    def scrape_html_tables(url):
        try:
            page = requests.get(url)
            soup = BeautifulSoup(page.text, 'lxml')

            table_sections = soup.find_all(class_='timetab')
            timetables = []

            for table_section in table_sections:
                table_title = table_section.h5.text

                headers = []
                headers_set = table_section.find_all('th')
                for header in headers_set:
                    headers.append(header.text)
                data = pd.DataFrame(columns=headers)

                rows = table_section.find_all('tr')[1:]

                for j in rows:
                    row_data = j.find_all('td')
                    row = [i.text for i in row_data]
                    length = len(data)
                    data.loc[length] = row
                    print(row)

                timetables.append(data)

            return data

        except:
            raise ScrapingMethodDidNotWorkOnAWebsite

    website_scraping_method = {
        ScrapingType.HTMLTABLE: scrape_html_tables
    }


class TimeTableScraper(Scraper):

    ferry_company_scraping_type = {
        FerryCompany.PENTLANDFERRIES: ScrapingType.HTMLTABLE
    }

    def get_timetables_from_website(self, company: FerryCompany):

        if company not in FerryCompany:
            raise CompanyNotSupportedException(
                f'Company {company} is not supported.')

        scraping_type = self.ferry_company_scraping_type[company]
        scraping_method = self.website_scraping_method[scraping_type]
        url = ferry_companies.company_urls[company]

        try:
            tables = scraping_method(url)
        except ScrapingMethodDidNotWorkOnAWebsite:
            print(
                f'Scraping method {scraping_type} did not work for {url}. Check if website still supports this scraping method.')
            return None

        return tables
