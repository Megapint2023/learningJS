'use strict';

const dogs = 6;
const names = [];

for (let i = 0; i < dogs; i++) {
  const name = prompt(`Koiran ${i + 1}/${dogs} nimi:`);
  names.push(name);
}

for (let i = 0; i < names.length - 1; i++) {
  for (let j = 0; j < names.length - i - 1; j++) {
    if (names[j].toLowerCase() < names[j + 1].toLowerCase()) {
      let temp = names[j];
      names[j] = names[j + 1];
      names[j + 1] = temp;
    }
  }
}

let listHTML = '<ul>';
for (const name of names) {
  listHTML += `<li>${name}</li>`;
}

listHTML += '</ul>';

document.querySelector('#target').innerHTML = listHTML;