var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

// play sound
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// Animate button press
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

// Create the next in sequence
function nextSequence() {
  // update h1 to show level
  level++;
  userClickedPattern = [];
  $("#level-title").text("Level " + level);

  // generate and assign next sequence
  var randomVariable = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomVariable];
  gamePattern.push(randomChosenColor);

  // display
  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColor);
}

// Game start

$(document).keypress(function (event) {
  if (!started) {
    started = true;
    nextSequence();
  }
});

// Detect button clicked

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      // check passed moving to next level
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    // display
    playSound("wrong");
    $("h1").text("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    // call start over
    startOver();
  }
}

function startOver() {
  gamePattern = [];
  level = 0;
  started = false;
}
