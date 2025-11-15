'use strict';

const nimet = ['Ella', 'Bella', 'Sinderella', 'Mozzarella'];

function concat(nimet) {
    let textarray = '';
    for (const text of nimet){
        textarray += text;
    }
    return textarray;
}

const listHTML = concat(nimet);
document.querySelector('#target').innerHTML = listHTML;