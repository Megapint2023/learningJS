'use strict';

const startYear = Number(prompt("Karkausvuodet väliltä alkaen (vuosi):"));
const endYear = Number(prompt("Vuoteen asti (vuosi):"));

let listHTML = '<ul>';

for (let year = startYear; year <= endYear; year++) {
    if (year  % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        listHTML += `<li>${year}</li>`;
    }
}

listHTML += '</ul>'

console.log(listHTML);
document.querySelector('#target').innerHTML = listHTML;