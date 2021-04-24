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