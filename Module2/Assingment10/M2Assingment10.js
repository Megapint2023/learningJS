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
  if (newvote === '') continue;
  for (const score of names)
    if (score.name === newvote)
      score.score++;
}

names.sort((a, b) => b.score - a.score);

console.log("Winner:", names[0]);
console.log("Results:", names);

let listHTML = '<ul>'; //AVAA LISTA
for (const result of names) {
    listHTML += `<li>${result.name}: ${result.score}</li>`; //LUO LISTA || `` (backkicks)
}
listHTML += '</ul>'; //SULJE LISTA
document.querySelector('#target').innerHTML = listHTML;