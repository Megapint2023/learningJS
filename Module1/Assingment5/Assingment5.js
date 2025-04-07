'use strict';

const year = prompt("Anna vuosiluku:");

let result = '';

if (year  % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    result = `${year} on karkausvuosi.`;
} else {
    result = `${year} ei ole karkausvuosi.`;
}

console.log(result);
document.querySelector('#target').innerHTML = result;