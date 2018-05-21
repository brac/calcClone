// TODO: Preform Computations

(function() {
  const Calculator = function (element) {
    this.element = element;
    let displayNumber = '';
    let stack = [];
    let fontSize = 3;

    this.keypad = element.querySelector('.calculator-keypad');
    const outputTextEl = element.querySelector('.calculator-outputview-output');

    this.keyFlash = function(key){
      console.log(key);
      const el = element.querySelector(`[id='${key}']`);
      el.classList.add(
        'calculator-keypad-inputkeys-numberkeys-numberkey-flash');

      setTimeout(function() {
        el.classList.remove(
          'calculator-keypad-inputkeys-numberkeys-numberkey-flash');
      }, 100);
    };

    this.updateOutputView = function(number){
      /* Decrease font size as number increases length*/
      if (displayNumber.length > 8) {
        if (fontSize > 0.5) {
          fontSize -= 0.25;
          fontSize = Math.round(fontSize * 100) / 100;
          outputTextEl.style.fontSize = `${fontSize}em`;
        }
      }
      outputTextEl.textContent = number;
    };

    this.clear = function(key){
      displayNumber = '';
      this.updateOutputView(0);
      stack = [];
    };

    this.addInput = function(stack, operator) {
     stack.push(parseInt(this.displayNumber), operator);

     if (stack.length > 3) {
       this.updateOutputView(this.quickSolve(stack));
     }
     displayNumber = '';
    };

    const createGroupedEquations = function(array, chunkSize){
      let groups = [];

      for (let i =0; i < array.length; i += chunkSize) {
        groups.push(array.slice(i, i + chunkSize));
      }
      return groups;
    };

    const add = function(num1, num2) {
      let result = num1 + num2;
      console.log(result);
      return result;
    }

    this.quickSolve = function(stack) {
      let historyArray = stack.slice();
      let solved;

      /* If the stack is >= 3 then it has an operator at the end,
      *    remove that.
      */
      if (stack.length >= 3) {
        historyArray.pop();
        solved = this.solve(historyArray);
      }
        solved = this.solve(historyArray);
        return solved;
    };

    this.input = function(key){
      if (/[0-9]|\./.test(key)) {
        this.keyFlash(key);
        displayNumber += key;
        this.updateOutputView(displayNumber);
      } else if (/\/|\*|-|\+|Enter|AC|c|=|\.|_|%|÷|×/.test(key)) {
        if (key == 'AC')  key = 'c';
        if (key == 'Enter') key = '=';
        if (key == '*') key = '×';
        if (key == '/') key = '÷';
        if (key == '+/-') key = '_';

        this.keyFlash(key);

        switch (key) {
          case 'c':
            this.clear();
            break;

          case '+':
            if (displayNumber == '') {
              break;
            }

            /** Add the current value of dispalyNumber and + to the history */
            this.addInput(stack, '+');
            break;

          // case '-':
          //   if (displayNumber == '') {
          //     break;
          //   }

          //   /** Add the current value of dispalyNumber and - to the history */
          //   helpers.addInput(history, '-');
          //   break;

          // case '÷':
          //   if (displayNumber == '') {
          //     break;
          //   }

          //   /** Add the current value of dispalyNumber and / to the history */
          //   helpers.addInput(history, '/');
          //   break;

          // case '×':
          //   if (displayNumber == '') {
          //     break;
          //   }

          //   /** Add the current value of dispalyNumber and * to the history */
          //   helpers.addInput(history, '*');
          //   break;

          // /** Toggle a negative symbol on the displayNumber */
          // case '_':
          //   if (displayNumber[0] == '-') {
          //     displayNumber = displayNumber.slice(1);

          //     updateOutputView(displayNumber);
          //     break;
          //   }

          //   displayNumber = `-${displayNumber}`;
          //   updateOutputView(displayNumber);
          //   break;

          // /** Determin the % of the first value in the history */
          // case '%':
          //   history.push(parseInt(displayNumber), '%');
          //   let percent = quickSolve(history);
          //   percent = percent / 100;
          //   updateOutputView(percent);
          //   break;

          // case '=':
          //   /**
          //   * If an operator was pressed before = then preform
          //   * the operation of that value on itself. i.e 6+=(12)
          //   */
          //   if (displayNumber == '') {
          //     let value = history[0];
          //     lastOperator = history[history.length-1];

          //     let result = helpers.solve(
          //         [history[0], lastOperator, history[0]]);
          //     updateOutputView(result);
          //     break;
          //   }
          //   /**
          //   * Add the current display number to this history and solve the
          //   * state and update output view
          //   */
          //   history.push(parseInt(displayNumber));
          //   let result = helpers.solve(history);
          //   displayNumber = result;
          //   updateOutputView(result);
          //   break;
        }
      }
    };

    this.solve = function(array) {
      /* Preserve the original array */
      let arrayEquation = array.slice();

      /* If the last key pressed was an operator, identify that operator */
      if ((arrayEquation[arrayEquation.length-1] == '')) {
        let operator = arrayEquation[arrayEquation.length-2];
      }

      /* Set the starting number */
      let currentNumber = arrayEquation[0];

      /* Remove the starting number */
      arrayEquation.shift();

      /* Separate the equations into pairs, [operator value] */
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
    };
  };

  document.addEventListener('DOMContentLoaded', function() {
    // Select the calculators
    const calculatorElements = document.querySelector('.pagewrap').children;
    const calculator1 = new Calculator(calculatorElements[0]);
    const calculator2 = new Calculator(calculatorElements[1]);
    const calculators = [calculator1, calculator2];
    let focusedCalculator = calculator1;

    // Focus the element if it is not already focused
    // Set the calc1 to be the focused calc
    calculator1.element.addEventListener('click', function(event) {
      if (calculator1.element.classList.contains('unfocused')) {
        calculator1.element.classList.remove('unfocused');
        calculator2.element.classList.add('unfocused');
        focusedCalculator = calculator1;
      }
    });

    // Focus the element if it is not already focused
    // Set the calc2 to be the focused calc
    calculator2.element.addEventListener('click', function(event) {
      if (calculator2.element.classList.contains('unfocused')) {
        calculator2.element.classList.remove('unfocused');
        calculator1.element.classList.add('unfocused');
        focusedCalculator = calculator2;
      }
    });

    // Send any keypad clicks to the calculator inputs
    calculator1.keypad.addEventListener('click', function(event) {
      calculator1.input(event.target.textContent);
    });

    calculator2.keypad.addEventListener('click', function(event) {
      calculator2.input(event.target.textContent);
    });

    // Send any key presses to the active calc
    document.addEventListener('keypress', function(event){
      focusedCalculator.input(event.key);
    });
  });
})();