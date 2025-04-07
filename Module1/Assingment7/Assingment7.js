'use strict';
const rolls = prompt("Montako kertaa noppaa heitetään?:");
let result = '';

// if (year  % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
//     result = `${year} on karkausvuosi.`;
// } else {
//     result = `${year} ei ole karkausvuosi.`;
// }

// while True:
//     arpakuutio = input("Arpakuutioden lukumäärä: ")
//     arpakuutio = int(arpakuutio)
//     if arpakuutio < 1 or arpakuutio > 1000:
//         print("Virheellinen luku, syötä arvo 1 ja 1000. välillä.")
//     else:
//         break
//
// numbers = []
//
// import random
// for x in range(arpakuutio): # x on loopin toimivuutta varten
//     number = random.randint(1, 6)
//     numbers.append(number)
//
// total = sum(numbers)
// print (numbers)
// print ("Numeroiden summa yht: " + str(total))

console.log(result);
document.querySelector('#target').innerHTML = result;