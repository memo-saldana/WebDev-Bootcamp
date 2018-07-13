var express = require("express"),
bodyParser = require("body-parser"),
mongoose = require("mongoose"),
app = express();

//App config
mongoose.connect("mongodb://localhost:27017/blog_app", { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));	

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


app.get("/blogs", function(req,res) {
	Blog.find({},function(err,blogs) {
		if(err){
			console.log(err);
		} else {
			res.render("index", {blogs: blogs});
		}
	});	
});

app.listen("3000",function() {
	console.log("Blog App running on port 3000");
})