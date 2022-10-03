console.log('Hello world!')
const div = document.querySelector('.container');
const p = document.querySelector('p')
const buttons = document.querySelectorAll('button')
console.log(buttons)


function borderRadius (radius) {
    div.style.gridTemplateColumns = `repeat(${radius}, 1fr)`;
    div.style.gridTemplateRows = `repeat(${radius}, 1fr)`;
    const borderSquare = radius * radius;
    for (let i = 0; i < borderSquare; i++) {
        const divs = document.createElement('div')
        div.appendChild(divs)
        divs.classList.add('mark');

        
    }
    const allDivs = document.querySelectorAll('.mark')
    allDivs.forEach(div => div.addEventListener('mouseover', () => {
        div.classList.add('changecolor')
    }))
}  


let here = Number(prompt('Write the number of squares from 1 to 100'))
while (!here) {
    here = Number(prompt('Write the number of squares from 1 to 100'))
}
if (here > 100) {
    here = 100;
}
console.log(here)



borderRadius(here)

buttons.forEach(button => button.addEventListener('click', (e) => {
    console.log(e.target.className)
}))
