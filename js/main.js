const form = document.getElementById('form')
const names = [];
const numbers = [];
const name = document.getElementById('nameinput');
const number = document.getElementById('numberinput');
const maskOptions = {
    mask: '(00) 00000-0000'
};
const mask = IMask(number, maskOptions);
let lines = ``;

form.addEventListener('submit', function (e) {
    e.preventDefault();

    lineAdd();
    tUpdate();
})

function lineAdd() {
    names.push(name.value);
    numbers.push(number.value);

    let line = '<tr>';
    line += `<td>${nameinput.value}</td>`
    line += `<td>${numberinput.value}</td>`
    line += '</tr>';

    lines += line;

    nameinput.value = '';
    numberinput.value = '';
}

function tUpdate() {
    const body = document.querySelector('tbody');
    body.innerHTML = lines;
}
