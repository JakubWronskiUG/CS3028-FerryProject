from pymongo import MongoClient
import urllib


class DBUpdater:

    # establish a client connection
    MONGODB_CONNECTION_STRING = "mongodb+srv://python-user:pythonpassword@cluster0.qlxmvjb.mongodb.net/?retryWrites=true&w=majority&authSource=admin"
    client = MongoClient(MONGODB_CONNECTION_STRING)

    db = client.test
    client.server_info()['ok']

    # Here: code for updating the databse
