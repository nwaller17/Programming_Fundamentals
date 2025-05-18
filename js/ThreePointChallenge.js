function ThreePointChallenge() {
//Three Point Challenge Game
//Enter your shooting scores, and see how they stack up to the winner of the
//2 previous NBA 3 point contests, Damian Lillard! 
//Enter "2023" or "2024" when prompted for a contest year to compare your score to 
//the finalists of that year, or if you don't care for the NBA, enter a random number
//to compare your scores to your favorite Looney Tunes characters. Entering "0" for 
//the contest year will end the game, returning a list of your previous scores, and your
//shooting percentage.
//Each normal ball make is worth 1 point, money balls are worth 2, and starry balls 
//are worth 3, per NBA rules.

//Have fun playing! -Nathan Waller
//

var contestantAbove = ""
var contestantBelow = ""
var result = ""


while (contestYear !== 0) {
var contestYear = Number(prompt("Which contest year would you like to compare your scores to? (Enter 0 to quit)"));
var normalBalls = Number(prompt("How many normal balls did you make? (Max 16)")); 
var moneyBalls = Number(prompt("How many money balls did you make? (Max 9)"));
var starryBalls = Number(prompt("How many starry balls did you make? (Max 2)"));
var userScore = (normalBalls + (2 * moneyBalls) + (3 * starryBalls));
var percentage = ((normalBalls + moneyBalls + starryBalls) / 27) * 100;
var roundedPercentage = percentage.toFixed(2);
// from https://www.w3schools.com/howto/howto_js_format_number_dec.asp

  if (contestYear === 2023) {
    if (userScore < 17) {
    contestantAbove = "Tyrese Haliburton";
	contestantBelow = "nobody";
	result = "Try again!";
  } else if (userScore >= 17 && userScore < 25) {
    contestantAbove = "Buddy Hield";
	contestantBelow = "Tyrese Haliburton";
	result = "Keep trying!";
  } else if (userScore >= 25 && userScore < 26) {
    contestantAbove = "Damian Lillard";
	contestantBelow = "Buddy Hield";
	result = "So close!";
  } else {
    contestantAbove = "nobody";
	contestantBelow = "Damian Lillard";
	result = "Congratulations!";
  }
} else if (contestYear === 2024) {
    if (userScore < 22) {
	contestantAbove = "Karl Anthony-Towns";
	contestantBelow = "nobody";
	result = "Try again!";
  } else if (userScore >= 22 && userScore < 24) {
    contestantAbove = "Trae Young";
	contestantBelow = "Karl Anthony-Towns";
	result = "Keep trying!";
  } else if (userScore >= 24 && userScore < 26) {
    contestantAbove = "Damian Lillard";
	contestantBelow = "Trae Young";
	result = "So close!"; 
  } else {
    contestantAbove = "nobody";
	contestantBelow = "Damian Lillard";
	result = "Congratulations!";
  }
} else {
    if (userScore < 1) {
	contestantAbove = "everybody ever";
	contestantBelow = "nobody ever";
	result = "Thanks for playing!";
  } else if (userScore >= 1 && userScore < 20) {
    contestantAbove = "Bugs Bunny";
	contestantBelow = "Daffy Duck";
	result = "Thanks for playing!";
  } else {
    contestantAbove = "Porky Pig";
	contestantBelow = "Bugs Bunny";
	result = "Thanks for playing!";
  }
}


    document.write("You scored " + userScore + " points, which is more than " + contestantBelow + " and less than " + contestantAbove + ". " + "You shot " + roundedPercentage + "% from three. " + result + "<br>");
  }
}
ThreePointChallenge();