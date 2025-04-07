'use strict';

const rolls = prompt("Heitot lkm:");
let sum = 0;

if (rolls  < 1 || rolls > 1000) {
    document.querySelector('#target').innerHTML = "Virhe! Syötä luku väliltä 1-1000...";
} else {
    for (let i = 0; i < rolls; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        sum += roll;
    }

    const result = `Nopanheitot yht: ${rolls}. Lukujen summa yht: ${sum}`;
    console.log(result);
    document.querySelector('#target').innerHTML = result;
}