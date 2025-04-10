'use strict';

const participants = Number(prompt("How many participants: "));

const names = [];

for (let i = 0; i < participants; i++) {
  const name = prompt(`Participant name: ${i + 1}:`);
  names.push(name);
}

for (let i = 0; i < names.length - 1; i++) {
  for (let j = 0; j < names.length - i - 1; j++) {
    if (names[j].toLowerCase() > names[j + 1].toLowerCase()) {
      let temp = names[j];
      names[j] = names[j + 1];
      names[j + 1] = temp;
    }
  }
}

let listHTML = '<ol>';
for (const name of names) {
  listHTML += `<li>${name}</li>`;
}

listHTML += '</ol>';

document.querySelector('#target').innerHTML = listHTML;