'use strict';

const dogs = 6;

const names = [];
for (let x = 0; x < dogs; x++) {
  const name = prompt(`Koiran ${x + 1}/${dogs} nimi:`);
  names.push(name);
}

names.sort().reverse();
let listHTML = '<ul>';
for (const name of names) {
  listHTML += `<li>${name}</li>`;
}

listHTML += '</ul>';

document.querySelector('#target').innerHTML = listHTML;