const about = document.createElement("div");
about.classList.add("about");

const title = document.createElement("h1");
title.innerText = "ABOUT US";

const container = document.createElement("div");
container.classList.add("about-container");

const para = document.createElement("p");
para.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem nihil laboriosam aspernatur id dolorum odit corporis at, assumenda saepe optio cum ipsam laudantium expedita voluptate nulla autem possimus dolore harum numquam voluptates exercitationem. Non minus omnis ullam rem est assumenda obcaecati tempore, vel illum officiis eum perspiciatis dolore inventore mollitia consectetur, voluptatibus provident laborum adipisci rerum. Consectetur possimus fuga quasi.";

const img = document.createElement("div");
img.classList.add("about-img");

about.appendChild(title)
about.appendChild(container);
container.appendChild(para);
container.appendChild(img);

export default about;
