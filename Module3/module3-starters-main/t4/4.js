'use strict';

const target = document.getElementById('target')

const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

for (const student of students) {
    const value = document.createElement('option');
    value.value = student.id;
    value.textContent = student.name;
    target.appendChild(value);
}
