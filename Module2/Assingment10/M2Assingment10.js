'use strict';

const candidates = Number(prompt("Ehdokkaiden lukumäärä: "));

const names = [];
for (let x = 0; x < candidates; x++) {
  const name = prompt(`Ehdokkaan ${x + 1} nimi:`);
  names.push({name: name, score: 0})
}

const votes = Number(prompt("Äänestäjien lukumäärä: "));
for (let vote = 0; vote < votes; vote++) {
  const newvote = prompt(`Äänestäjä ${vote + 1} kannattaa (ehdokkaan nimi):`);
  for (const score of names)
    if (score.name === newvote)
      score.name++;
}

results.sort((a, b) => b - a);

console.log("Results:", results);

const listHTML1 = results;
document.querySelector('#target1').innerHTML = listHTML1;