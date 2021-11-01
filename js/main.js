'use strict';

let buttons = document.querySelectorAll(".button");

let handleClick = () => {
    console.log(this.textContent);
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleClick);
}