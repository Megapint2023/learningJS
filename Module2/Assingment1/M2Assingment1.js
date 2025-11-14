'use strict';

const numbers = [];

for (let i = 0; i < 5; i++) {
    const input = Number(prompt(`Syötä luku ${i + 1}/5:`));
    numbers.push(input);
}

let output = "Numbers in reversed order: <br>";

for (let i = numbers.length - 1; i >= 0; i--) {
    output += numbers[i] + "<br>";
}

console.log(output);
document.getElementById('target').innerHTML = output;