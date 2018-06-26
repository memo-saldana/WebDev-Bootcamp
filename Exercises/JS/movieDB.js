var movies = [

{
	name: "Han Solo",
	rating: 4,
	seen: true,
},

{
	name: "The Incredibles 2",
	rating: 5,
	seen: true,

},

{
	name: "Frozen",
	rating: 3,
	seen: false,

},

{
	name: "Jurassic World 2",
	rating: 4.5,
	seen: true,

}];

for(var i=0; i<movies.length; i++) {
	if(movies[i].seen) {
		console.log("You have watched \"" + movies[i].name + "\" - " +  movies[i].rating + " stars.");
	}
	else {
		console.log("You have not watched \"" + movies[i].name + "\" - " + movies[i].rating + " stars.");

	}
}