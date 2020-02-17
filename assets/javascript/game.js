// Logic
var redVal;
var blueVal;
var yellowVal;
var greenVal;

// Random number will be shown - pointGoal - between 19-120;
function randomNumberGoal() {
  return Math.floor(Math.random() * 102) + 19;
}

// Crystals will have a random value assigned to them, between 1-12
function randomNumberCrystal() {
  return Math.floor(Math.random() * 12) + 1;
}

function setCrystalValue() {
  redVal = randomNumberCrystal();
  blueVal = randomNumberCrystal();
  yellowVal = randomNumberCrystal();
  greenVal = randomNumberCrystal();
}

//Game restarts in either a win or a loss
function reset() {
  $(".pointGoal").html("<h1>" + randomNumberGoal() + "</h1>");
  setCrystalValue();
}

//When the player clicks on a crystal, it will add a specific amount of points to the total score
$(window).on("load", function() {
  reset();

  $(".crystals").on("click", function() {
    console.log("Clicked something");
    console.log("Value: " + $(this).data("image-type"));
    switch ($(this).data("image-type")) {
      case "red":
        console.log("Red Value: " + redVal);
        break;
      case "blue":
        console.log("Blue Value: " + blueVal);
        break;
      case "yellow":
        console.log("Yellow Value: " + yellowVal);
        break;
      case "green":
        console.log("Green Value: " + greenVal);
        break;
    }
  });
});

//If the total score matches the random number, the player wins, else if they go over they lose
