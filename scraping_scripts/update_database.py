from enum import Enum, auto
from pymongo import MongoClient
from ferry_companies import FerryCompany, CompanyInfoGetter


class Collection(Enum):
    COMPANY = auto()
    FERRY = auto()
    COMPANY_TO_FERRY_MAPPING = auto()
    PORT = auto()
    TRIP = auto()


class DBUpdater:

    client = None
    db_name = 'test'
    db = None

    collections = {
        Collection.COMPANY: 'company',
        Collection.FERRY: 'ferries',
        Collection.PORT: 'ports',
        Collection.TRIP: 'trips',
        Collection.COMPANY_TO_FERRY_MAPPING: 'company_to_ferry_mapping'
    }

    MONGODB_USER = 'python-user'
    MONGODB_PASSWORD = 'pythonpassword'
    MONGODB_CONNECTION_STRING = "mongodb+srv://{}:{}@cluster0.qlxmvjb.mongodb.net/?retryWrites=true&w=majority&authSource=admin".format(
        MONGODB_USER,
        MONGODB_PASSWORD,
    )

    def __init__(self):
        self.client = MongoClient(self.MONGODB_CONNECTION_STRING)
        self.db = self.client[self.db_name]

    def update_company_collection(self, company: FerryCompany):

        company_collection = self.collections[Collection.COMPANY]

        update_dict = {
            'company_id': CompanyInfoGetter.get_company_id(company),
            'company_name': CompanyInfoGetter.get_company_name(company),
            'company_home_url': CompanyInfoGetter.get_company_home_url(company),
            'company_tickets_url': CompanyInfoGetter.get_company_tickets_url(company)
        }

        self.db[company_collection].insert_one(update_dict)

    def update_databases(self):

        for company in FerryCompany:
            self.update_company_collection(company)
            # update ferries
            # update mapping
            # update ports
            # update trips

            pass

        db = self.client['test']['companies']
        dict = {'name': 'test_company'}
        # db.insert_one(dict)
        print(db)


updater = DBUpdater()

updater.update_databases()
