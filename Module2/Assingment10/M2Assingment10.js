'use strict';

const candidates = Number(prompt("Ehdokkaiden lukumäärä: "));

const names = [];
for (let x = 0; x < candidates; x++) {
  const name = prompt(`Ehdokkaan ${x + 1} nimi:`);
  names.push(name)
}

const votes = Number(prompt("Äänestäjien lukumäärä: "));

const results = [];
for (let vote = 0; vote < votes; vote++) {
  const name = prompt(`Äänestäjä ${vote + 1} äännestää (ehdokkaan nimi):`);
  results.push(name)
}

function scores(results) {
  let score = 0 + name in scores
  let name;
}
  //someArray.sort((a, b) => {
  //console.log(a, b);
  //return b - a;

console.log("Results:", scores);

const listHTML1 = scores;
document.querySelector('#target1').innerHTML = listHTML1;