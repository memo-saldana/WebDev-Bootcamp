var secretNum = 7;

var guess = prompt("Guess a number.");


if(Number(guess) === secretNum) {
	alert ("Correct!");
}
else if(Number(guess)>secretNum){
	alert ("Too high. Guess again.");
}
else {
	alert ("Too low. Guess again.");
}
