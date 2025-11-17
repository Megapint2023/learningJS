'use strict';

const trigger = document.querySelector('#trigger');
const target = document.querySelector('#target');

function A(evt){
  target.src = 'img/picB.jpg';
}

function B(evt){
  target.src = 'img/picA.jpg';
}

trigger.addEventListener('mouseover', A);
trigger.addEventListener('mouseout', B);
