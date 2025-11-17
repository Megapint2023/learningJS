'use strict';

const target = document.getElementById('target')

const l1 = document.createElement('li')
l1.textContent = 'First item';
target.appendChild(l1);

const l2 = document.createElement('li')
l2.classList.add('my-item');
l2.textContent = 'Second item';
target.appendChild(l2);

const l3 = document.createElement('li')
l3.textContent = 'Third item';
target.appendChild(l3);
