import load from "./page-load.js";
import menu from "./menu.js";

const homepage = document.createElement("div");

const hero = document.createElement("div");
hero.classList.add("hero");

const heroNav = document.createElement("div");
heroNav.classList.add("hero-nav");

const title = document.createElement("h1");
title.innerText = "G1DEON's CAFE";
const subtitle = document.createElement("p");
subtitle.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, fuga nemo incidunt veritatis hic rem deleniti provident exercitationem id numquam distinctio enim! Atque libero veritatis qui fuga dolorem, sit molestias.";

const callToAction = document.createElement("button");
callToAction.innerText = "View Menu";
callToAction.classList.add("call-to-action");


homepage.appendChild(hero);
hero.appendChild(heroNav);
heroNav.appendChild(title);
heroNav.appendChild(subtitle);
heroNav.appendChild(callToAction);

callToAction.addEventListener("click", () => {
    load(menu);
})

export default homepage;