const schemeSvg = document.querySelector(".scheme-svg") 
const totalPriceTag = document.querySelector(".price-total");
const menuButton = document.querySelector(".m-menu");
const menu = document.querySelector(".menu");
// schemeSvg.addEventListener('click', (Event) => {
//     if (!Event.target.classList.contains("booked")) {
//         Event.target.classList.toggle("active");
//     };
// });

menuButton.addEventListener('click',() => {
    console.log("");
    menu.classList.toggle("is-open");
})