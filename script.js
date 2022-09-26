const controls = document.querySelector('.form');
const input = document.querySelector('#firstName');

    let errorMsg = document.createElement('div');
    errorMsg.classList.add('errorNotify');
    errorMsg.textContent = "This is an error"

controls.appendChild(errorMsg);