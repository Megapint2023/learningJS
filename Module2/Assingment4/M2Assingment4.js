'use strict';

const numbers = [];
const zero = 0;

while (true) {
    let number = Number(prompt("Syötä uusi luku:"));
    if (number === zero) break;
    numbers.push(number);
}
numbers.sort((a, b) => b - a);

for (const number of numbers) {
    console.log(number)
}

for (const number of numbers) {
    listHTML += '<li>${number}</li>';
}

listHTML += '</ul>'
document.querySelector('#target').innerHTML = listHTML;