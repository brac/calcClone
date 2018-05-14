// TODO: Add JSDoc annotations
// TODO: Adjustmnt Keys
  //  +/-
  //  %
// TODO: Function Clicks
  // Divide
  // Multiply
// DONE: Decimle Point, not included in specs
// TODO: Repetitive operations

(function() {
  let keypad = '';
  let outputTextEl = '';
  let fontSize = '';
  let displayNumber = '';
  let history = [];

  document.addEventListener('DOMContentLoaded', function() {
    keypad = document.querySelector('.calculator-keypad');
    outputTextEl = document.querySelector('.calculator-outputview-output');

    keypad.addEventListener('click', function(event){
      calculatorInput(event.target.textContent);
    });

    document.addEventListener('keypress', function(event) {
      calculatorInput(event.key);
    });
  });

  function calculatorInput(key) {
    if (/[0-9]|\./.test(key)) {
      keyFlash(key);
      displayNumber += key;
      updateOutputView(displayNumber);

    } else if (/\/|\*|-|\+|Enter|AC|c|=|\.|_|%|÷|×/.test(key)){
      if (key == 'AC')  key = 'c';
      if (key == 'Enter') key = '=';
      if (key == '*') key = '×';
      if (key == '/') key = '÷';
      if (key == '+/-') key = '_';

      keyFlash(key);

      switch (key) {
        case 'c':
          calculator.clear();
          break;

        case '+':
          history.push(displayNumber, '+');

          if (history.length > 3) {
            quickSolve(history);
          }

          displayNumber = '';
          break;

        case '-':
          history.push(displayNumber, '-');

          if (history.length > 3) {
            quickSolve(history);
          }

          displayNumber = '';
          break;

        case '÷':
          history.push(displayNumber, '/');

          if (history.length > 3) {
            quickSolve(history);
          }

          displayNumber = '';
          break;

        case '×':
          history.push(displayNumber, '*');

          if (history.length > 3) {
            quickSolve(history);
          }

          displayNumber = '';
          break;

        case '_':
          displayNumber = `-${displayNumber}`;
          updateOutputView(displayNumber);
          break;

        case '%':
          history.push(displayNumber, '%');
          console.log(history);
          let percent = quickSolve(history);
          // console.log(percent);
          break;

        case '=':
          history.push(displayNumber);
          calculator.solve(history);
          break;
      }
    }
  }

  const calculator = {
    clear: function() {
      displayNumber = '';
      updateOutputView('0');
      history = [];
    },

    solve: function(array) {
      // Trim up if function key was the last key
      let arrayEquation = array.slice();

      if ((arrayEquation[arrayEquation.length-1] == '')) {
        arrayEquation.pop();
      }

      // Set the starting number
      let result = arrayEquation[0];

      // Remove the starting number and group the equations
      if (arrayEquation.length < 2) {
        console.log(arrayEquation)
      }

        arrayEquation.shift();

      // Seperate the equations into pairs, one function one value
      const equations = createGroupedEquations(arrayEquation, 2);


      // Iterate over each group of [function, value]s, determining the
      // function and applying the provided value to the result
      for (let i = 0; i < equations.length; i++) {
        switch (equations[i][0]){
          case '+':
            result = add(result, equations[i][1]);
            break;

          case '-':
            result = subtract(result, equations[i][1]);
            break;

          case '/':
            result = divide(result, equations[i][1]);
            break;

          case '*':
            result = multiply(result, equations[i][1]);
            break;
        }
      }
      updateOutputView(result);
      displayNumber = '';
    }
  };

  // Method for updating the viewport as values are entered
  function quickSolve(history){
    let historyArray = history.slice();
    let solved;

    if (history.length >= 3) {
      historyArray.pop();
      solved = calculator.solve(historyArray);
    }
      solved = calculator.solve(historyArray);
  }

  function updateOutputView(string) {
    if (fontSize == '') {
      fontSize = '3';
    }

    // Decrease font size as number increases length
    if (displayNumber.length > 8) {
      if (fontSize > 0.5) {
        fontSize -= 0.25;
        fontSize = Math.round(fontSize * 100) / 100;
        outputTextEl.style.fontSize = `${fontSize}em`;
      }
    }
    outputTextEl.textContent = string;
  }

  function keyFlash(key){
    // TODO: Add custom color for function and adjust keys cases
    const el = document.querySelector(`[id='${key}']`);
    el.classList.add(
      'calculator-keypad-inputkeys-numberkeys-numberkey-flash');

    setTimeout(function() {
      el.classList.remove(
        'calculator-keypad-inputkeys-numberkeys-numberkey-flash');
    }, 100);
  }

  function add(num1, num2) {
    let result = parseInt(num1) + parseInt(num2);
    return result;
  }

  function subtract(num1, num2) {
   let result = parseInt(num1) - parseInt(num2);
   return result;
  }

  function divide(num1, num2) {
    let result = parseInt(num1) / parseInt(num2);
    return result;
  }

  function multiply(num1, num2) {
    let result = parseInt(num1) * parseInt(num2);
    return result;
  }

  const createGroupedEquations = function(array, chunkSize) {
    let groups = [];

    for (let i =0; i < array.length; i += chunkSize) {
      groups.push(array.slice(i, i + chunkSize));
    }

    return groups;
  };
})();