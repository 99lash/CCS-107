/* REMAINING AGENDA
  1. Operator Converter Function 
   (+, -, *, /) ===> (+, -, ×, ÷/)
  
  2. Continous operation when pressing equal '=' sign
*/

let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let resetScreen = false;

const screenLatest = document.getElementById('latestScreenValue');
const currentScreen = document.getElementById('currentScreenValue');
const operatorBtn = document.getElementsByClassName("operator"); 
const pointBtn = document.getElementById('#point-btn');
const equalsBtn = document.getElementById('equals');
const switchSignBtn = document.getElementById('switch-sign');
const allClearBtn = document.getElementById('ac');
const clearEntryBtn = document.getElementById('ce');
const toPercentageBtn = document.getElementById('percent');

// display input numbers
function displayInputNum(btnValue) {
  if (btnValue === '.' && currentScreen.textContent.includes('.')) return;

  return (currentScreen.textContent === '0' || currentScreen.textContent === 'Error') ?  currentScreen.textContent = btnValue : currentScreen.textContent += btnValue;
}

// display input operators
function displayInputOp(operator) {
  currentScreen.textContent += operator;
}

// clear all 
function allClear() {
  currentScreen.innerText = '0';
  screenLatest.textContent = '0';
}

// clear recent entry
function clearEntry() { 
  if (currentScreen.textContent !== '0') 
    currentScreen.textContent = currentScreen.textContent.toString().slice(0, -1);

  if (currentScreen.textContent === '' || currentScreen.textContent === '+' ||  currentScreen.textContent === '-' ||  currentScreen.textContent === '*' ||  currentScreen.textContent === '/')
  currentScreen.textContent = currentScreen.textContent = '0';
}

// performs calculation
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

// convert to point decimal
function toPercentDec() {
  display.value = (display.value/100); 
}

// switch sign to positive or negative
function switchSign() {
  currentScreen.value = currentScreen.value - (currentScreen.value * 2);
}
