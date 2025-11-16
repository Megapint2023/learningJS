'use strict';

const numbers = [2,5,7,9,10,11,16];

function even(numbers) {
    let evennumbers = [];
    for (const number of numbers){
      if number is % 2 == 0;
        evennumbers.push(number);
    }
    return evennumbers;
}

const listHTML = even(numbers);
document.querySelector('#target').innerHTML = listHTML;