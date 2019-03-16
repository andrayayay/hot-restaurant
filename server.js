var express = require("express");
var path = require("path");
// require("routes")(app);
// require("../routes/apiRoutes")(app);
var app = express();
var PORT = 3000;

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});