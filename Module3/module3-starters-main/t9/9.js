'use strict';

const input = document.getElementById('calculation');
const button = document.getElementById('start');
const result = document.getElementById('result');

button.addEventListener("click", function () {
  const text = input.value.trim();
  let num1, num2, anwser;

  if (text.includes('+')) {
     const parts = text.split("+");
     num1 = parseInt(parts[0]);
     num2 = parseInt(parts[1]);
     anwser = num1 + num2;
  }
  else if (text.includes('-')) {
       const parts = text.split("-");
       num1 = parseInt(parts[0]);
       num2 = parseInt(parts[1]);
       anwser = num1 - num2;
  }
  else if (text.includes('*')) {
       const parts = text.split("*");
       num1 = parseInt(parts[0]);
       num2 = parseInt(parts[1]);
       anwser = num1 * num2;
  }
  else if (text.includes('/')) {
    const parts = text.split("/");
    num1 = parseInt(parts[0]);
    num2 = parseInt(parts[1]);
    anwser = num1 / num2;

  }
  else {
    result.textContent = "Error, check input";
    return;
  }
  result.textContent = "Result:" + anwser;
});
  /*
function operate(num1, num2, operation) {
  let result;
  if (operation === '+') {
    result = num1 + num2;
  }
  else if (operation === '-') {
    result = num1 - num2;
  }
  else if (operation === '/') {
    result = num1 * num2;
  }
  else if (operation === '*') {
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
*/

/*
Also: no need to support decimal numbers, calculating integers is enpugh
PLAN:

HTML has 1 input field in element <input>
input id:"calculation"
type: "text"
placeholder:"enter calculation"

BUTTON:
id:"start"

<p>
id:"result"

LOGIC: Probably integer(operation)integer
If +, -, /, * between integers = determinates the operation done

ADDITIONAL:
incloudes + split method mothods are now allowed to be used
eval() function is prohibited
 */
/*
Open t9 folder in your IDE/editor.
This is continuation to previous task.
There is only one text field left, where the user writes the calculation:
(addition, subtraction, multiplication or division).
You can use the includes and split methods.
eval() function is prohibited.
No need to support decimal numbers, calculating integers is enough.
Example inputs: 3+5, 2-78, 3/6, etc...
 */