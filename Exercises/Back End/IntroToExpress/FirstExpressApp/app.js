var express = require("express");
var app = express();

// "/" => "Hi there"

app.get("/", function(req,res) {
  res.send("Hi there!");
});

// "/bye" => "Goodbye!"

app.get("/bye", function(req,res) {
  res.send("Goodbye!");
});

// "/dog" => "MEOW!"

app.get("/dog", function(req, res) {
  res.send("MEOW!");
});

app.get("/r/:subredditName", function(req, res) {
  console.log(req.params);
  var subReddit = req.params.subredditName;
  res.send("Welcome to the " + subReddit + " subreddit!");
});

app.get("/r/:subreddit/comments/:id/:title", function(req, res) {
  console.log(req.params);
  res.send("Welcome to the comments page!");
});

app.get("*", function(req, res) {
  res.send("YOU ARE A STAR!");
});

// Listening
app.listen(process.env.PORT,process.env.IP, function() {
  console.log("Server has started!!");
});


