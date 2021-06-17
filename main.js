//dom elements
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

const showResult = document.querySelector(".result");
const totalPlayed = document.querySelector(".rounds");
const totalWins = document.querySelector(".wins");
const totalLosses = document.querySelector(".losses");
const totalDrawn = document.querySelector(".draws");
const totalWinStreak = document.querySelector(".streak");

const fxDiv = document.querySelector(".fx");

//global variables
let playerMove = "#";
let computerMove = "#";
let result = "#";
var moves = ["rock", "paper", "scissor"];
var games = 0;
var winCount = 0;
var loseCount = 0;
var drawCount = 0;
let winStreak = 0;

//takes player choice and randomised computer move to work out outcome - logic
function getWinner(playerMove, computerMove) {
    if (playerMove === computerMove) {
        games++;
        drawCount++;
        result = "draw";
        return 0;
    }

    if (playerMove === "rock") {
        if (computerMove === "scissor") {
            games++;
            winCount++;
            result = "win";
            winStreak++;
            return 1;
        } else {
            games++;
            loseCount++;
            result = "lose";
            winStreak = 0;
            return -1;
        }
    }

    if (playerMove === "paper") {
        if (computerMove === "rock") {
            games++;
            winCount++;
            result = "win";
            winStreak++;
            return 1;
        } else {
            games++;
            loseCount++;
            result = "lose";
            winStreak = 0;
            return -1;
        }
    }

    if (playerMove === "scissor") {
        if (computerMove === "paper") {
            games++;
            winCount++;
            result = "win";
            winStreak++;
            return 1;
        }
    } else {
        games++;
        loseCount++;
        result = "lose";
        winStreak = 0;
        return -1;
    }
}

//event listeners for buttons - inputs player's choice
setTimeout(() => {
    rock_div.addEventListener("click", function () {
        playGame("rock");
    });
}, 500);

setTimeout(() => {
    paper_div.addEventListener("click", function () {
        playGame("paper");
    });
}, 500);

setTimeout(() => {
    scissor_div.addEventListener("click", function () {
        playGame("scissor");
    });
}, 500);

//global variables - forced outside playGame() as these are called by handAnimation()
let input = "";
let move = "";

//takes input and randomises computer move. keeps count of wins, losses and times drawn
function playGame(e) {
    input = e;
    let number = Math.floor(Math.random() * 3);
    move = moves[number];
    console.log(input + "&" + move);
    getWinner(input, move);
    handAnimation();
    //used timeout to sync scoreboard with animation
    setTimeout(() => {
        showResult.innerHTML = result;
        totalPlayed.innerHTML = "Round " + games;
        totalWins.innerHTML = winCount;
        totalLosses.innerHTML = loseCount;
        totalDrawn.innerHTML = "Draws " + drawCount;
        if (winStreak > 1) {
            totalWinStreak.innerHTML =
                "Win Streak &#128293;" + winStreak + "&#128293;";
        } else if ((winStreak = 1)) {
            totalWinStreak.innerHTML = "Win Streak " + winStreak;
        } else {
            totalWinStreak.innerHTML = "Win Streak";
        }
    }, 800);
}

//creates new elements temporarily - timeout and removals
function handAnimation() {
    var bg = document.createElement("img");
    bg.setAttribute("id", "bg");
    bg.src = "./images/bg.png";
    fxDiv.appendChild(bg);
    setTimeout(() => {
        bg.remove();
    }, 850);

    var leftHand = document.createElement("img");
    leftHand.setAttribute("id", "leftHand");
    leftHand.src = `./images/${input}-small.png`;
    fxDiv.appendChild(leftHand);
    setTimeout(() => {
        leftHand.remove();
    }, 800);

    var rightHand = document.createElement("img");
    rightHand.setAttribute("id", "rightHand");
    rightHand.src = `./images/${move}-small.png`;
    fxDiv.appendChild(rightHand);
    setTimeout(() => {
        rightHand.remove();
    }, 800);

    setTimeout(() => {
        var fxgif = document.createElement("img");
        fxgif.setAttribute("id", "gif");
        fxgif.src = "./images/fx.gif";
        fxDiv.appendChild(fxgif);
        setTimeout(() => {
            fxgif.remove();
        }, 430);
    }, 800);
}
