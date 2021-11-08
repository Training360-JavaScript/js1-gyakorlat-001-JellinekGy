'use strict';

const handleClick = () => {
    const buttons = document.querySelectorAll('button.button');
    for (let i = 0; i < buttons.length; i += 1) {
        buttons[i].addEventListener('click', () => console.log(buttons[i].textContent));
    }
};