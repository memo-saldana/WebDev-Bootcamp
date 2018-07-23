var express = require("express"),
methodOverride = require("method-override"),
bodyParser = require("body-parser"),
mongoose = require("mongoose"),
expressSanitizer = require("express-sanitizer");
app = express();


//App config
mongoose.connect("mongodb://localhost:27017/blog_app", { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());	
app.use(methodOverride("_method"));

//Mongoose model config
var blogSchema = new mongoose.Schema({
	title:String,
	image:String,
	body:String,
	created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);

//RESTful routes

app.get("/", function(req,res) {
	res.redirect("/blogs");
})

//INDEX
app.get("/blogs", function(req,res) {
	Blog.find({},function(err,blogs) {
		if(err){
			console.log(err);
		} else {
			res.render("index", {blogs: blogs});
		}
	});	
});

// CREATE
app.post("/blogs", function(req,res) {

	req.body.blog.body = req.sanitize(req.body.blog.body);
	
	Blog.create(req.body.blog, function(err,newBlog) {
		if(err){
			console.log(err);
		} else {
			res.redirect("/blogs");
		}
	})
})

//NEW
app.get("/blogs/new",function(req,res) {
	res.render("new");
})

// SHOW
app.get("/blogs/:id", function(req,res) {
	Blog.findById(req.params.id,function(err,foundBlog) {
		if(err){
			res.redirect("/blogs");
		} else {
			res.render("show",{blog: foundBlog});
			}
	})
});

// EDIT

app.get("/blogs/:id/edit",function(req,res) {
	Blog.findById(req.params.id, function(err,foundBlog) {
		if(err){
			res.redirect('blogs');
		} else {
			res.render('edit',{blog: foundBlog});
		}
	})

});

// UPDATE
app.put("/blogs/:id",function(req,res) {
	req.body.blog.body = req.sanitize(req.body.blog.body);
	Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err,updatedBlog) {
		if(err){
			res.redirect("/blogs");
		} else {
			res.redirect("/blogs/" + req.params.id);
		}
	});
});

// DELETE
app.delete("/blogs/:id",function(req,res) {
	Blog.findByIdAndRemove(req.params.id, function(err) {
		if(err){
			res.redirect("/blogs");
		} else {
			res.redirect("/blogs");
		}
	})
})


app.listen("3000",function() {
	console.log("Blog App running on port 3000");
})