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
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  const id = req.params.id;
  burger.updateOne(id, function(result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  const id = req.params.id;
  burger.deleteOne(id, function(result) {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes

module.exports = router;
