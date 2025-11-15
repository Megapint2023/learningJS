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

listHTML = numbers;
document.querySelector('#target').innerHTML = listHTML;