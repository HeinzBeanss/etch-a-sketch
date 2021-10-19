function createGrid() {
    const grid = document.createElement("div");
    grid.classList.add = ("grid");
    body.prepend(grid);

    for (i=1; i <=large; i++) {
        const line = document.createElement("div");
        line.classList.add("line");
        line.id="line" + i;
        grid.appendChild(line);



    for (i=1; i <= large; i++) { //creating a line.
        const square = document.createElement("div");
        square.classList.add("square");
        square.id = "sq" + i;
        line.appendChild(square);
}
}
}
//each square will need an id between - 400 or even more in the future. 

const body = document.querySelector("body");
const large = 20; 






createGrid();