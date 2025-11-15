<!-- Write a function that returns a random dice roll between 1 and 6.
The function should not have any parameters.
Write a main program that rolls the dice until the result is 6.
The main program should print out the result
of each roll in an unordered list (<ul>). (2p) -->

'use strict';

const numbers = [];
const dicemax = 6;

function diceroll() {
  return Math.floor(Math.random() * (dicemax)) + 1;
}
// Math.random() -> 0,111... - 0,999
// Math.floor() -> pyöristää tasalukuun alaspäin

while (True) {
  const number = diceroll ();
  if (numbers.includes(number))
    break;
  else
  numbers.push(number)
}
numbers.sort((a, b) => a - b);

for (const number of numbers) {
    console.log(number)
}
let listHTML = '<ul>'; //AVAA LISTA!
for (const number of numbers) {
    listHTML += `<li>${number}</li>`; //LUO LISTA || `` = -> (backkicks)
}
listHTML += '</ul>' //SULJE LISTA!
document.querySelector('#target').innerHTML = listHTML;