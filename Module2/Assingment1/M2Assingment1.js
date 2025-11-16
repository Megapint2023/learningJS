'use strict';

const numbers = [];

for (let x = 0; x < 5; x++) {
    let number = Number(prompt(`Syötä luku ${x + 1}/5:`));
    numbers.push(number);
}

let reverse = [];
for (let y = 4; y >= 0; y--) {
    reverse.push(numbers[y]);
}

console.log(reverse);
document.getElementById('target').innerHTML = reverse;