const gridContainer = document.querySelector("div.grid-container");

for (let index = 0; index < 256; index++) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    gridContainer.appendChild(squareDiv);
}