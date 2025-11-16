'use strict';

const variable1 = Number(prompt(""));
let variable2 = [];
let variable3 = '';

console.log(variable2);

let listHTML = '<ul>'; //AVAA LISTA
for (const result of names) {
    listHTML += `<li>${variable1}</li>`; //LUO LISTA || `` (backkicks)
}
listHTML += '</ul>'; //SULJE LISTA


document.querySelector('#target').innerHTML = listHTML;
