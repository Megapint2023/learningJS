'use strict';

const numbers = [];
const dicemax = 6;

function diceroll() {
  return Math.floor(Math.random() * dicemax) + 1;
}
// Math.random() -> 0,111... - 0,999
// Math.floor() -> pyöristää tasalukuun alaspäin
while (true) {
  const number = diceroll();
  if (numbers.includes(number))
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