// Import the express library
const express = require("express");
const body_parser = require("body-parser");
const cors = require("cors"); // this to tell server and frontend to allow running from the same machine
const accounts = require("./accounts"); //import accounts.js file

// 
service = express();
service.use(cors());
service.use(body_parser.json());
// app.use(bodyParser.urlencoded());
service.use(accounts.router);

// We start the service on port 3000. API Listener has started on port 3000.
service.listen(3000);
