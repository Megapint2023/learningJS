'use strict';

const rolls = prompt("Montako kertaa noppaa heitetään?:"); //heitot = input("Arpakuutioden lukumäärä: ")
let sum = ''; //heitot = int(heitot)
let randomNumber = 1-6;

if (rolls  < 1 || rolls > 1000) {
    result = "yötä arvo väliltä1-1000.";
} else (randomNumber === {
    result = `${sum} .`;
}


if (randomNumber === 1) {
  room = 'Gryffindor';
} else if (randomNumber === 2) {
  room = 'Slytherin';
} else if (randomNumber === 3) {
  room = 'Hufflepuff';
} else {
  room = 'Ravenclaw';
}

numbers = []
import random

for heitot in range(heitot):
number = random.randint(1, 6)
numbers.append(number)
total = sum(numbers)

console.log(result);
document.querySelector('#target').innerHTML = result;
document.querySelector('#target').innerHTML += sum;