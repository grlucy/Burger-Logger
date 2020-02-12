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

router.post("/api/burgers", function(req, res) {
  const value = req.body.burger_name;
  burger.insertOne(value, function(result) {
    console.log("inserted one: " + value);
    res.json({ id: result.insertId });
  });
});
//updateOne

// Export routes

module.exports = router;
