var express = require("express");
var router = express.Router();
var Campground = require("../models/campground")

//INDEX
router.get("/",function(req,res) {

	Campground.find({},function(err,campgrounds) {
		if(err){
			console.log(err);
		} else {
			
			res.render("campgrounds/index",{campgrounds:campgrounds});
		}
	})
});

//CREATE
router.post("/",function(req,res) {
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description;
	var newCamp = {name: name, image: image, description: desc};
	
	Campground.create(newCamp,function(err,newlyCreated) {
		if(err){
			console.log(err);
		} else {
			res.redirect("/");
		}
	})
});

//NEW
router.get("/new",function(req,res) {
	res.render("campgrounds/new");
});

//SHOW
router.get("/:id",function(req,res) {
	Campground.findById(req.params.id).populate("comments").exec(function(err, foundCamp) {
		if(err){
			console.log(err);
		} else {
			console.log(foundCamp);
			res.render("campgrounds/show", {campground: foundCamp});
		}
	});
});	

function isLoggedIn(req,res,next) {
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login")
}


module.exports = router;