const schemeSvg = document.querySelector(".scheme-svg") 
schemeSvg.addEventListener('click', (Event) => {
    if (!Event.target.classList.contains("booked")) {
        Event.target.classList.toggle("active");
    };
});