/* REMAINING AGENDA
  1. Operator Converter Function 
   (+, -, *, /) ===> (+, -, ×, ÷/)
  
  2. Find & Fix Bugs/Errors
*/

let display = document.querySelector("#display");
let  operatorButtons = document.getElementsByClassName("operator"); 

// display input numbers
function displayInputNum(btnValue) {
  if (btnValue === '.' && display.value.includes('.')) return;
  return (display.value === '0' || display.value === 'Error') ?  display.value = btnValue : display.value += btnValue;
}

// display input operators
function displayInputOp(inputOp) {
  display.value += inputOp
}

// clear all 
function allClear() {
  display.value = '0';
}

// clear recent entry
function clearEntry() { 
  if (display.value !== '0') 
    display.value = display.value.toString().slice(0, -1);

  if (display.value === '' || display.value === '+' ||  display.value === '-' ||  display.value === '*' ||  display.value === '/')
  display.value = display.value = '0';
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
  display.value = display.value - (display.value * 2);
}
