// CALCULATOR HELPERS

const calculator = {
  displayValue: '0',
  firstInput: null,
  waitingForsecondInput: false,
  operator: null,
};

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', function(event) {

  if (!event.target.matches('button')) {
    return;
  }

  switch (event.target.value) {
    case '+':
    case '-':
    case '*':
    case '/':
    case '=':
      handleOperator(event.target.value);
      break;
    case '.':
      inputDecimal(event.target.value);
      break;
    case 'all-clear':
      resetCalculator();
      break;
    default:
      // check if the key is an integer
      if (Number.isInteger(parseFloat(event.target.value))) {
        inputDigit(event.target.value);
      }
  }

  updateDisplay();
});


function updateDisplay() {
  // select the element with class of `calculator-screen`
  const display = document.querySelector('.calculator-screen');
  // update the value of the element with the contents of `displayValue`
  display.value = calculator.displayValue;
}

// updateDisplay();

function inputDigit(digit) {
  const { displayValue, waitingForsecondInput } = calculator;

  if (waitingForsecondInput === true) {
    calculator.displayValue = digit;
    calculator.waitingForsecondInput = false;
  } else {
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
  }
}

function inputDecimal(dot) {
  if (calculator.waitingForsecondInput === true) {
  	calculator.displayValue = '0.'
    calculator.waitingForsecondInput = false;
    return
  }
  // If the `displayValue` property does not contain a decimal point
  if (!calculator.displayValue.includes(dot)) {
    // Append the decimal point
    calculator.displayValue += dot;
  }
}

function handleOperator(nextOperator) {
  const { firstInput, displayValue, operator } = calculator
  const inputValue = parseFloat(displayValue);

  if (operator && calculator.waitingForsecondInput)  {
    calculator.operator = nextOperator;
    return;
  }

  if (firstInput == null && !isNaN(inputValue)) {
    calculator.firstInput = inputValue;
  } else if (operator) {
    const result = calculate(firstInput, inputValue, operator);
    calculator.displayValue = String(result);
    calculator.firstInput = result;
  }

  calculator.waitingForsecondInput = true;
  calculator.operator = nextOperator;
}

function resetCalculator() {
  calculator.displayValue = '0';
  calculator.firstInput = null;
  calculator.waitingForsecondInput = false;
  calculator.operator = null;
}

