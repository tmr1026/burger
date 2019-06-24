var orm = require("../config/orm.js");
var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        })
    },
    insertOne: function (name, cb) {
        orm.insertOne("burgers", name, cb);
    },
    updateOne: function (id, cb) {
        orm.updateOne("burgers", id, cb);
    },
    delete: function (cb) {
        orm.delete("burgers", function (res) {
            cb(res);
        });
    }
}
module.exports = burger;
