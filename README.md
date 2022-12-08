# CS3028-FerryProject

This project is deployed under the web address: ferrywave.tk

Instructions on running project locally: 

Firstly, create a file named '.env' within the 'ferry-backend' directory.

.env should include the following:
PORT=5001
MONGO_URI=mongodb+srv://user:user@cluster0.qlxmvjb.mongodb.net/?retryWrites=true&w=majority

All ip address' contained with http requests must be changed to 'localhost', these are found in the 'GetAllButton', 'GetByArr' and GetByDep' components. 

Run the 'npm install' command in terminal to install all of the required node_modules

After this, navigate to ferry-backend directionary and run npm start to run the backend

In a new terminal, navigate to ferry-project and npm start to run the frontend

The webpage should now be displayed in the browser

---

Instructions for developers:

Add new components to components folder, add css for the components into the same components folder

Make sure to include import React from 'react'; in every js and jsx file

Don't forget to export the newly created components

---