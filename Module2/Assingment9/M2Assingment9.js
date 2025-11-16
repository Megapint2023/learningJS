'use strict';

const numbers = [2,5,7,9,10,11,16];

function even(numbers) {
    let evennumbers = [];
    for (const number of numbers)
         if (number % 2 === 0)
             evennumbers.push(number);
    return evennumbers;
}
console.log("All numbers:", numbers);
console.log("Even numbers", even(numbers))

const listHTML1 = numbers;
const listHTML2 = even(numbers);
document.querySelector('#target1').innerHTML = listHTML1;
document.querySelector('#target2').innerHTML = listHTML2;