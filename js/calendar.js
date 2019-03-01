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

    if (width < 800){
        calendar.setAttribute("width", `${width-(width*0.25)}px`);
    }
    else{
        calendar.setAttribute("width", `${width-(width*0.45)}px`);
    }
}
