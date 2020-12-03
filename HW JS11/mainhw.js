"use strict";
const buttons = document.querySelectorAll('.btn');

function pressKey(event) {
    for(let i = 0;  i < buttons.length; i++){
        buttons[i].classList.remove('press');
    }
    if (event.code === 'Enter'){
        buttons[0].classList.add('press');
    }
    if (event.code === 'KeyS'){
        buttons[1].classList.add('press');
    }
    if (event.code === 'KeyE'){
        buttons[2].classList.add('press');
    }
    if (event.code === 'KeyO'){
        buttons[3].classList.add('press');
    }
    if (event.code === 'KeyN'){
        buttons[4].classList.add('press');
    }
    if (event.code === 'KeyL'){
        buttons[5].classList.add('press');
    }
    if (event.code === 'KeyZ'){
        buttons[6].classList.add('press');
    }
}

addEventListener("keydown", pressKey);
