const database = require("./database.js");
const express = require("express");
const { response, request } = require("express");
router = express.Router();

router.get("/database", (request, response) => { // database
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
router.get("/accounts", (request, response) => { //accounts.. change query to test.
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
// //Get by id
// router.get("/acounts/by_id", (request, response) => {
//   database.connection.query(`select * from accounts where id = '{request.query.id}'`,
//     (errors, results) => {
//       if (errors) {
//         console.log(errors);
//         response.status(500).send("Internal Server Error");
//       } else {
//         response.status(200).send(results);
//       }
//     });
// });
// Get seller by name
// router.get("/accounts/by_name", (request, response) => {
//   database.connection.query(
//     `select * from accounts where first_name = '{request.query.name}'`,
//     (errors, results) => {
//       if (errors) {
//         console.log(errors);
//         response.status(500).send("Internal Server Error");
//       } else {
//         response.status(200).send(results);
//       }
//     }
//   );
// });
//adding new sellers
// router.post("/sellers/addnew", (request, response) => {
//   database.connection.query(
//     `insert into accounts (name, wallet) values ('{request.body.name}','{request.body.wallet}')`,
//     (errors, results) => {
//       if (errors) {
//         console.log(errors);
//         response.status(500).send("Internal Server Error");
//       } else {
//         response.status(200).send("Added Successfully!");
//       }
//     }
//   );
// });

//delete seller by id
// router.delete("/sellers/by_id", (request,response) => {
//   database.connection.query(
//     `delete from sellers where id = {request.query.id}`,
//     (errors, results) => {
//       if (errors) {
//         console.log(errors);
//       } else {
//         console.log(results);
//       }
//     }
//   );
// });
// router.put("/sellers/update_wallet", (request, response) => {
//   database.connection.query(
//     `update sellers set wallet = '{request.body.wallet}' where id = {request.query.id}`,
//     (errors, results) => {
//       if (errors) {
//         console.log(errors);
//         response.status(500).send("Internal Server Error");
//       } else {
//         response.status(200).send("Updated Successfully!");
//       }
//     }
//   );
// });

module.exports = { router };