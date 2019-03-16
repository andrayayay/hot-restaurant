// var tableData = require("..data/tableData");
// var waitlist = require("..data/waitlist");

// var tables = require("../data/tableData");
// var waitlist = require("../data/waitListData");

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "home.html"));
    });

    app.get("/tables", function (req, res) {
        res.sendFile(path.join(__dirname, "view.html"));
    });

    app.get("/api/tables", function (req, res) {
        res.json(tables);
    });

    app.get("/api/waitlist", function (req, res) {
        res.json(waitlist);
    });

    app.get("/reserve", function (req, res) {
        res.sendFile(path.join(__dirname, "make.html"));
    });

    app.post("/api/tables", function (req, res) {
        var newReservation = req.body;

    });
}