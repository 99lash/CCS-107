/* REMAINING AGENDA
  1. convert operators into [+, -, x, ÷]
  2. no multiple operators after operator [3+++, 4---5, 5****6]
*/

let screenDisplay = document.querySelector("#display");
let operatorButtons = document.getElementsByClassName("operator"); 
let lastOperator = null;
let lastOperand = null;
let lastEval = '';

// display input numbers
function displayInputNum(btnValue) {
  lastOperand = btnValue;
  if (screenDisplay.value === '0' || screenDisplay.value === 'Error' || lastEval ) {
    lastEval = '';
    screenDisplay.value = btnValue;
  }
  else
    screenDisplay.value += btnValue;
}

// display input operators
function displayInputOp(inputOp) {
  lastOperator = inputOp;
  screenDisplay.value += inputOp;
}

// display point .
function pointBtn(btnValue) {
  if (btnValue === '.' && screenDisplay.value.includes('.')) return;
  
  (screenDisplay.value === '0' || screenDisplay.value === 'Error' || screenDisplay.value === 'NaN') ? screenDisplay.value = btnValue : screenDisplay.value += btnValue;
}


// clear all 
function allClear() {
  screenDisplay.value = 0;
}

// clear recent entry
function clearEntry() { 
  if ( screenDisplay.value === 'NaN' || screenDisplay === 'Error')
    screenDisplay.value = 0;

  if (screenDisplay.value !== '0' ) 
    screenDisplay.value = screenDisplay.value.toString().slice(0, -1);

  switch (operatationScreenDisplay.value) {
    
  }
}

// performs calculation
function calculate(){
  if (eval(screenDisplay.value) == eval(lastEval)){
      screenDisplay.value += lastOperator;
      screenDisplay.value += lastOperand;
      screenDisplay.value = eval(screenDisplay.value);
  }else{
      try{
          screenDisplay.value = eval(screenDisplay.value);
          lastEval = eval(screenDisplay.value);
      }
      catch(error){
          screenDisplay.value = 'Error';
      }
  }
}

// convert to point decimal
function toPercentDec() {
  screenDisplay.value = (screenDisplay.value/100); 
}

// switch sign to positive or negative
function switchSign() {
  screenDisplay.value = screenDisplay.value - (screenDisplay.value * 2);
  // (screenDisplay.value < 0) ? screenDisplay.value = Math.abs(screenDisplay.value) : screenDisplay.value = (-screenDisplay.value);
}