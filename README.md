# DevOps Assignment - April 2021

This is a respository for DevOps Build, Deploy and Monitor - Assignment.
All updates and changes are sent to a [Discord channel](https://discord.gg/YQkeJAQS7U)

## About
Contained in this repository are the files required to run a application component for Group 6's NUS Money Project.
The application component queries from a sample data table containing customers's bank or trading accounts.
The demo button

#### Files Required:
1. main.js
2. accounts.js
3. database.js
4. index_WORKING_v2.html
5. script_WORKING_v2.js
6. style.css

#### To Run:
1) Download files and extract to directory
2) Enter Command for required node packages in working directory: 
    * *npm init*
    * *npm install --save mysql express body-parser cors*
3) run node *main.js* to connect to the provided database
4) run *index_WORKING_v2.html* to preview the sample application component

#### Button Functions:
1) Demo: Server Query Data
      * This function button performs a backend demonstration of the query for customer's bank account data.
2) Demo: User's View
      * A first name entry is required to be entered in the form fill box before clicking on the function button.
      * Clicking on this button filters the account information belonging to the user
