const gridContainer = document.querySelector("div.grid-container");
let currentColor = "black";

function gridDrawing() {
    let isDrawing = false;

    gridContainer.addEventListener("mousedown", () =>{
        isDrawing = true;
    });
    gridContainer.addEventListener("mouseup", () =>{
        isDrawing = false;
    });

    gridContainer.addEventListener("mouseover", (e) => {
        if (e.target.matches("div.square") && isDrawing) {
            if (currentColor === "rainbow") {
                e.target.style.backgroundColor = rainbowColor();
            } else {
                e.target.style.backgroundColor = currentColor;
            }
        }
    });
}
gridDrawing();

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
        slider.addEventListener("input", createGrid);
    }
}
createGrid();

function resetBtn() {
    const resetBtn = document.querySelector("button.reset-btn");
    resetBtn.addEventListener("click", () => {
        createGrid();
    });
    
}
resetBtn();

const defaultBtn = document.querySelector("button.default-btn");
defaultBtn.addEventListener("click", () => {
    currentColor = "black";
});

function rainbowColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`;
}
const rainbowBtn = document.querySelector("button.rainbow-btn");
rainbowBtn.addEventListener("click", () => {
    currentColor = "rainbow";
});

