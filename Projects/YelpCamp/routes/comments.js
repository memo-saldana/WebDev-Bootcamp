var express = require("express");
var router = express.Router({mergeParams:true});
var Campground = require("../models/campground");
var Comment = require("../models/comment");

// COMMENT ROUTES

//NEW
router.get("/new",isLoggedIn, function(req,res) {

	Campground.findById(req.params.id, function(err,campground) {
		if(err){
			console.log(err);
		} else {
			
			res.render("comments/new", {campground: campground});	
		}
	})
});
	

router.post("/",isLoggedIn, function(req,res) {
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

// middleware
function isLoggedIn(req,res,next) {
	if(req.isAuthenticated()){
		return next();
	}
	res.redirect("/login")
}

module.exports = router;