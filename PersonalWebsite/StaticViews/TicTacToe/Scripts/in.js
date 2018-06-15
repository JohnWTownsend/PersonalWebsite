$(document).ready(function () {
    $('.boardElem').on("click", (e) => {
        makeSelection(e);
    }).on("mouseover", (e) => {
        displayOpaque(e);
    }).on("mouseout", (e) => {
        removeOpaque(e);
    });
});

function makeSelection(event, elem) {
    let tile = $(event.target);
    let spot;

    switch(tile.attr("id")){
        case("1"): spot = 0; break;
        case("2"): spot = 1; break;
        case("3"): spot = 2; break;
        case("4"): spot = 3; break;
        case("5"): spot = 4; break;
        case("6"): spot = 5; break;
        case("7"): spot = 6; break;
        case("8"): spot = 7; break;
        case("9"): spot = 8; break;
    }

    updateSpot(spot);
    checkIfWin();
}

function disableInput(){
    $('.boardElem').each(() =>{
        $(this).attr("pointer-events","none");
    })
}
function enableInput(){
    $('.boardElem').each(() =>{
        $(this).attr("pointer-events","auto");
    })
}