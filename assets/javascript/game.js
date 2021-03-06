var redVal;
var blueVal;
var yellowVal;
var greenVal;

var currentScore = 0;
var goal;

var wins = 0;
var losses = 0;

// Random number will be shown - pointGoal - between 19-120;
function randomNumberGoal() {
  return Math.floor(Math.random() * 102) + 19;
}

// Crystals will have a random value assigned to them, between 1-12
function randomNumberCrystal() {
  var numArray = [];
  while (numArray.length !== 4) {
    var tempNum = Math.floor(Math.random() * 12) + 1;
    if (!numArray.includes(tempNum)) numArray.push(tempNum);
  }
  setCrystalValues(numArray);
}

function setCrystalValues(numArray) {
  redVal = numArray[0];
  blueVal = numArray[1];
  yellowVal = numArray[2];
  greenVal = numArray[3];
}

//Game restarts in either a win or a loss
function reset() {
  goal = randomNumberGoal();
  currentScore = 0;
  $(".pointGoal").html("<h1>" + goal + "</h1>");
  $("#wins").text("Wins: " + wins);
  $("#losses").text("Losses: " + losses);
  $(".totalScore").html("<h1>" + currentScore + "</h1>");
  randomNumberCrystal();
}

function updateGame(crystalValue) {
  currentScore += crystalValue;
  if (currentScore > goal) {
    losses++;
    reset();
  } else if (currentScore === goal) {
    wins++;
    reset();
  } else {
    $(".totalScore").html("<h1>" + currentScore + "</h1>");
  }
}

//When the player clicks on a crystal, it will add a specific amount of points to the total score
$(window).on("load", function() {
  reset();

  $(".crystals").on("click", function() {
    switch ($(this).data("image-type")) {
      case "red":
        updateGame(redVal);
        break;
      case "blue":
        updateGame(blueVal);
        break;
      case "yellow":
        updateGame(yellowVal);
        break;
      case "green":
        updateGame(greenVal);
        break;
    }
  });
});
