//const buttons = document.querySelectorAll(".play"); 

function getWinner(playerMove, computerMove) {
    if (playerMove === computerMove){
        games++;
        drawCount++;
        return 0;}
    else if (playerMove === "rock" && computerMove === "paper"){
        games++;
        loseCount++;
        return -1;}
    else if (playerMove === "rock" && computerMove === "scissor"){
        games++;
        winCount++;
        return 1;}
    else if (playerMove === "paper" && computerMove === "rock"){
        games++;
        winCount++;
        return 1;}
    else if (playerMove === "paper" && computerMove === "scissor"){
        games++;
        loseCount++;
        return -1;}
    else if (playerMove === "scissor" && computerMove === "rock"){
        games++;
        loseCount++;
        return -1;}
    else if (playerMove === "scissor" && computerMove === "paper"){
        games++;
        winCount++;
        return 1;}
    else {
        return "catastrophic failure";}
}


//do {
//var input = prompt("make your choice", "rock, paper or scissor");
//if (input != null && ((input==="rock")||(input==="paper")||(input==="scissor"))) {
//    let number = Math.floor(Math.random() * 3);
//    let move = moves[number];
//    let result = getWinner(input, move);
//    alert(result);
//    continueGame = confirm("do you want to play again?");
//}
//} while (continueGame)


if (input != null && ((input==="rock")||(input==="paper")||(input==="scissor"))

//for (let i = 0; i < resetButton.length; i++) {
//    resetButton[i].addEventListener("on click", resetGame);}

//resetButton.addEventListener('click', function(){
//    resetGame();
//})

//event listener for buttons - (on click, start playGame function)
//for (let i = 0; i < buttons.length; i++) {
//    buttons[i].addEventListener("click", playGame);}


//function resetGame() {
//    result = "#";
//    games = 0;
//    winCount = 0;
//    loseCount = 0;
//    drawCount = 0;
//    winStreak = 0;
//
//    showResult.innerHTML = "Result " + result;
//    totalPlayed.innerHTML = "Round " + games;
//    totalWins.innerHTML = "Wins " + winCount;
//    totalLosses.innerHTML = "Losses " + loseCount;
//    totalDrawn.innerHTML = "Drawn " + drawCount;
//    totalWinStreak.innerHTML = "Wins in a row " + winStreak;
//}

            <!--<div class="item3">
            <button class="playrock" type="button">rock</button>
            <button class="play" type="button">paper</button>
            <button class="play" type="button">scissor</button>
            
            </div>-->