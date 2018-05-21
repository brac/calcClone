(function() {

  const Calculator = function (element) {
    this.element = element;
    let displayNumber = 0;
    let stack = [];
    let fontSize = 3;

    this.keypad = element.querySelector('.calculator-keypad');
    const outputTextEl = element.querySelector('.calculator-outputview-output');

    this.input = function(key){
      console.log(`I will do a thing with ${key}`);
    };

    this.clear = function(key){
      displayNumber = '';
      updateOutput(0);
      stack = [];
    };

    this.addDisplayInput = function(stack, operator) {
      stack.push(parseInt(displayNumber), operator);
    };

    this.solve = function(stack) {
      console.log(`I will solve this ${stack}`);
    };

    this.updateOutputView = function(number){

    };

    // TODO: Get clicks working
    // TODO: Update display
    // TODO: Preform Computations
    /*keypad.addEventListener('click', function(event) {
      this.input(event.target.textContent);
    });*/
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
    for (let calc of calculators) {
      calc.keypad.addEventListener('click', function(event) {  //Why u mad jshint?
        calc.input(event.target.textContent);
      });
    }

    // Send any key presses to the active calc
    document.addEventListener('keypress', function(event){
      focusedCalculator.input(event.key);
    });
  });
})();