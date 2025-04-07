'use strict';

const startYear = prompt("Karkausvuodet väliltä alkaen (vuosi):");
const endYear = prompt("Vuoteen asti (vuosi):");

let listHTML = '<ul>';

for (let year = startYear; year <= endYear; year++) {
    if (year  % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    listHTML += `<li>${year}<li/>`;
    }
}

console.log(listHTML);
document.querySelector('#target').innerHTML = listHTML;