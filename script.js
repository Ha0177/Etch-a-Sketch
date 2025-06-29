const gridContainer = document.querySelector("div.grid-container");

// for (let index = 0; index < 256; index++) {
//     const squareDiv = document.createElement("div");
//     squareDiv.classList.add("square");
//     gridContainer.appendChild(squareDiv);
// }

gridContainer.addEventListener("mouseover", (e) => {
    if (e.target.matches("div.square")) {
        e.target.style.backgroundColor = "black";
    }
});

const slider = document.querySelector("input#gridSize")

function createGrid() {
    gridContainer.innerHTML = "";
    const gridSize = slider.value;
    const squareSize = 800 / gridSize;

    const gridValue = document.querySelector("span#gridValue");
    gridValue.innerText = gridSize + " x " + gridSize;
    
    for (let index = 0; index < gridSize * gridSize; index++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        squareDiv.style.width = squareSize + "px";
        squareDiv.style.height = squareSize + "px";
        gridContainer.appendChild(squareDiv);
    }
}

slider.addEventListener("input", createGrid);

createGrid();
