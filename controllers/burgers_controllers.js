// Dependencies
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// Routes
router.get("/", function (req, res) {
    burger.selectAll(function (burger_data) {
        res.render("index", { burger_data});
    });
});

router.post("/burgers/insertOne", function (req, res) {
    burger.insertOne(req.body.burger_name, function (result) {
        console.log(result);
        res.redirect('/');
    });
});

router.put("/burgers/updateOne/", function (req, res) {
    burger.updateOne(req.body.burger_id, function (result) {
        res.redirect('/');
    });
});

router.post("/delete", function (req, res) {
    burger.delete(function () {
        res.redirect("/");
    });
});

// Exports routes
module.exports = router;