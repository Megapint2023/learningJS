'use strict';

const calculate = confirm("Should i calculate the square root?")
let result = '';

if (calculate) {
    const number = Number(prompt("Enter a number"));

    if (number < 0) {
        result = "The square root of a negative number is not defined.";
    } else {
        const sqroot = Math.sqrt(number);
        result = `The square root of ${number} is ${sqroot}.`;
    }
} else {
    result = "The square root is not calculated.";
}

console.log(result);
document.querySelector('#target').innerHTML = result;