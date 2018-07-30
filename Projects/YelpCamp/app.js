var express = require("express"),
		app = express(),
		bodyParser = require("body-parser"),
		mongoose = require("mongoose"),
		Campground = require("./models/campground"),
		Comment = require("./models/comment")
		seedDB = require("./seeds");


mongoose.connect("mongodb://localhost:27017/yelp_camp", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));	
app.set("view engine","ejs");
app.use(express.static(__dirname + "/public"));

seedDB();

// Campground.create(
// 	{
// 		name: "Mountain Goat's Rest", 
// 		image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Gypsy_camp%2C_Bekonscot.JPG",
// 		description:"This is a mountain for a goat to rest in."
	
// 	}, function(err,campground) {
// 		if(err){
// 			console.log(err);
// 		} else {
// 			console.log("Created:");
// 			console.log(campground);
// 		}
// 	});


app.get("/",function(req,res) {
	res.render("landing");
});


//INDEX
app.get("/campgrounds",function(req,res) {

	Campground.find({},function(err,campgrounds) {
		if(err){
			console.log(err);
		} else {
			
			res.render("campgrounds/index",{campgrounds:campgrounds});
		}
	})
});

//CREATE
app.post("/campgrounds",function(req,res) {
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description;
	var newCamp = {name: name, image: image, description: desc};
	
	Campground.create(newCamp,function(err,newlyCreated) {
		if(err){
			console.log(err);
		} else {
			res.redirect("/campgrounds");
		}
	})
});

//NEW
app.get("/campgrounds/new",function(req,res) {
	res.render("campgrounds/new");
});

//SHOW
app.get("/campgrounds/:id",function(req,res) {
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCamp) {
		if(err){
			console.log(err);
		} else {
			console.log(foundCamp);
			res.render("campgrounds/show", {campground: foundCamp});
		}
	});
});	


// COMMENT ROUTES

//NEW
app.get("/campgrounds/:id/comments/new",function(req,res) {

	Campground.findById(req.params.id, function(err,campground) {
		if(err){
			console.log(err);
		} else {
			
			res.render("comments/new", {campground: campground});	
		}
	})
});
	

app.post("/campgrounds/:id/comments", function(req,res) {
	Campground.findById(req.params.id, function(err,campground) {
		if(err){
			console.log(err);
			res.render("/campgrounds");
		} else {
			console.log(req.body.comment);
			Comment.create(req.body.comment, function(err,comment) {
				if(err){
					console.log(err);
				} else {
					campground.comments.push(comment);
					campground.save();
					res.redirect("/campgrounds/" + campground._id);
				}
			})
			var text = req.body.text;

		}
	})
})

app.listen(3000,function() {
	console.log("YelpCamp started on port 3000");
});