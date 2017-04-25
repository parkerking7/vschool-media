// server.js
var express = require("express");
var app = express();
var path = require("path");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var config = require("./config");
var expressJwt = require("express-jwt");
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api", expressJwt({secret: config.secret}));

app.use("/api/company", require("./routes/compRoutes"));
// When we get to doing the frontend, we'll put it in a folder called
// 'public' and we'll let express serve up the static files for us.
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect("mongodb://localhost/todos", function (err) {
    if (err) throw err;
    console.log("Successfully connected to the database");
});

app.use("/auth", require("./routes/authRoutes"));

app.listen(port, function () {
    console.log(`Server listening on port ${port}`);
});