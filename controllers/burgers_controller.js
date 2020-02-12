// Import the model

const burger = require("../models/burger");

// Express

const express = require("express");

const router = express.Router();

// Routes

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    res.render("index", { burgers: data });
  });
});

//insertOne
//updateOne

// Export routes

module.exports = router;
