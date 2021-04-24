let playerMove = "#";
let computerMove = "#";
var moves = ["rock", "paper", "scissor"];
var games = 0;
var winCount = 0;
var loseCount = 0;
var drawCount = 0;
var continueGame = false; 


for ( let i = 0 ; i < buttons.length ; i++){
buttons[i].addEventListener('click', playGame);


function getWinner(playerMove, computerMove) {
    if (playerMove === computerMove){
        games++;
        drawCount++;
        return 0;}

    if (playerMove === "rock"){
        if (computerMove === "paper"){
            games++;
            loseCount++;
            return -1; 
        } else {
            games++;
            winCount++;
            return 1;}}

    if (playerMove === "paper"){ 
        if (computerMove === "rock"){
            games++;
            winCount++;
            return 1;
        } else {
            games++;
            loseCount++;
            return -1;}}
    
    if (playerMove === "scissor"){
        if (computerMove === "rock"){
            games++;
            loseCount++;
            return -1;}
        } else {
            games++;
            winCount++;
            return 1;}}


do {
var input = prompt("make your choice", "rock, paper or scissor");
if (input != null && ((input==="rock")||(input==="paper")||(input==="scissor"))) {
    let number = Math.floor(Math.random() * 3);
    let move = moves[number];
    let result = getWinner(input, move);
    alert(result);
    continueGame = confirm("do you want to play again?");
}

} while (continueGame);
