const gridContainer = document.querySelector("div.grid-container");

for (let index = 0; index < 256; index++) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    gridContainer.appendChild(squareDiv);
}

gridContainer.addEventListener("mouseover", (e) => {
    if (e.target.matches("div.square")) {
        e.target.style.backgroundColor = "black";
    }
});

const slider = document.querySelector("input#gridSize")
const gridSize = slider.value;
const squareSize = 800 / gridSize;

for (let index = 0; index < gridSize * gridSize; index++) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    squareDiv.style.width = squareSize + "px";
    squareDiv.style.height = squareSize + "px";
    gridContainer.appendChild(squareDiv);
}