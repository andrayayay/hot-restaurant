var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [{
    Name: "Josh",
    phoneNumber: 343,
    Email: "joshua.guerra21",
    customerID: 34234,
}];

var waitlist = [{
    Name: "Josh223",
    phoneNumber: 343,
    Email: "joshua.guerra21",
    customerID: 34234,
}]




app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });
  
app.get("/api/tables", function(req, res) {
    res.json(tables);
  });

app.get("/api/waitlist", function(req, res) {
    res.json(waitlist);
  });

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
  });

 app.post("/api/tables", function(req, res) {
     var newTable = req.body;

 }







app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  