(function() {
  const Calculator = function (element) {
    this.element = element;
    this.displayNumber = '';
    this.stack = [];
    this.fontSize = 3;
    this.keypad = element.querySelector('.calculator-keypad');
    this.outputTextEl = element.querySelector('.calculator-outputview-output');
  };

  Calculator.prototype.quickSolve = function() {
    let historyArray = this.stack.slice();
    let solved;

    if (this.stack.length >= 3) {
      historyArray.pop();
    }
    solved = this.solve(historyArray);
    return solved;
  };

  Calculator.prototype.solve = function(array) {
    let arrayEquation = array.slice();

    if ((arrayEquation[arrayEquation.length-1] == '')) {
      let operator = arrayEquation[arrayEquation.length-2];
    }

    let currentNumber = arrayEquation[0];
    arrayEquation.shift();
    const equations = this.createGroupedEquations(arrayEquation, 2);

    for (let i = 0; i < equations.length; i++) {
      switch (equations[i][0]) {
        case '+':
          currentNumber = this.add(currentNumber, equations[i][1]);
          break;

        case '-':
          currentNumber = this.subtract(currentNumber, equations[i][1]);
          break;

        case '/':
          currentNumber = this.divide(currentNumber, equations[i][1]);
          break;

        case '*':
          currentNumber = this.multiply(currentNumber, equations[i][1]);
          break;
      }
    }
    this.displayNumber = '';
    return currentNumber;
  };

  Calculator.prototype.add = function(num1, num2) {
    let result = num1 + num2;
    return result;
  };

  Calculator.prototype.subtract = function(num1, num2) {
    let result = num1 - num2;
    return result;
  };

  Calculator.prototype.multiply = function(num1, num2) {
    let result = num1 * num2;
    return result;
  };

  Calculator.prototype.divide = function(num1, num2) {
    let result = num1 / num2;
    return result;
  };

  Calculator.prototype.createGroupedEquations = function(array, chunkSize){
    let groups = [];

    for (let i =0; i < array.length; i += chunkSize) {
      groups.push(array.slice(i, i + chunkSize));
    }
    return groups;
  };

  Calculator.prototype.clear = function(){
    this.displayNumber = '';
    this.updateOutputView(0);
    this.stack = [];
  };

  Calculator.prototype.updateOutputView = function(number){
    /** Decrease font size as number increases length during input*/
    if (this.displayNumber.length > 8) {
      if (this.fontSize > 0.5) {
        this.fontSize -= 0.25;
        this.fontSize = Math.round(this.fontSize * 100) / 100;
        this.outputTextEl.style.fontSize = `${this.fontSize}em`;
      }
    }
    this.outputTextEl.textContent = number;
  };

  Calculator.prototype.addInput = function(operator){
    this.stack.push(parseInt(this.displayNumber), operator);

    if (this.stack.length > 3) {
      this.updateOutputView(this.quickSolve(this.stack));
    }
    this.displayNumber = '';
  };

  Calculator.prototype.input = function(key){
    if (/[0-9]|\./.test(key)) {
      this.keyFlash(key);
      this.displayNumber += key;
      this.updateOutputView(this.displayNumber);
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
          if (this.displayNumber == '') {
            break;
          }

          this.addInput('+');
          break;

        case '-':
          if (this.displayNumber == '') {
            break;
          }

          this.addInput('-');
          break;

        case '÷':
          if (this.displayNumber == '') {
            break;
          }

          this.addInput('/');
          break;

        case '×':
          if (this.displayNumber == '') {
            break;
          }

          this.addInput('*');
          break;

        case '_':
          if (this.displayNumber[0] == '-') {
            this.displayNumber = this.displayNumber.slice(1);

            this.updateOutputView(this.displayNumber);
            break;
          }

          this.displayNumber = `-${this.displayNumber}`;
          this.updateOutputView(this.displayNumber);
          break;

        case '%':
          this.stack.push(parseInt(this.displayNumber), '%');
          let percent = this.quickSolve(this.stack);
          percent = percent / 100;
          this.updateOutputView(percent);
          break;

        case '=':
          if (this.displayNumber == '') {
            let value = this.stack[0];
            const lastOperator = this.stack[this.stack.length-1];

            let result = this.solve([this.stack[0], lastOperator, this.stack[0]]);
            // let result = this.solve([stack[0], lastOperator, stack[0]]);
            this.updateOutputView(result);
            break;
          }
          this.stack.push(parseInt(this.displayNumber));
          let result = this.solve(this.stack);
          this.updateOutputView(result);
          break;
      }
    }
  };

  Calculator.prototype.keyFlash = function(key)  {
    const el = this.element.getElementsByClassName(key)[0];
      el.classList.add(
        'calculator-keypad-inputkeys-numberkeys-numberkey-flash');

      setTimeout(function() {
        el.classList.remove(
          'calculator-keypad-inputkeys-numberkeys-numberkey-flash');
      }, 100);
  };

  document.addEventListener('DOMContentLoaded', function() {
    const calculatorElements = document.querySelector('.pagewrap').children;
    const calculator1 = new Calculator(calculatorElements[0]);
    const calculator2 = new Calculator(calculatorElements[1]);
    const calculators = [calculator1, calculator2];
    let focusedCalculator = calculator1;

    calculator1.element.addEventListener('click', function(event) {
      if (calculator1.element.classList.contains('unfocused')) {
        calculator1.element.classList.remove('unfocused');
        calculator2.element.classList.add('unfocused');
        focusedCalculator = calculator1;
      }
    });

    calculator2.element.addEventListener('click', function(event) {
      if (calculator2.element.classList.contains('unfocused')) {
        calculator2.element.classList.remove('unfocused');
        calculator1.element.classList.add('unfocused');
        focusedCalculator = calculator2;
      }
    });

    Array.from(calculators).forEach(calc => {
      calc.keypad.addEventListener('click', function(event) {
        calculator1.input(event.target.textContent);
      });
    });

    document.addEventListener('keypress', function(event){
      focusedCalculator.input(event.key);
    });
  });
})();