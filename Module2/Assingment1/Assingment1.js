'use strict';

const numbers = [];

for (let i = 0; i < 5; i++) {
    const input = Number(prompt(`Syötä luku ${i + 1}/5:`));
    numbers.push(input);
}

console.log("Numbers in reversed order:");
for (let i = numbers.length; i >= 0; i--) {
    console.log(numbers[i]);
}