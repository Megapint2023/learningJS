'use strict';

const names = ['John', 'Paul', 'Jones'];

let listHTML = '';
for (let x = 0; x < names.length; x++) {
  listHTML += `<li>${names[x]}</li>`;
}
document.getElementById('target').innerHTML = listHTML;