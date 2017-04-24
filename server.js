// server.js
var express = require("express");
var app = express();
var path = require("path");
var morgan = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var port = process.env.PORT || 5000;

app.use(morgan("dev"));
app.use(bodyParser.json());

// When we get to doing the frontend, we'll put it in a folder called
// 'public' and we'll let express serve up the static files for us.
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect("mongodb://localhost/todos", function (err) {
    if (err) throw err;
    console.log("Successfully connected to the database");
});

app.get("/", function (req, res) {
    res.send("It's working");
});

app.listen(port, function () {
    console.log(`Server listening on port ${port}`);
});