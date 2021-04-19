const database = require("./database.js");
const express = require("express");
const { response, request } = require("express");
router = express.Router();

router.get("/database", (request, response) => { // database
  // SQL Query
  database.connection.query("select * from accounts", (errors, results) => {
    if (errors) {
      console.log(errors);
      response.status(500).send("Internal Server Error");
    } else {
      // console.log(results); //output to terminal
      response.status(200).send(results);
    }
  });
});
module.exports = { router };
