'use strict';

const numbers = [];
const zero = 0;

while (true) {
    let number = Number(prompt("Syötä uusi luku:"));
    if (number === zero) break;
    numbers.push(number);
}
// NUMEROJÖRJESTYS (pyydetty = suurin -> pienin)
numbers.sort((a, b) => b - a);
// PRINTTI CONSOLIIN
for (const number of numbers) {
    console.log(number)
}
//PRINTTI HTML
let listHTML = '<ul>'; // AVAA LISTA!
for (const number of numbers) {
    listHTML += `<li>${number}</li>`; // LUO LISTA (huomioi hipsut poikkeaa)
}
// (backkicks) `` näytä tarttee silloin kun haluaa tunkee listan sisään muuttujan
listHTML += '</ul>'; //SULJE LISTA!
document.querySelector('#target').innerHTML = listHTML;