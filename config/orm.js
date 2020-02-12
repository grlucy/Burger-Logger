// Import MySQL connection

const connection = require("./connection");

// Create the ORM

const orm = {
  selectAll: function(table, column, value, cb) {
    const query = `SELECT * FROM ?? WHERE ?? = ?`;
    connection.query(query, [table, column, value], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  insertOne: function(table, column, value, cb) {
    const query = `INSERT INTO ?? (??) VALUES ("?")`;
    connection.query(query, [table, column, value], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(table, column1, value1, column2, value2, cb) {
    const query = `UPDATE ?? SET ?? = ? WHERE ?? = ?`;
    connection.query(query, [table, column1, value1, column2, value2], function(
      err,
      result
    ) {
      if (err) throw err;
      cb(result);
    });
  }
};

// Export the ORM

module.exports = orm;
