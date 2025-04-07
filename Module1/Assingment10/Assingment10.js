'use strict';

const dices = Number(prompt("Syötä noppien lkm:"));
const luckyNumber = Number(prompt("Syötä haluttu noppien summaluku:"))
const throws = 10000;
let hits = 0;
const minSum = dices * 1; // range
const maxSum = dices * 6; // range
let result = '';


if (isNaN(dices) || isNaN(luckyNumber) || dices < 1 || luckyNumber < minSum || luckyNumber > maxSum) {
    result = "Virhe! Yhteissumma ei ole mahdollinen."
} else {
     for (let i = 0; i < throws; i++) {
         let sum = 0;
         for (let j = 0; i < dices; j++) {
             sum +=Math.floor(Math.random() * 6) + 1;
         }
         if (sum % i === luckyNumber) {
             hits++;
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

