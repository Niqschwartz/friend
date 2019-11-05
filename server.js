const express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var reservation = [
    {
        routeName: "",
        name: "",
        phone: "",
        email: "",
        id: "",
    }
]

require("./app/routing/htmlRoutes")(app);




app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  console.log("Server listening on: http://localhost:" + PORT);








