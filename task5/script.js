const inputText = document.querySelector ('input');
const textField = document.querySelector ('.duplicateField');
const buttonToConsole = document.querySelector('.btn-console');

inputText.addEventListener('input', event => {
    textField.textContent = inputText.value;
});

buttonToConsole.addEventListener('click', event => {
    event.preventDefault();
    inputText.value = '';
    console.log(textField.textContent);
});