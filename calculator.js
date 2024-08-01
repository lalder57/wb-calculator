// CODE HERE

// Addition operation
function addNums(num1, num2) {
  return (Number(num1) + Number(num2));
}

addNums("1", 2);

// Subraction operation
function subtractNums(num1, num2) {
  return (Number(num1) - Number(num2));
}

subtractNums(3, 7);

// Multiplication operation
function multiplyNums(num1, num2) {
  return (+num1 * +num2);
}

multiplyNums(2, 2);

// Division operation
function divideNums(num1, num2) {
  return (+num1 / +num2);
}

divideNums(6, 3);

// Power operation
function powerNums(num1, num2) {
  return ((+num1) ** (+num2));
}

powerNums(7, 2);

// Mod operation
function modNums(num1, num2) {
  return (+num1 % +num2);
}

modNums(10, 2);

// Square root operation
function sqrtNum(num1) {
  return (Math.sqrt(+num1));
}

sqrtNum(25);



function calculate(expression) {
  const tokens = expression.split(' ');
  
  const num1 = Number(tokens[0]);
  const operator = tokens[1];
  const num2 = Number(tokens[2]);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    alert ("You have entered an invalid number. Please try again.");
    return;
  }

  if (operator === '+') {
    return addNums(num1, num2);
  }

  if (operator === '-') {
    return subtractNums(num1, num2);
  }

  if (operator === '*') {
    return multiplyNums(num1, num2);
  }

  if (operator === '/') {
    return divideNums(num1, num2);
  }

  if (operator === '**') {
    return powerNums(num1, num2);
  }

  if (operator === '%') {
    return modNums(num1, num2);
  }

  if (operator === 'Math.sqrt') {
    return sqrtNum(num1);
  }

}

/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});
