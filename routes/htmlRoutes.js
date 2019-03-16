// var tableData = require("..data/tableData");
// var waitlist = require("..data/waitlist");
var path = require("path")

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../home.html"));
    });

    app.get("/tables", function (req, res) {
        res.sendFile(path.join(__dirname, "../view.html"));
    });

    app.get("/reserve", function (req, res) {
        res.sendFile(path.join(__dirname, "../make.html"));
    });
}