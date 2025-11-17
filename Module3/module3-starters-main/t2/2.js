'use strict';

const target = document.getElementById('target')

const listHTML =
    `
    <li>First Item</li>
    <li>Second Item</li>
    <li>Third Item</li>
    `;

target.innerHTML = listHTML;
target.classList.add('my-list');