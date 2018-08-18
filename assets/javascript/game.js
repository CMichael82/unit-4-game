//Global Variables//
var targetNumber = Math.round(Math.random() * (120 - 19 + 1) + 19);
$(".target").text(targetNumber);

var images = ["crystal-1.jpg", "crystal-2.jpg", "crystal-3.jpg", "crystal-4.jpg", "crystal-5.jpg", "crystal-6.jpg", "crystal-7.jpg", "crystal-8.jpg", "crystal-9.jpg", "crystal-10.jpg"];

var score = 0;
var wins = 0;
$(".wins").text(wins);
var losses = 0;
$(".losses").text(losses);
var crystalValues = [];
var crsytalImage;

//Functions//

//Function to create crystal images (random selection) and set random values//
function createCrystals() {
	for (var i = 0; i < 4; i++) {
		crystalValues.push(Math.round(Math.random() * (12 - 1 + 1)+1));
		console.log(crystalValues);
		crsytalImage = $("<img>");
		crsytalImage.attr("src", "assets/images/" + images[Math.floor(Math.random() * images.length)] + "");
		crsytalImage.addClass("crystal-image");
		crsytalImage.attr("data-assignedvalue", crystalValues[i]);
		$("#allCrystals").append(crsytalImage);
	}
}

//Function to run the game - assigning values to images and checking for win//
function startGame() {
	$(".crystal-image").on("click", function () {
		console.log("you clicked me");
		var assignedValue = ($(this).attr("data-assignedvalue"));
		console.log(assignedValue);
		assignedValue = parseInt(assignedValue);
		score += assignedValue;
		$(".score").text(score);
		console.log(score);
		checkWin();
	});
}

//Function to run if/then statment to determine a win or loss//
function checkWin() {
	if (score === targetNumber) {
		wins++;
		$(".wins").text(wins);
		resetGame();
	} else if (score > targetNumber) {
		losses++;
		$(".losses").text(losses);
		resetGame();
	}
}

//Function to reset the game and play again without refreshing the page//
function resetGame() {
	score = 0;
	$(".score").text(score);
	targetNumber = Math.round(Math.random() * (120 - 19 + 1) + 19);
	$(".target").text(targetNumber);
	$("#allCrystals").empty();
	crystalValues = [];
	createCrystals();
	startGame();
}

//Calling functions to run//
createCrystals();
startGame();

