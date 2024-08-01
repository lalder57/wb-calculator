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

// Factorial operation
function factorialNum(num1) {
  if (!Number.isInteger(num1) || num1 < 0) {
    alert("Invalid input for factorial");
    return;
  }
  
  let newNum = num1 - 1;
  let result = num1;
  if (num1 === 0 || num1 === 1) {
    return 1;
  }
  
  while (newNum > 1) {
    result = result * newNum;
    newNum--;
  }
  console.log(result);
  return result;
}

factorialNum(5);



function calculate(expression) {
  console.log(expression);
  const tokens = expression.split(' ');
  
  let num1;
  let operator;
  let num2;
  // const num1 = Number(tokens[0]);
  // const operator = tokens[1];
  // const num2 = Number(tokens[2]);

  console.log(num1, num2);

  if (tokens.length < 2 || tokens.length > 3) {
    alert("Invalid expression.");
  }

  if (tokens.length === 3) {
    num1 = Number(tokens[0]);
    operator = tokens[1];
    num2 = Number(tokens[2]);
  }
  
  if (tokens.length === 2) {
    operator = tokens[0];
    num1 = Number(tokens[1]);
    
    if (Number.isNaN(num1)) {
      alert ("You have entered an invalid number. Please try again.");
      return;
    }
  }
  
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    alert ("You have entered an invalid number. Please try again.");
    return;
}

// Operator expressions
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

  if (operator === '^') {
    return powerNums(num1, num2);
  }

  if (operator === '%') {
    return modNums(num1, num2);
  }

  if (operator === 'sqrt') {
    return sqrtNum(num1);
  }

  if (operator === '!') {
    return factorialNum(num1);
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
