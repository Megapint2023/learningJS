<!-- Write a function called concat(), which receives
an array of strings as a parameter.
The function returns a string formed by concatenating the elements of the array. (2p)
Example: In a four-item array, there are items Johnny, DeeDee, Joey and Marky.
The function returns the string JohnnyDeeDeeJoeyMarky.
Do not use array.join() function
You can hardcode the array, no need for prompt().
Print the result to HTML document. -->

'use strict';

const nimet = [Ella, Bella, Sinderella, Mozzarella];
const iq = [100, 110, 120, 130];

function concat() {
}

for (const nimi of nimet) {
    console.log(nimi)
}
for (const points of iq) {
    console.log(points)
}
let listHTML = '<ul>';
for (const nimi of nimet) {
    listHTML += `<li>${nimi}</li>`;
}
listHTML += '</ul>';
document.querySelector('#target').innerHTML = listHTML;