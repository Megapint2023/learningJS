'use strict';

const year = prompt("Montako kertaa noppaa heitetään?:");

let result = '';

// if (year  % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
//     result = `${year} on karkausvuosi.`;
// } else {
//     result = `${year} ei ole karkausvuosi.`;
// }

console.log(result);
document.querySelector('#target').innerHTML = result;