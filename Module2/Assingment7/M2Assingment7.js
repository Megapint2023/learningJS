'use strict';

const numbers = [];
const dicemax = Number(prompt("Noppakuution sivujen määrä:"));

function diceroll(dicemax) {
  return Math.floor(Math.random() * dicemax) + 1;
}
// Math.random() -> 0,111... - 0,999
// Math.floor() -> pyöristää tasalukuun alaspäin
while (true) {
  const number = diceroll(dicemax);
  if (number === dicemax)
    break;
  else
    numbers.push(number)
}
// numbers.sort((a, b) => a - b);
for (const number of numbers) {
    console.log(number)
}
let listHTML = '<ul>'; //AVAA LISTA!
for (const number of numbers) {
    listHTML += `<li>${number}</li>`; //LUO LISTA || `` = -> (backkicks)
}
listHTML += '</ul>'; //SULJE LISTA!
document.querySelector('#target').innerHTML = listHTML;