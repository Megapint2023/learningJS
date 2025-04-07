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
        for (let j = 0; j < dices; j++) {
            sum += Math.floor(Math.random() * 6) + 1;
        }
        if (sum === luckyNumber) {
            hits++;
        }
    }
    const probability = (hits / throws) * 100;
    result = `${dices}:lla nopalla todennäköisyys osua summalukuun ${luckyNumber} ... on noin ${probability.toFixed(2)}%.`;
}


 console.log(result);
 document.querySelector('#target').innerHTML = result;

