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
	
// CREATE
router.post("/",isLoggedIn, function(req,res) {
	Campground.findById(req.params.id, function(err,campground) {
		if(err){
			console.log(err);
			res.render("/campgrounds");
		} else {
			Comment.create(req.body.comment, function(err,comment) {
				if(err){
					console.log(err);
				} else {
					comment.author.id = req.user._id;
					comment.author.username = req.user.username;
					comment.save();
					campground.comments.push(comment);
					campground.save();
					console.log(comment)
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