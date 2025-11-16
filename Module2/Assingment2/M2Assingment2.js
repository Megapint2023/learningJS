'use strict';

const participants = Number(prompt("How many participants: "));

const names = [];
for (let x = 0; x < participants; x++) {
  const name = prompt("Enter new participant name:")
  names.push(name)
}

names.sort();
let listHTML = '<ol>';
for (const name of names) {
  listHTML += `<li>${name}</li>`;
}
listHTML += '</ol>';

document.querySelector('#target').innerHTML = listHTML;
