var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/cat_app", { useNewUrlParser: true });

var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String,
});

var Cat = mongoose.model("Cat", catSchema);

// var george = new Cat({
// 	name: "Mrs Norris",
// 	age: 7,
// 	temperament: "Evil"
// });

// george.save(function(err,cat){	
// 	if(err){
// 		console.log("Something went wrong.");
// 	} else {
// 		console.log("Cat saved to db");
// 		console.log(cat);
// 	}
// });

Cat.create({
	name: "bug",
	age: 5,
	temperament: "prueba"
}, function(err, cat) {
	if (err) {
		console.log(err);
	} else {
		console.log("Success");
		console.log(cat);
	}
});

// Cat.find({},function(err,cats) {
// 	if(err){
// 		console.log("ERROR :(");
// 	} else {
// 		console.log("ALL THE CATS... ");
// 		console.log(cats);
// 	}
// })