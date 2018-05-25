
var express = require("express");
var app = express();
var port = 4000;
// var port = process.env.PORT || 4000;

app.use(express.static("public"));

   // home page
app.get("/", function(req, res) {
  res.sendfile(__dirname + "/views/index.html");
});

 // services page
app.get("/marriage-catering", function(req, res) {
  res.sendfile(__dirname + "/views/services/marriagecatering.html");
});

app.get("/birthday-party", function(req, res) {
  res.sendfile(__dirname + "/views/services/birthdayparty.html");
});

app.get("/engagement-party", function(req, res) {
  res.sendfile(__dirname + "/views/services/engagementparty.html");
});

app.get("/house-warming", function(req, res) {
  res.sendfile(__dirname + "/views/services/housewarming.html");
});

app.get("/valaikappu", function(req, res) {
  res.sendfile(__dirname + "/views/services/valaikappu.html");
});

app.get("/corporate-catering", function(req, res) {
  res.sendfile(__dirname + "/views/services/corporatecatering.html");
});

app.get("/traditional-food", function(req, res) {
  res.sendfile(__dirname + "/views/services/traditionalfood.html");
});

app.get("/photography-videography", function(req, res) {
  res.sendfile(__dirname + "/views/services/photography&videography.html");
});

app.get("/platinum", function(req, res) {
  res.sendfile(__dirname + "/views/services/platinum.html");
});

app.get("/gold", function(req, res) {
  res.sendfile(__dirname + "/views/services/gold.html");
});

app.get("/silver", function(req, res) {
  res.sendfile(__dirname + "/views/services/silver.html");
});

   // gallery pages
app.get("/sweets", function(req, res) {
  res.sendfile(__dirname + "/views/gallery/sweet.html");
});

app.get("/fruits", function(req, res) {
  res.sendfile(__dirname + "/views/gallery/fruit.html");
});

app.get("/juices", function(req, res) {
  res.sendfile(__dirname + "/views/gallery/juice.html");
});

app.get("/news", function(req, res) {
  res.sendfile(__dirname + "/views/gallery/news.html");
});

app.get("/foods", function(req, res) {
  res.sendfile(__dirname + "/views/gallery/food.html");
});

app.get("/snacks", function(req, res) {
  res.sendfile(__dirname + "/views/gallery/snack.html");
});

app.listen(port, function() {
  console.log("server started at "+port);
});
