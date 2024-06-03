// const containerRef = document.querySelector('.js-container')

// containerRef.addEventListener('click', onBtnClick)

// function onBtnClick(e){
// if(e.target.nodeName !== 'BUTTON'){
// return
// }
// e.target.style.backgroundColor = 'green';
    // console.log(e.target.nodeNAme);
    // console.log(e.currentTarget);
//}




// const colors = [
//     { hex: '#f44336', rgb: '244.67.54' },
//     { hex: '#e91e63', rgb: '233,30,99' },
//     { hex: '#9c27b0', rgb: '156,39,176' },
//     { hex: '#673ab7', rgb: '103,58,183' },
//     { hex: '#3f51b5', rgb: '63,81,181' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#00bcd4', rgb: '0,188,212' },
//     { hex: '#009688', rgb: '0,150,136' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
//     { hex: '#ff9800', rgb: '255,152,0' },
//     { hex: '#795548', rgb: '121,85,72' },
//     { hex: '#607d8b', rgb: '96,125,139' },
//     ];


//     const color = document.querySelector('.palette');
//     paletteContainer.addEventListener('click', onCardColorClick)
//     function onCardColorClick(e){
//         console.log(e.currentTurget);
//         console.log(e.target);
//         if (!e.target.classList.contain('color-swatch')){
//             return
//         }
//         document.body.style.backgroungColor = e.target.dataset.hex
//     }
//     function createCardMarckup(colors){
//         return colors.map((color)=>{
          
//             return `<div class="color-card">
//     <div
//     class="color-swatch"
//     data-hex="${color.hex}"
//     data-rgb="${color.rgb}"
//     style="background-color:${color.hex}"></div>
//     <div class="color-meta">
//     <p>HEX: ${color.hex}</p>
//     <p>RGB:${color.rgb} </p>
//     </div>
//     </div>`
// }).join(' ');
//     }


//     const markcup = createCardMarckup(colors)

// color.insertAdjacentHTML('beforeend', markcup)




/*
* Mousemove и throttle
*/

const coordsOutputRef = document.querySelector('.js-coords');
let mouseMoveCbInvocationCounter = 0;

window.addEventListener('mousemove', _.throttle(onMouseMove, 500));

function onMouseMove(event) {
mouseMoveCbInvocationCounter += 1;

coordsOutputRef.textContent = `
Кількість викликів onMouseMove: ${mouseMoveCbInvocationCounter},
X: ${event.clientX},
Y:${event.clientY}
`;
}

/*
* Input и debounce
*/
const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');
let inputCbInvocationCounter = 0;
const option = { trailing: true, leading: true }


inputRef.addEventListener('input', _.debounce(onInputChange, 500));

function onInputChange(event) {
inputCbInvocationCounter += 1;

outputRef.textContent = `
Кількість викликів onInputChange: ${inputCbInvocationCounter},
Значення: ${event.target.value}
`;
}