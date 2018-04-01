
var express = require("express");
var app = express();
var port = process.env.PORT || 4000;

app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendfile(__dirname + "/index.html");
});

app.get("/marriage-catering", function(req, res) {
  res.sendfile(__dirname + "/marriagecatering.html");
});

app.get("/birthday-party", function(req, res) {
  res.sendfile(__dirname + "/birthdayparty.html");
});

app.get("/engagement-party", function(req, res) {
  res.sendfile(__dirname + "/engagementparty.html");
});

app.get("/house-warming", function(req, res) {
  res.sendfile(__dirname + "/housewarming.html");
});

app.get("/valaikappu", function(req, res) {
  res.sendfile(__dirname + "/valaikappu.html");
});

app.get("/corporate-catering", function(req, res) {
  res.sendfile(__dirname + "/corporatecatering.html");
});

app.get("/traditional-food", function(req, res) {
  res.sendfile(__dirname + "/traditionalfood.html");
});

app.get("/photography-videography", function(req, res) {
  res.sendfile(__dirname + "/photography&videography.html");
});


app.listen(port, function() {
  console.log("server started at "+port);
});
