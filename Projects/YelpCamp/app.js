var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));	
app.set("view engine","ejs");

var campgrounds = [
	{name: "Salmon Creek", image: "https://cdn.pixabay.com/photo/2017/08/06/02/32/camp-2587926_960_720.jpg"},
	{name: "Granite Hill", image: "https://c1.staticflickr.com/6/5191/29837675992_340d6971c0_b.jpg"},
	{name: "Mountain Goat's Rest", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Gypsy_camp%2C_Bekonscot.JPG" }
]



app.get("/",function(req,res) {
	res.render("landing");
});

app.get("/campgrounds",function(req,res) {
	res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds",function(req,res) {
	var name = req.body.name;
	var image = req.body.image;
	var newCamp = {name: name, image: image};
	campgrounds.push(newCamp);

	res.redirect("/campgrounds");
});

app.get("/campgrounds/new",function(req,res) {
	res.render("new");
});

app.listen(3000,function() {
	console.log("YelpCamp started on port 3000");
});