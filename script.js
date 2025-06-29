// DOM Elements
const gridContainer = document.querySelector("div.grid-container");
const slider = document.querySelector("input#gridSize");
const defaultBtn = document.querySelector("button.default-btn");
const rainbowBtn = document.querySelector("button.rainbow-btn");

// Global Variables
let currentColor = "black";

// Sets up drawing functionality for single clicks and drag drawing
function gridDrawing() {
    let isDrawing = false;

    gridContainer.addEventListener("mousedown", (e) => {
        e.preventDefault();
        if (e.button === 0) {
            isDrawing = true;
            if (e.target.matches("div.square")) {
                drawSquare(e.target);
            }
        }
    });
    
    gridContainer.addEventListener("mouseup", () => {
        isDrawing = false;
    });


    gridContainer.addEventListener("mouseover", (e) => {
        if (e.target.matches("div.square") && isDrawing) {
            drawSquare(e.target);
        }
    });

    gridContainer.addEventListener("contextmenu", (e) => {
        e.preventDefault();
    });
}

// Draws on a square with current color or rainbow
function drawSquare(square) {
    if (currentColor === "rainbow") {
        square.style.backgroundColor = rainbowColor();
    } else {
        square.style.backgroundColor = currentColor;
    }
}

gridDrawing();

// Creates the grid based on slider value
function createGrid() {
    gridContainer.innerHTML = "";
    
    const gridSize = slider.value;
    const squareSize = 600 / gridSize;

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

createGrid();
slider.addEventListener("change", createGrid);

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

// Generates random RGB color for rainbow mode
function rainbowColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`;
}

rainbowBtn.addEventListener("click", () => {
    currentColor = "rainbow";
});

