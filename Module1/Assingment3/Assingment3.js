'use strict';

const num1 = Number(prompt("Anna kokonaisluku:"));
const num2 = Number(prompt("Anna kokonaisluku:"));
const num3 = Number(prompt("Anna kokonaisluku:"));

let sum = num1 + num2 + num3;
let product = num1 * num2 * num3;
let average = sum / 3;

console.log("Syötyt arvot:", num1, num2, num3);
console.log("Sum:", sum);
console.log("Product:", product);
console.log("Avrage:", average);

document.querySelector('#target').innerHTML = "Sum: " + sum + "<br/>";
document.querySelector('#target').innerHTML += "Product: " + product + "<br/>";
document.querySelector('#target').innerHTML += "Average: " + average + "<br/>";