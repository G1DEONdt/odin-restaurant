const menu = document.createElement("div");
menu.classList.add("menu");

const title = document.createElement("h1");
title.innerText = "MENU";

const container = document.createElement("div");
container.classList.add("card-container");

const coffeeCard = document.createElement("div");
coffeeCard.classList.add("card");

const coffeeHeader = document.createElement("h2");
coffeeHeader.innerText = "Coffee";

const breakfastCard = document.createElement("div");
breakfastCard.classList.add("card");

const breakfastHeader = document.createElement("h2");
breakfastHeader.innerText = "Breakfast";

const breakfastSubtitle = document.createElement("p");
breakfastSubtitle.innerText = "until 11:00am";

const lunchCard = document.createElement("div");
lunchCard.classList.add("card");

const lunchHeader = document.createElement("h2");
lunchHeader.innerText = "Lunch";


const coffeeMenu = [
    ["Espresso", "$5:00"],
    ["Latte", "$6.00"],
    ["Flat White", "$5.50"],
    ["Cappuccino", "$6.00"],
    ["Long Black", "$4.50"]
]

const breakfastMenu = [
    ["Pancakes", "$8.00"],
    ["Eggs on Toast", "$12.00"],
    ["Bacon and Egg Roll", "$14.00"],
    ["Eggs Benedict", "$18.00"],
    ["Big Breakfast", "$21.00"]
]

const lunchMenu = [
    ["Chips", "$10.00"],
    ["Toasted Sandwich", "$12.00"],
    ["Chicken Burger", "$18.00"],
    ["Beef Burger", "$18.00"],
    ["Rump Steak", "$19.00"]
]

function createTable(menu) {
    const table = document.createElement("table");
    for (const x in menu) {
        const row = document.createElement("tr");
        const firstCol = document.createElement("td");
        firstCol.innerText = menu[x][0];
        const secondCol = document.createElement("td");
        secondCol.innerText = menu[x][1];
        row.appendChild(firstCol);
        row.appendChild(secondCol);
        table.appendChild(row);
    }
    return table;
}

// Create Tables 
const coffeeTable = createTable(coffeeMenu);
const breakfastTable = createTable(breakfastMenu);
const lunchTable = createTable(lunchMenu);

// Header
menu.appendChild(title);
menu.appendChild(container);

// Coffee Card
container.appendChild(coffeeCard);
coffeeCard.appendChild(coffeeHeader);
coffeeCard.appendChild(coffeeTable);

// Breakfast Card
container.appendChild(breakfastCard);
breakfastCard.appendChild(breakfastHeader);
breakfastCard.appendChild(breakfastSubtitle);
breakfastCard.appendChild(breakfastTable);

// Lunch Card
container.appendChild(lunchCard);
lunchCard.appendChild(lunchHeader);
lunchCard.appendChild(lunchTable);

export default menu;