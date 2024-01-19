const link = document.querySelector('a'); 

link.addEventListener('click', event => {
    event.preventDefault();
    event.currentTarget.innerText = prompt('Введите свой текст');
});
