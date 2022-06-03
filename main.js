const grid = document.getElementById("grid")
const pencilColor = document.getElementById("pencil-color")
const sizeSelector = document.getElementById("grid-size")
const resetButton = document.getElementById("reset-button")

function createGrid(size) {
    grid.innerHTML= ""
    let pixel
    for (let i = 1; i <= size**2; i++) {
        pixel = document.createElement('div')
        pixel.id = `pixel${i}`
        pixel.classList.add("pixel")
        pixel.addEventListener("click", colorPixel)
        pixel.addEventListener("dragstart", (e) => e.preventDefault())
        pixel.addEventListener("mouseover", colorPixelOnOver)
        grid.appendChild(pixel)
    }
    let pixelSize = 90/size
    grid.style.gridTemplateColumns = `repeat(${size}, ${pixelSize}vmin)`
    grid.style.gridTemplateRows = `repeat(${size}, ${pixelSize}vmin)`
}

createGrid(48)

function colorPixel(e) {
    e.target.style.backgroundColor = pencilColor.value
}

function colorPixelOnOver(e) {
    if (e.buttons == 1) {
        e.target.style.backgroundColor = pencilColor.value
    }
}

sizeSelector.addEventListener("input", (e) => createGrid(e.target.value))
resetButton.addEventListener("click", () => createGrid(sizeSelector.value))
