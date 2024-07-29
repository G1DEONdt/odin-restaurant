const content = document.querySelector('.content');


function reset() {
    content.innerHTML = '';
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("img-container");

    content.appendChild(imageContainer);
}

export default function load(page) {
    reset();
    content.appendChild(page);
}
