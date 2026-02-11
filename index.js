let container = document.getElementById("div-container")
let currentSize = 16

function createCells(newSize){
    let sizeCalc = newSize * newSize
    for(let i = 0; i < sizeCalc; i++){
        const div = document.createElement("div");
        div.classList.add('div-size')
        container.appendChild(div)
        div.addEventListener('mouseover', () =>{
            div.classList.add('change-back-black')
        })
    }
}

function reset(){
    container.innerHTML = ""
    createCells(currentSize)
}

function getInput(){
    let newSize = parseInt(prompt('Enter new grid size 1-100: '))
    if(Number.isNaN(newSize) || newSize < 1 || newSize > 100){
        return
        
    }
    container.innerHTML = ''
    currentSize = newSize
    createCells(currentSize)
}

createCells(currentSize)