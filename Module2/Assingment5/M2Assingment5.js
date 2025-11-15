'use strict';

const numbers = [];

while (true) {
    let number = Number(prompt("Syötä luku:"));
    if (numbers.includes(number)) { // kätevä sisäänrakennettu funktio
        alert("Syötit saman luvun kahdesti!")
        break;
    }
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
