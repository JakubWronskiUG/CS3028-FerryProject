from enum import Enum, auto


class FerryCompany(Enum):
    PENTLANDFERRIES = auto()


company_urls = {
    FerryCompany.PENTLANDFERRIES: 'https://pentlandferries.co.uk/timetable-2/'
}
