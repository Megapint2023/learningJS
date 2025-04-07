'use strict';

const dice = Number(prompt("Noppien lkm:"));
const sides = Number(prompt("Sivujen lkm:"))
let result = '';


// if (number  < 1 || isNaN(number)) {
//     result = "Virhe! Syötä luku, joka on suurempu kuin 0."
// } else if (number ===1) {
//     Prime = false;
// } else {
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             Prime = false;
//             break;
//         }
//     }
// }
//
// if (number >= 1) {
//     if (Prime) {
//         result = `${number} on alkuluku.`;
//     } else {
//         result = `${number} ei ole alkuluku.`;
//     }
// }

 console.log(result);
 document.querySelector('#target').innerHTML = result;