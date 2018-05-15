/**
 * @fileoverview A simple calculator clone using Javascript
 * and HTML. This calculator was an exercise and does not adhere
 * to proper order of operatrions. It also has numerous
 * bugs when enter some combinations of repetitive operators.
 */

(function() {
  /**
  * High level variables to be used by the calulator:
  * keypad will be buttons which the user will click or press
  * outputTextEl will be the display window which will update
  * fontSize will be the size of the font in the display window
  * displayNumber will be the last number the user has entered
  * history will be the overall state of the equation entered
  */

  let keypad = '';
  let outputTextEl = '';
  let fontSize = '';
  let displayNumber = '';
  let history = [];

  /**
  * Listen for DOM Ready, attaches event listeners on the keypad and keyboard
  *
  * @fires addEventListener
  */
  document.addEventListener('DOMContentLoaded', function() {
    keypad = document.querySelector('.calculator-keypad');
    outputTextEl = document.querySelector('.calculator-outputview-output');

    /**
    * Listen for keyclick
    *
    * @event addEventListener
    * @type {object}
    */
    keypad.addEventListener('click', function(event) {
      calculatorInput(event.target.textContent);
    });

    /**
    * Listen for keypress
    *
    * @event addEventListener
    * @type {object}
    */
    document.addEventListener('keypress', function(event) {
      calculatorInput(event.key);
    });
  });

  /**
  * calculatorInput records the last key pressed. If it is a number then
  * The key is added to displayNumber and the display is updated.
  * Else if it is one of the operators then the key is normalized to
  * match the HTML ids and fed through a swtich statment.
  *
  * @function calculatorInput
  * @param {string} key The last key clicked or pressed for user input
  */
  function calculatorInput(key) {
    if (/[0-9]|\./.test(key)) {
      keyFlash(key);
      displayNumber += key;
      updateOutputView(displayNumber);

    } else if (/\/|\*|-|\+|Enter|AC|c|=|\.|_|%|÷|×/.test(key)) {
      if (key == 'AC')  key = 'c';
      if (key == 'Enter') key = '=';
      if (key == '*') key = '×';
      if (key == '/') key = '÷';
      if (key == '+/-') key = '_';

      /** Clear the history and reset to 0 */
      keyFlash(key);
      switch (key) {
        case 'c':
          calculator.clear();
          break;

        case '+':
          if (displayNumber == '') {
            break;
          }

          /** Add the current value of dispalyNumber and + to the history */
          calculator.addInput(history, '+');
          break;

        case '-':
          if (displayNumber == '') {
            break;
          }

          /** Add the current value of dispalyNumber and - to the history */
          calculator.addInput(history, '-');
          break;

        case '÷':
          if (displayNumber == '') {
            break;
          }

          /** Add the current value of dispalyNumber and / to the history */
          calculator.addInput(history, '/');
          break;

        case '×':
          if (displayNumber == '') {
            break;
          }

          /** Add the current value of dispalyNumber and * to the history */
          calculator.addInput(history, '*');
          break;

        /** Toggle a negative symbol on the displayNumber */
        case '_':
          if (displayNumber[0] == '-') {
            displayNumber = displayNumber.slice(1);

            updateOutputView(displayNumber);
            break;
          }

          displayNumber = `-${displayNumber}`;
          updateOutputView(displayNumber);
          break;

        /** Determin the % of the first value in the history */
        case '%':
          history.push(parseInt(displayNumber), '%');
          let percent = quickSolve(history);
          percent = percent / 100;
          updateOutputView(percent);
          break;

        case '=':
          /**
          * If an operator was pressed before = then preform
          * the operation of that value on itself. i.e 6+=(12)
          */
          if (displayNumber == '') {
            let value = history[0];
            lastOperator = history[history.length-1];

            let result = calculator.solve(
                [history[0], lastOperator, history[0]]);
            updateOutputView(result);
            break;
          }
          /**
          * Add the current display number to this history and solve the
          * state and update output view
          */
          history.push(parseInt(displayNumber));
          let result = calculator.solve(history);
          displayNumber = result;
          updateOutputView(result);
          break;
      }
    }
  }

  /**
  * Calculator object that holds various helper methods.
  */
  const calculator = {
    /**
    * Clears the history and resets the view to 0
    *
    * @method clear
    */
    clear: function() {
      displayNumber = '';
      updateOutputView('0');
      history = [];
    },

    /**
    * @method addInput Add the current display number to the provided history
    *    array as well as the operator. Resets the display number to allow
    *    for further input
    * @param {array} history The state of the calculator
    * @param {string} operator Operator that is associated with the value
    */
    addInput: function (history, operator) {
     history.push(parseInt(displayNumber), operator);

     if (history.length > 3) {
       updateOutputView(quickSolve(history));
     }
     displayNumber = '';
    },

    /**
    * @method solve Solves the provided array
    * @param array {array} The history statck, presumed to be a series of
    *    integers and operators, alternating
    * @returns {number}
    */
    solve: function(array) {
      /* Preserve the original array */
      let arrayEquation = array.slice();

      /* If the last key pressed was an operator, identify that operator */
      if ((arrayEquation[arrayEquation.length-1] == '')) {
        let operator = arrayEquation[arrayEquation.length-2];
      }

      /* Set the starting number */
      currentNumber = arrayEquation[0];

      /* Remove the starting number */
      arrayEquation.shift();

      /* Seperate the equations into pairs, [operator value] */
      const equations = createGroupedEquations(arrayEquation, 2);

      /**
      * Iterate over each group of [operator, value]s, determining the
      * operator and applying the provided value to the currentNumber
      */
      for (let i = 0; i < equations.length; i++) {
        switch (equations[i][0]) {
          case '+':
            currentNumber = add(currentNumber, equations[i][1]);
            break;

          case '-':
            currentNumber = subtract(currentNumber, equations[i][1]);
            break;

          case '/':
            currentNumber = divide(currentNumber, equations[i][1]);
            break;

          case '*':
            currentNumber = multiply(currentNumber, equations[i][1]);
            break;
        }
      }
      displayNumber = '';
      return currentNumber;
    },
  };

  /**
  *
  * @function quickSolve Solves the history and updates the outputview
  *    as the user is inputing the next operator and value pair
  * @param history {array} The history of user input, in alternating value
  *    operator sequence
  * @returns {number}
  */
  function quickSolve(history) {
    let historyArray = history.slice();
    let solved;

    /* If the history is >= 3 then it has an operator at the end,
    *    remove that.
    */
    if (history.length >= 3) {
      historyArray.pop();
      solved = calculator.solve(historyArray);
    }
      solved = calculator.solve(historyArray);
      return solved;
  }

  /**
  *
  * @function updateOutputview Updates the output view with the result of a
  *  computation
  * @param number {number} The number to appear on the output view
  */
  function updateOutputView(number) {
    if (fontSize == '') {
      fontSize = '3';
    }

    /* Decrease font size as number increases length*/
    if (displayNumber.length > 8) {
      if (fontSize > 0.5) {
        fontSize -= 0.25;
        fontSize = Math.round(fontSize * 100) / 100;
        outputTextEl.style.fontSize = `${fontSize}em`;
      }
    }
    outputTextEl.textContent = number;
  }

  /**
  * @function keyFlash Flashes the key pressed form the keyboard
  * @param key {number} The coorosponding key to HTML element
  */
  function keyFlash(key) {
    const el = document.querySelector(`[id='${key}']`);
    el.classList.add(
      'calculator-keypad-inputkeys-numberkeys-numberkey-flash');

    setTimeout(function() {
      el.classList.remove(
        'calculator-keypad-inputkeys-numberkeys-numberkey-flash');
    }, 100);
  }

  /**
  * @function add the Add function
  * @returns number
  */
  function add(num1, num2) {
    let result = num1 + num2;
    return result;
  }

  /**
  * @function subtract the Subtract function
  * @returns number
  */
  function subtract(num1, num2) {
   let result = num1 - num2;
   return result;
  }

  /**
  * @function divide the Divide function
  * @returns {number}
  */
  function divide(num1, num2) {
    let result = num1 / num2;
    return result;
  }

  /**
  * @function multiply the Multiply function
  * @returns {number}
  */
  function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }

  /**
  * @function createGroupedEquations A helper function to seperate
  *     the history into value-operator pairs for easy computation
  * @param (array) {array} The original history array
  * @param (chunkSize) {number} The intended size of the groups. This
  *     will always be 2
  * @returns {array}
  */
  function createGroupedEquations(array, chunkSize) {
    let groups = [];

    for (let i =0; i < array.length; i += chunkSize) {
      groups.push(array.slice(i, i + chunkSize));
    }

    return groups;
  }
})();