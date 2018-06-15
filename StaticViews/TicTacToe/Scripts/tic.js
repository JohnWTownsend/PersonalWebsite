$(document).ready(
    function () {
    //     c = document.getElementById("gameCanvas");
    //     ctx = c.getContext("2d");
    }
)


var board = [];
var turn = 0;
var xScore = 0;
var oScore = 0;

for (i = 0; i < 9 ; i++){
    board[i] = -1;
}

function getSpotType(spot) {
    return board[spot];
}

function updateSpotType(spot, type) {
    board[spot] = type;
}

function updateTurn() {
    turn++;
}

function checkTurn() {
    return turn % 2;
}

function addXScore() {
    xScore++;
    showYouWin("X");
    setTimeout(function(){visXScore(xScore)},1000);
}

function addOScore() {
    oScore++;
    showYouWin("O");
    setTimeout(function(){visOScore(oScore)},1000);
}

function checkIfWin() {
    console.log("You are in Check if I win...");
    if((board[0] == 0 && board[1] == 0 && board[2] == 0)
        || (board[0] == 0 && board[4] == 0 && board[8] == 0)
        || (board[0] == 0 && board[3] == 0 && board[6] == 0)
        || (board[1] == 0 && board[4] == 0 && board[7] == 0)
        || (board[2] == 0 && board[5] == 0 && board[8] == 0)
        || (board[2] == 0 && board[4] == 0 && board[6] == 0)
        || (board[3] == 0 && board[4] == 0 && board[5] == 0)
        || (board[6] == 0 && board[7] == 0 && board[8] == 0)){
        youWin(0);
        window.setTimeout(clearGrid, 1000);
    }
    else if ((board[0] == 1 && board[1] == 1 && board[2] == 1)
        || (board[0] == 1 && board[4] == 1 && board[8] == 1) 
        || (board[0] == 1 && board[3] == 1 && board[6] == 1) 
        || (board[1] == 1 && board[4] == 1 && board[7] == 1)
        || (board[2] == 1 && board[5] == 1 && board[8] == 1) 
        || (board[2] == 1 && board[4] == 1 && board[6] == 1) 
        || (board[3] == 1 && board[4] == 1 && board[5] == 1)
        || (board[6] == 1 && board[7] == 1 && board[8] == 1)){
        youWin(1);
        window.setTimeout(clearGrid, 1000);
    }
}