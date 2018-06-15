$(document).ready(function(){
    setInterval(updateClock, 500);
});

function updateClock() {
    let now = new Date();
    let hrs = now.getHours() % 12;
    let mins = now.getMinutes().toString().length == 1 ? "0" + now.getMinutes() : now.getMinutes();
    let secs = now.getSeconds().toString().length == 1 ? "0" + now.getSeconds() : now.getSeconds();

    $("#clock").html(`${hrs}:${mins}:${secs}`);
}