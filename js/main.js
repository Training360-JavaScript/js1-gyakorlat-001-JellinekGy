'use strict';

let buttons = document.getElementsByClassName('button');

function displayButtonName (x) {
    x = buttons.innerText;
    console.log(x);
}

let handleClick = () => {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click',displayButtonName)
    }
}