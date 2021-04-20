# DevOps Assignment - April 2021

This is a respository for DevOps Build, Deploy and Monitor - Assignment.
All updates and changes are sent to a [Discord channel](https://discord.gg/9DURXVr3M9)

## Discord Messaging Update Feature:
I linked a discord webhook to the repository so that all actions such as push and pull requests can also be monitored in discord.
This allows me not having to view the github's action workflow page every single time a test is needed.
Experimenting with the marketplace's discord integrations did not work initially, so I just implemented a standard webhook method.
Discord settings can be set within discord, such as creating new webhooks and changing settings for the permissions.
Limit was set to 25 for the number of time the invitation ![link](https://discord.gg/9DURXVr3M9) can be used.
I might want to customise the discord messages in the future.
<img src="https://github.com/xyangp/devops-assignment/blob/fa1ba90b8bce400c9e470132d653195b1250ee24/Screenshot%202021-04-20%20175632.png"  height="350">

## Files
Contained in this repository are the files required to run one of the application components for the NUS Money Project.
Originally, the files were used and tested in VSC. To run the the files as a test workflow in github actions,
it requires some changes.
#### Changes:
1. Had to remove the *database.js* file that contained the mySQL server properties for connection to the SQL server for querying of the needed data.
   * This file is necessary for querying live data from SQL server, but for the purpose of demonstraiton, mock server is enough.
   * 
2. Commented out line 1 in *accounts.js* since this line is redundent and will throw an error since the file is absent.
```javascript
   const database = require("./database.js");
``` 
4. Changed the link in *script_WORKING_v2.js* to query from a Postman mock server instead.
```javascript
function getFromServer(){
  // $.getJSON('http://localhost:3000/database', function(database) {
  $.getJSON('https://583d562a-3646-4c43-ae04-47aff88479b3.mock.pstmn.io/database', function(database) {      
    AccountsDatabase = database;
  });
}
```

6. Added testScript.js for workflow run. (See below under **Workflow**)

Not sure if I am able to utilise the github secrets to store the server information, may want to explore in the future.

## Workflow
I created a workflow originally to test the *main.js* file within the repository.
Originally used to run in VSC, the express service method `service.listen(3000);` seems to cause the workflow test run to be unable to end.
This file cannot be used for a workflow run directly, so a new file had to be created for this purpose.
Using *testScript.js*, this allow a test run and connection using the other JS files, *accounts.js* to be tested within the workflow.
Any changes to the name of the script that is to be run in the workflow has to be changed in *package.json*.

## Required Files:
1. main.js
2. accounts.js
3. index_WORKING_v2.html
4. script_WORKING_v2.js
5. style.css
6. ~~database.js~~ 

## To Run:
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
<img src="https://github.com/xyangp/devops-assignment/blob/d613d48521e7df6880102ca30f6b953a915126fb/Screenshot%202021-04-19%20191846.png"  height="350">
