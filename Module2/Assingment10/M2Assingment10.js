'use strict';

const candidates = Number(prompt("Ehdokkaiden lukumäärä: "));

const names = [];
for (let x = 0; x < candidates; x++) {
  const name = prompt(`Ehdokkaan ${x + 1} nimi:`);
  names.push(name)
}

const voters = Number(prompt("Äänestäjien lukumäärä: "));

const voting = [];
for (let vote = 0; x < voters; x++) {
  const name = prompt(`Ehdokkaan ${x + 1} nimi:`);
  names.push(name)
}

function voting(names, voters) {
    let results = ;
    let vote = 0;
    let results = name + 0 + vote;
    if (vote === voters) break;
    for (const vote of candidates) {
         if (name === names)
             name.push(vote)
    return results;
}


  //someArray.sort((a, b) => {
  //console.log(a, b);
  //return b - a;

console.log("Results:", results);

const listHTML1 = results;
document.querySelector('#target1').innerHTML = listHTML1;