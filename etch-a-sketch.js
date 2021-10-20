function createGridSmall() {

    mediumGrid.classList.remove("selected");
    largeGrid.classList.remove("selected");
    smallGrid.classList.add("selected");

    while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
    }
    
    gridSize = 625;
    squareSize = "bigSquare";

    for (i=1; i <= gridSize; i++) { //creating a line.
        const square = document.createElement("div");
        square.classList.add("square", squareSize);
        square.id = "sq" + i;
        grid.appendChild(square);
    }
    blackSquare();
}

function createGridMedium() {

    mediumGrid.classList.add("selected");
    largeGrid.classList.remove("selected");
    smallGrid.classList.remove("selected");

    while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
    }
    
    gridSize = 2500;
    squareSize = "mediumSquare";

    for (i=1; i <= gridSize; i++) { //creating a line.
        const square = document.createElement("div");
        square.classList.add("square", squareSize);
        square.id = "sq" + i;
        grid.appendChild(square);
    }
    blackSquare();
}

function createGridLarge() {

    mediumGrid.classList.remove("selected");
    largeGrid.classList.add("selected");
    smallGrid.classList.remove("selected");

    while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
    }
    
    gridSize = 10000;
    squareSize = "smallSquare";

    for (i=1; i <= gridSize; i++) { //creating a line.
        const square = document.createElement("div");
        square.classList.add("square", squareSize);
        square.id = "sq" + i;
        grid.appendChild(square);
    }
    blackSquare();
}

function blackSquare() {
    black.classList.add("selected");
    rainbow.classList.remove("selected");
    eraser.classList.remove("selected");
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
    square.addEventListener("mouseover", () => 
    square.setAttribute("style", "background-color: black"))
    });
}

function resetGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
    square.removeAttribute("style", "background-color");
    });
    blackSquare();
}

function eraseSquare() {
    black.classList.remove("selected");
    rainbow.classList.remove("selected");
    eraser.classList.add("selected");
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
    square.addEventListener("mouseover", () => 
    square.removeAttribute("style", "background-color"));
    });
}

function rainbowSquare() {
    black.classList.remove("selected");
    rainbow.classList.add("selected");
    eraser.classList.remove("selected");
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    square.addEventListener("mouseover", () => 
    square.setAttribute("style", `background-color:#${randomColor}`));
    });
}



const container = document.querySelector(".container");
const grid = document.querySelector(".grid");

const reset = document.querySelector(".reset");
reset.addEventListener("click", resetGrid);

const black = document.querySelector(".black");
black.addEventListener("click", blackSquare);

const rainbow = document.querySelector(".rainbow");
rainbow.addEventListener("click", rainbowSquare);

const eraser = document.querySelector(".eraser");
eraser.addEventListener("click", eraseSquare);

const smallGrid = document.querySelector(".smallGrid");
smallGrid.addEventListener("click", createGridSmall);

const mediumGrid = document.querySelector(".mediumGrid");
mediumGrid.addEventListener("click", createGridMedium);

const largeGrid = document.querySelector(".largeGrid");
largeGrid.addEventListener("click", createGridLarge);

// const gridSize = 625; square size = 25px
// const gridSize = 2500; square size = 12.5px
// const gridSize = 10000; square size = 6.25px


createGridSmall();
blackSquare();

/* function createGrid(gridSize) {

    while (grid.firstChild) {
    grid.removeChild(grid.lastChild);
    }

    if (gridSize = "small") {
        gridSize = 625;
        squareSize = "bigSquare";
    } else if (gridSize = "medium") {
        gridSize = 2500;
        squareSize = "mediumSquare";
    } else if (gridSize = "large") {
        gridSize = 10000;
        squareSize = "smallSquare";
    }

    for (i=1; i <= gridSize; i++) { //creating a line.
        const square = document.createElement("div");
        square.classList.add("square", squareSize);
        square.id = "sq" + i;
        grid.appendChild(square);
        
}
}
*/

