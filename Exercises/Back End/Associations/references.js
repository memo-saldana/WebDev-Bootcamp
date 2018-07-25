var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog_demo", { useNewUrlParser: true });


// POST - title, content
var postSchema = new mongoose.Schema({
	title: String,
	content: String
});

var Post = mongoose.model("Post", postSchema);


// USER - email, name
var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Post"
	}]
});

var User = mongoose.model("User", userSchema);
 
User.remove({}, function() {
    Post.remove({}, function() {
        User.create({
            email: "bob@gmail.com",
            name: "Bob Belcher"
        }, function(err, user) {
            if(err) {
                console.log(err);
            } else {
                User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, foundUser){
                    if(err) {
                        console.log(err);
                    } else {
                        console.log(foundUser);
                        Post.create({
                          title: "How to cook the best burger pt. 2",
                          content: "blah blah blah blah blah"
                        }, function(err, post){
                            if(err) {
                                console.log(err);
                            } else {
                                User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
                                    if(err){
                                        console.log(err);
                                    } else {
                                        foundUser.posts.push(post._id);
                                        foundUser.save(function(err, data){
                                            if(err){
                                                console.log(err);
                                            } else {
                                                console.log(data);
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
 
    });
});


// Post.create({
// 	title: "Burgers and more!",
// 	content: " asdfasdfas asf"
// },function(err,post) {
// 	if(err){
// 		console.log(err);
// 	} else {
// 		User.findOne({email:"bob.gmail.com"}, function(err,foundUser) {
// 			if(err){
// 				console.log(err);
// 			} else {
// 				foundUser.posts.push(post);
// 				foundUser.save( function(err,data) {
// 					if(err){
// 						console.log(err);
// 					} else {
// 						console.log(data);
// 					}
// 				})
// 			}
// 		});
// 	}
// });




// User.create({
// 	email: "bob@gmail.com",
// 	name: "Bob Belcher"
// });	