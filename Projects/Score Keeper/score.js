var p1Btn = document.querySelector("#p1"); 
var p2Btn = document.querySelector("#p2"); 
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;
var winningScore = 5;
var gameOver = false;
var resetBtn = document.querySelector("#reset");
var numInput = document.querySelector("#input");
var winDisplay = document.querySelector("p span");


p1Btn.addEventListener("click", function() {
	if(!gameOver){
		p1Score++;

		updateUI();
		if(p1Score===winningScore){
			gameOver = true;
			p1Display.classList.add("winner");
		}


	}

});

p2Btn.addEventListener("click", function() {
	if(!gameOver){
		p2Score++;

		if(p2Score===winningScore){
			gameOver = true;
			p2Display.classList.add("winner");
		}
		updateUI()
	}

});


resetBtn.addEventListener("click", function () {
	
	reset();

});

numInput.addEventListener("change",function () {
	winDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();

});

function reset() {
	p1Score = 0;
	p2Score = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	updateUI();
	gameOver = false;

}

function updateUI(){
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
}

