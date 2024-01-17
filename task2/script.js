const consoleLog = document.querySelector('#consoleLog');
const alertExample = document.querySelector('#alertExample');
const promptExample = document.querySelector('#promptExample');

consoleLog.addEventListener('click', () => {
    alert('Предназначена для вывода информации в консоль.')
});

alertExample.addEventListener('click', () => {
    alert('Предназначена для вывода результата обработки или информации на экране пользователя при помощи специального окна.')
});

promptExample.addEventListener('click', () => {
    alert('Предназначена для вывода специального окна, куда пользователь имеет возможность ввести некое значение, однако JS его никак не обрабатывает.')
});

consoleLog.addEventListener('click', () => {
    prompt('Предназначена для вывода информации в консоль.')
});

alertExample.addEventListener('click', () => {
    prompt('Предназначена для вывода результата обработки или информации на экране пользователя при помощи специального окна.')
});

promptExample.addEventListener('click', () => {
    prompt('Предназначена для вывода специального окна, куда пользователь имеет возможность ввести некое значение, однако JS его никак не обрабатывает.')
});