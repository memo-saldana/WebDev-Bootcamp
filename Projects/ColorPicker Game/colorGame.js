var numSquares = 6;
var colors = [];	
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {

	setupModeButtons();
	setupColorSquares();

	reset();
	
}

function setupModeButtons() {
	// mode buttons event listeners
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click",function() {
			for (var i = 0; i < modeButtons.length; i++) {
				modeButtons[i].classList.remove("selected");
			}
			this.classList.add("selected")

			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupColorSquares() {
		for (var i = 0; i < squares.length; i++) {

		//Add click listeners to squares
		squares[i].addEventListener("click", function() {
			//compare clicked color to correct color;
			var clickedColor = this.style.backgroundColor;
			
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetBtn.textContent = "Play Again?"
			}
			else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!"
				
			}
		});
	}
}

resetBtn.addEventListener("click", function() {
	reset();
});

function reset() {
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	h1.style.backgroundColor = "steelblue";
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";		
		}

	}
	resetBtn.textContent = "New Colors"
}

function changeColors(color) {
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		//change color of each square
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// return array
	var arr = []

	// repeat num times	
	for (var i = 0; i < num; i++) {
		arr.push(randomColor())
	}

	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" +r+ ", " +g+ ", " +b+ ")";
}



// easyBtn.addEventListener("click", function() {
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	h1.style.backgroundColor = "steelblue";
// 	for (var i = 0; i < squares.length; i++) {
// 		if (colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}

// })
// hardBtn.addEventListener("click", function() {
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numSquares = 6
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	h1.style.backgroundColor = "steelblue";
// 	for (var i = 0; i < squares.length; i++) {
// 		if (colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];
// 			squares[i].style.display = "block";
// 		}
// 	}
// })