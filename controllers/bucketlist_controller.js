var express = require("express");
// NOT SURE IF WE NEEDS 
var router = express.Router();

// Import the model (bucketlist.js) to use its database functions.
var bucketlist = require("../models/bucketlist.js")

// Create all our routes and set up logic within those routes where required.

module.exports = router;