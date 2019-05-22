// Dependencies
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// Routes
router.get("/", function (req, res) {
    burger.all(function (burger_data) {
        res.render("index", { burger_data});
    });
});

router.post("/burgers/create", function (req, res) {
    burger.create(req.body.burger_name, function (result) {
        console.log(result);
        res.redirect('/');
    })
})

router.put("/burgers/update", function (req, res) {
    burger.update(req.body.burger_id, function (result) {
        res.redirect('/');
    })
})

router.post("/delete", function (req, res) {
    burger.delete(function () {
        res.redirect("/");
    });
});

// Exports routes
module.exports = router;