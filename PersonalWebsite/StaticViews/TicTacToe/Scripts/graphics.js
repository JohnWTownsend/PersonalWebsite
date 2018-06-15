
$(document).ready(function () {

        x = document.getElementById("XS");
        xtx = x.getContext("2d");
        o = document.getElementById("OS");
        otx = o.getContext("2d");
        visXScore(0);
        visOScore(0);

        $('.boardElem').width( $('#GameBoard').width() / 3.5  + "px");
        $('.boardElem').height( $('#GameBoard').width() / 3.5  + "px");
        $('.scoreElem').height( $('#OSdiv').width() / 3.5  + "px");
        $('.scoreElem').height( $('#OSdiv').width() / 3.5  + "px");

        $(window).on("resize",() =>{
            $('.boardElem').width( $('#GameBoard').width() / 3.5  + "px");
            $('.boardElem').height( $('#GameBoard').width() / 3.5  + "px");
            $('.scoreElem').height( $('#OSdiv').width() / 3.5  + "px");
            $('.scoreElem').height( $('#OSdiv').width() / 3.5  + "px");

        });
});

var alreadyWon = 0;

function updateSpot(spot) {
    var imgx = document.getElementById("imagex");
    var imgo = document.getElementById("imageo");
    var img;

    if(getSpotType(spot) == -1){
        img = checkTurn() == 0 ? imgx : imgo; 

        let canvas = document.getElementById(`${spot + 1}`);
        let ctx = canvas.getContext("2d");

        ctx.drawImage(img,0,0,canvas.width, canvas.height);
        updateSpotType(spot, checkTurn());
        
        updateTurn();
    }
}

function displayOpaque(event){
    let id = Number(event.target.id);
    console.log(`displayOpaque ${id}`);

    if(getSpotType(id-1) == -1){
        let canvas = document.getElementById(id);
        let ctx = canvas.getContext("2d");
        let img = checkTurn() == 0 ? document.getElementById("oImagex") : document.getElementById("oImageo");
        ctx.drawImage(img,0,0,canvas.width, canvas.height);
    }
}

function removeOpaque(event){
    let id = Number(event.target.id);
    if(getSpotType(id-1) == -1){
        let canvas = document.getElementById(id);
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "rgb(52, 52, 52)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

function clearGrid()
{
    let ctx, canvas;

    for (i = 0; i < 9; i++) {
        updateSpotType(i, -1);
        ctx = document.getElementById(`${i+1}`);
        canvas = ctx.getContext("2d");
        canvas.clearRect(0,0,ctx.width,ctx.height);
    }
}

function visXScore(amt) {
    xtx.fillStyle = "rgb(60, 60, 60)";
    xtx.fillRect(0, 0, XS.width, XS.height);

    xtx.font = "50px Haettenschweiler";
    var gradient = xtx.createLinearGradient(0,0,x.width,0);
    gradient.addColorStop("0","blue");
    gradient.addColorStop("0.5","rgb(235,10,103)");
    gradient.addColorStop("1.0","yellow");
    xtx.fillStyle = gradient;
    xtx.textAlign = "center";
    xtx.fillText("X Score", XS.width / 2, 50);
    xtx.strokeText("X Score", XS.width / 2, 50);
    xtx.fillText(amt, XS.width / 2, XS.height -10);
    xtx.strokeText(amt, OS.width / 2, OS.height -10);
}

function visOScore(amt) {
    otx.fillStyle = "rgb(60, 60, 60)";
    otx.fillRect(0, 0, OS.width, OS.height);

    otx.font = "50px Haettenschweiler";
    var gradient = otx.createLinearGradient(0,0,o.width,0);
    gradient.addColorStop("0","blue");
    gradient.addColorStop("0.5","rgb(235,10,103)");
    gradient.addColorStop("1.0","yellow");
    otx.fillStyle = gradient;
    otx.textAlign = "center";
    otx.fillText("O Score", XS.width / 2, 50);
    otx.strokeText("O Score", XS.width / 2, 50);
    otx.fillText(amt, XS.width / 2, XS.height - 10);
    otx.strokeText(amt, OS.width / 2, OS.height - 10);
}
function showYouWin(winner){
    let canvas = document.getElementById(`${winner}S`);
    let ctx = canvas.getContext("2d");
    
    ctx.fillStyle = "rgb(60, 60, 60)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    let gradient = ctx.createLinearGradient(0,0,o.width,0);
    gradient.addColorStop("0","blue");
    gradient.addColorStop("0.5","rgb(235,10,103)");
    gradient.addColorStop("1.0","yellow");
    ctx.font = "50px Haettenschweiler";
    ctx.fillStyle = gradient;
    ctx.fillText("Winner!", canvas.width/2, canvas.height/2);
    ctx.strokeText("Winner!", canvas.width/2, canvas.height/2);
}

function youWin(type){
    disableInput();
    if (type == 0)
        addXScore();
    else
        addOScore();

    setTimeout(clearGrid, 1000);
    setTimeout(enableInput,2000);
}