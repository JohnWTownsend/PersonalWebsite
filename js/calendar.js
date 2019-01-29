window.addEventListener("resize", ()=>{
    updateCalendarSize();
});

document.addEventListener("DOMContentLoaded", ()=>{
    updateCalendarSize();
});

function updateCalendarSize(){
    let width = window.innerWidth;
    let height = window.innerHeight;
    let calendar = document.querySelector("#googleCalendar");
    let src = calendar.getAttribute("src");

    if (width < 600 && src.search("WEEK")){
        calendar.setAttribute("src", src.replace("WEEK","AGENDA"));
    }
    else if (width >= 600 && src.search("AGENDA")){
        calendar.setAttribute("src", src.replace("AGENDA","WEEK"));
    }

    calendar.setAttribute("height", `${height-(height*0.3)}px`);
    calendar.setAttribute("width", `${width-(width*0.1)}px`);
}

function show(element){
    element.setAttribute("style", "display: inherit");
}

function hide(element){
    element.setAttribute("style", "display: none");
}