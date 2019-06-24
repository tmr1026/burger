// Dependencies
const connection = require('./connection.js');

var orm = {
    selectAll: function (tableInput, cb) {
        connection.query('SELECT * FROM burgers', function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },

    updateOne: function (condition, cb) {
        connection.query('UPDATE burgers SET devoured= true WHERE id=' + condition + ';', function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },

    insertOne: function (tableInput, val, cb) {
        connection.query('INSERT INTO ' + tableInput + " (burger_name)VALUES ('" + val + "');", function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },

    delete: function (table, cb) {
        var queryString = "DELETE FROM " + table;
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}

// Exports ORM
module.exports = orm;