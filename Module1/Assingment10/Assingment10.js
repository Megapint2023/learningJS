'use strict';

const dices = Number(prompt("Noppien lkm:"));
const luckyNumber = Number(prompt("Haluttu noppien yhtsumma:"))
let diceMin = 1;
let diceMax = 6;
let result = '';


// if (luckynumber  < 1 || (number)) {
//     result = "Virhe! Syötä luku, joka on suurempu kuin 0."
// } else if (number ===1) {
//     Prime = false;
// } else {
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             Prime = false;
//             break;
//         }
//     }
// }
//
// if (number >= 1) {
//     if (Prime) {
//         result = `${number} on alkuluku.`;
//     } else {
//         result = `${number} ei ole alkuluku.`;
//     }
// }

 console.log(result);
 document.querySelector('#target').innerHTML = result;

  import random

 def parametriton():
  #!!!!! tämä "eka" while loop lisäsin, jotta tahkomäärä on järkevä eli max 100 !!!!
     while True:
         tahkot = input("Syötä kuinka monta tahkoa (eli sivua) nopalla on: ")
         tahkot = int(tahkot)
         if tahkot < 1 or tahkot > 100:
             print ("Älä keuli... Syötä järkevä arvo 1-100 välillä: ")
         else:
             break

     while True:
         nopanheitto = random.randint (1, tahkot )
         if nopanheitto == tahkot:
             print(str(nopanheitto) + " -> Osuit maksimiin!")
             break
         else:
             print ("Heitit: " + str(nopanheitto) + ":n")

 parametriton()

