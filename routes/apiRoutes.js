var tables = require("../data/tableData.js");
var waitlist = require("../data/waitListData.js");

console.log("api routes tables:", tables);
console.log("api routes waitlist:", waitlist);

module.exports = function (app) {

    app.get("/api/tables", function (req, res) {
        console.log("in /api/tables route", tables);
        res.json(tables);
    });

    app.get("/api/waitlist", function (req, res) {
        res.json(waitlist);
    });

    app.post("/api/tables", function (req, res) {

        var reservation = req.body;
        console.log("Posty req:", req);
        console.log("reservation:", reservation);
        tables.push(reservation);
        res.json(reservation);
    });
}