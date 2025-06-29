// DOM Elements
const gridContainer = document.querySelector("div.grid-container");
const slider = document.querySelector("input#gridSize");
const defaultBtn = document.querySelector("button.default-btn");
const rainbowBtn = document.querySelector("button.rainbow-btn");

// Global Variables
let currentColor = "black";

// Drawing Functionality
function gridDrawing() {
    let isDrawing = false;

    // Mouse down event - start drawing
    gridContainer.addEventListener("mousedown", () =>{
        isDrawing = true;
    });
    
    // Mouse up event - stop drawing
    gridContainer.addEventListener("mouseup", () =>{
        isDrawing = false;
    });

    // Mouse over event - draw on squares while mouse is down
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

    function createGrid() {

    gridContainer.innerHTML = "";
    
    const gridSize = slider.value;
    const squareSize = 800 / gridSize;

    // Update grid size display
    const gridValue = document.querySelector("span#gridValue");
    gridValue.innerText = gridSize + " x " + gridSize;
    
    // Create squares for the grid
    for (let index = 0; index < gridSize * gridSize; index++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        squareDiv.style.width = squareSize + "px";
        squareDiv.style.height = squareSize + "px";
        gridContainer.appendChild(squareDiv);
    }
    
    slider.addEventListener("input", createGrid);
}

createGrid();

// Reset Button Functionality
function resetBtn() {
    const resetBtn = document.querySelector("button.reset-btn");
    resetBtn.addEventListener("click", () => {
        createGrid();
    });
}

resetBtn();

defaultBtn.addEventListener("click", () => {
    currentColor = "black";
});

// Rainbow Color Generator Function
function rainbowColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`;
}

rainbowBtn.addEventListener("click", () => {
    currentColor = "rainbow";
});

