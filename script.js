let successMessage = "Victory";
let defeatMessage = "Crushing Defeat";
let tieMessage = "Tie";
let moveList = ["Rock", "Paper", "Scissors"];

let playerWinsCount = 0;
let computerWinsCount = 0;

function initializeGame() {
buttons.forEach((button) => {
button.addEventListener("click", playRound);
});
}

function endGame() {
buttons.forEach((button) => {
button.removeEventListener("click", playRound);
});
}

function getRandomMove() {
return Math.floor(Math.random() * 3);
}

function playRound(event) {
let playerMove = event.target.textContent;
let computerMove = moveList[getRandomMove()];

let result = getResult(playerMove, computerMove);

updateMoveDisplay(playerMove, computerMove);

if (result === "win") {
statusDisplay.textContent = successMessage;
} else if (result === "lose") {
statusDisplay.textContent = defeatMessage;
} else {
statusDisplay.textContent = tieMessage;
}
}

function getResult(playerMove, computerMove) {
if (
(playerMove === " Rock" && computerMove === " Scissors") ||
(playerMove === " Paper" && computerMove === " Rock") ||
(playerMove === " Scissors" && computerMove === " Paper")
) {
return "win";
} else if (playerMove === computerMove) {
return "tie";
} else {
return "lose";
}
}

function updateMoveDisplay(playerMove, computerMove) {
    moveDisplays[0].textContent = `Player move was ${playerMove}`;
    moveDisplays[1].textContent = `Computer move was ${computerMove}`;
  }

let statusDisplay = document.querySelector("#status-head");
let moveDisplays = document.querySelectorAll(".move-display h2");
let buttons = document.querySelectorAll("button");

statusDisplay.textContent = "Choose Your Move";

initializeGame();