'use strict';

const name = prompt("Anna nimesi:");
const randomNumber = Math.floor(Math.random() *4) +1;

let room = '';

if (randomNumber === 1) {
  room = 'Gryffindor';
} else if (randomNumber === 2) {
  room = 'Slytherin';
} else if (randomNumber === 3) {
  room = 'Hufflepuff';
} else {
  room = 'Ravenclaw';
}

console.log(`${name}, you are ${room}.`);
document.querySelector('#target').innerHTML = `${name}, you are ${room}.`;