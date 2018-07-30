var express = require("express"),
		mongoose = require("mongoose"),
		passport = require("passport"),
		bodyParser = require("body-parser"),
		User = require("./models/user"),
		LocalStrategy = require("passport-local"),
		passportLocalMongoose = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost:27017/auth_demo_app",{useNewUrlParser: true});

var app = express();

app.use(require("express-session")({
	secret: "Rusty is the best and cutest dog in the world",
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.set("view engine", "ejs");

app.get("/", function(req,res) {
	res.render("home");
});

app.get("/secret",function(req,res) {
	res.render("secret");
})

app.listen(3000, function(req,res) {
	console.log("Server started...");
});
