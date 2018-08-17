//set a random target number(between 35 and 75) 
var targetNumber = Math.round(Math.random()*(120-19+1)+19);
$(".target").text(targetNumber);

var images =["crystal-1.jpg", "crystal-2.jpg", "crystal-3.jpg", "crystal-4.jpg", "crystal-5.jpg", "crystal-6.jpg", "crystal-7.jpg", "crystal-8.jpg", "crystal-9.jpg", "crystal-10.jpg"];

var score = 0;
var wins = 0;
$(".wins").text(wins);
var losses = 0;
$(".losses").text(losses);
var crystalValues =[];
var assignedValue;


	for (var i = 0; i<4;i++) {
	//a. create a random number generator (for crystal values)
	crystalValues.push(Math.round(Math.random()*(12-1+1)+1));
	console.log(crystalValues);
	//b. create an image (using jquery) on each loop
	var crsytalImage = $("<img>");
	//c. set the css attribute (src & class) on the image
	crsytalImage.attr("src", "assets/images/"+ images[Math.floor(Math.random() * images.length)] +"");
	crsytalImage.addClass("crystal-image");
	//d. assign the crystal value to the image
	crsytalImage.attr("data-assignedvalue", crystalValues[i]);
	//e. append the image to the div
	$("#allCrystals").append(crsytalImage);
}

//5. create an onclick function (attached to image)

$(".crystal-image").on("click", function() {
	console.log("you clicked me");
	//a. create a new variable (crystal value) and select it's value by referencing the "this" data-attribute generated in the earlier for loop
	assignedValue = ($(this).attr("data-assignedvalue"));
	console.log (assignedValue);
	//b. turn the crytal value form a string into an interger (parseInt)
	assignedValue = parseInt(assignedValue);
	//c. add the value to the score
	score += assignedValue;
	$(".score").text(score);
	console.log(score);
	
	//6. create an if/else statement
	//a. if the score = target, increase wins and reset the game
	if (score === targetNumber) {
		wins++;
		$(".wins").text(wins);
		resetGame();
		//b. if the score > target, increase losses and reset the game
	} else if (score > targetNumber) {
		losses++;
		$(".losses").text(losses);
		resetGame();
		}

		//7. create a reset game function
});

//a. reset all but wins and losses
function resetGame() {
	score = 0;
	$(".score").text(score);
	targetNumber = Math.round(Math.random()*(120-19+1)+19);
	$(".target").text(targetNumber);
	}

	
