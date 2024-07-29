import * as css from "./style.css";
import load from "./page-load.js";
import homepage from "./homepage.js";
import menu from "./menu.js";
import about from "./about.js";

const homeButton = document.querySelector(".home-button");
const menuButton = document.querySelector(".menu-button");
const aboutButton = document.querySelector(".about-button");

load(homepage);

homeButton.addEventListener("click", () => {
    load(homepage);
});

menuButton.addEventListener("click", () => {
    load(menu);
})

aboutButton.addEventListener("click", () => {
    load(about);
})