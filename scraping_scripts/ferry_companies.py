from enum import Enum, auto


class FerryCompany(Enum):
    PENTLANDFERRIES = auto()


class ScrapingType(Enum):
    HTMLTABLE = auto()


class CompanyInfoGetter:

    @staticmethod
    def get_company_url(company: FerryCompany):

        company_urls = {
            FerryCompany.PENTLANDFERRIES: 'https://pentlandferries.co.uk/timetable-2/'
        }

        return company_urls[company]

    @staticmethod
    def get_company_scraping_type(company: FerryCompany):
        company_scraping_type = {
            FerryCompany.PENTLANDFERRIES: ScrapingType.HTMLTABLE
        }

        return company_scraping_type[company]
