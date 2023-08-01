let container = document.querySelector(".container")
let reset = document.querySelector('.reset')
let clear = document.querySelector('.clear')
let changeColor = document.querySelector('.color-change')

reset.addEventListener('click', e => makeGrid())
clear.addEventListener('click', e => resetColor())

alert("click reset button")

// we need this variable to control color change btn
let colorfull = false;


changeColor.addEventListener('click', () => colorfull = !colorfull)


function makeGrid(){
    let size = prompt("Choose number between 1 to 100")
    container.innerHTML = ''
    container.style.setProperty("--size", size)

    for(let i = 0; i < size*size; i++){
        const div = document.createElement('div')
        div.style.backgroundColor = "white"
        container.appendChild(div)
        
        div.addEventListener('mouseover', () => giveColor(div))
    }
}


//  this function resets everything 
function resetColor(){
    let squares = container.querySelectorAll('div')
    squares.forEach( square => {
        square.style.backgroundColor = 'white'
        
    });
}



// function for changing color (black or colorfull)
function giveColor(el){
    if(!colorfull){
        el.style.backgroundColor = 'black'
    } else {
        const randColor = () =>  {
            return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
          }
          el.style.backgroundColor = randColor()
    }
}
