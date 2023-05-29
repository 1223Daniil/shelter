let bg = document.querySelector(`#bg`);
let popup = document.querySelector(`#popup`);
let card = document.querySelector(`.card`);
let close_bt = document.querySelector(`#close-bt`);
let title = document.querySelector(`#title`);



// header ---------------------------------------


const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const headerNav = document.querySelector(".header__nav");
const header = document.querySelector(".header");
const headerLink = document.querySelectorAll(".header__nav-link");
const body = document.body;


function togleBurger() {

    menu.classList.toggle("active");
    headerNav.classList.toggle("active");
    overlay.classList.toggle("active");
    body.classList.toggle("fixed");
}

menu.addEventListener("click", togleBurger);

headerLink.forEach((item) => {
    item.addEventListener("click", togleBurger);
});