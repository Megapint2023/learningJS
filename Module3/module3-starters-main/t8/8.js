'use strict';
/*
id: num1
id: num2
id: operation
id: button
id: result
*/
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const operation = document.getElementById('operation');
const button = document.getElementById('start');
const result = document.getElementById('result');
/*
addition
subtraction
multiplication
division
----------------------------
const addition = num1 + num2;
const subtraction = num1 - num2;
const multiplication = num1 * num2;
const division = num1 / num2;
*/

function operate(num1, num2, operation) {
  let result;
  if (operation === 'add') {
    result = num1 + num2;
  }
  else if (operation === 'sub') {
    result = num1 - num2;
  }
  else if (operation === 'multi') {
    result = num1 * num2;
  }
  else if (operation === 'div') {
    result = num1 / num2;
  }
  return result;
}

button.onclick = function () {
  const number1 = Number(num1.value);
  const number2 = Number(num2.value);
  const selection = operation.value
  const calculation = operate(number1, number2, selection);
  result.textContent = calculation;
};

/*
button.addEventListener('click', function () {
  const number1 = Number(num1.value);
  const number2 = Number(num2.value);
  const selection = operation.value;
  result.textContent = calculation;
})
*/

/*
Open t8 folder in your IDE/editor.
Make a simple calculator.
There are two input fields where user enters numbers.
Based on the drop-down list, calculator performs addition,
subtraction, multiplication or division of these two numbers.
Use the value attribute of <option> elements to decide
which operation the calculator needs to do.
Example:
Show the result in <p id="result"> when the button is clicked.
*/