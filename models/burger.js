// Import the ORM

const orm = require("../config/orm");

// Create code that will call the ORM functions using burger-specific input

const burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(value, cb) {
    orm.insertOne("burgers", "burger_name", value, function(res) {
      cb(res);
    });
  },
  updateOne: function(id, cb) {
    orm.updateOne("burgers", "devoured", 1, "id", id, function(res) {
      cb(res);
    });
  },
  deleteOne: function(id, cb) {
    orm.deleteOne("burgers", "id", id, function(res) {
      cb(res);
    });
  }
};

// Export the model

module.exports = burger;
