'use strict';

const dices = Number(prompt("Noppien lkm:"));
const luckyNumber = Number(prompt("Haluttu noppien yhtsumma:"))
let diceMin = 1;
let diceMax = 6;
let result = '';
let range = dices * diceMin - diceMax;

 if (luckynumber  < range || luckyNumber > range {
     result = "Virhe! Yhteissumma ei ole mahdollinen."
 } else if (luckyNumber % 10000 == 0) {
     luckyNumber = false;
 } else {
     for (let i = 2; i < luckyNumber; i++) {
         if (luckyNumber % i === 0) {
             Prime = false;
             break;
         }
     }
 }

 if (luckyNumber >= 1) {
     if (Prime) {
         result = `${luckyNumber} on alkuluku.`;
     } else {
         result = `${luckyNumber} ei ole alkuluku.`;
     }
 }

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

