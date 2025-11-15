'use strict';

const numbers = [];
const zero = 0;

while (true) {
    let input = Number(prompt("Syötä uusi luku:"));
    if (input === zero) break;
    numbers.push(input);
}
numbers.sort((a, b) => b - a);

for (const number of numbers) {
    console.log(numbers)
}

listHTML = numbers;
document.querySelector('#target').innerHTML = listHTML;