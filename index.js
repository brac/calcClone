// TODO: Add JSDoc annotations

// TODO: Function Keys
  // /
  // x
  // -
  // =

// TODO: Adjust Keys
  // +/-
  // %

// TODO: Refactor

(function() {
  let keypad = '';
  let outputTextEl = '';
  let fontSize = '';
  let oldNumber = '0';
  let currentNumber = '';
  let resultNumber = '0';
  let displayNumber = '';

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

  const calculator = {
    addition: function(num1, num2) {
      result = parseInt(num1) + parseInt(num2);
      return result;
    },

    subtract: function(num1, num2){
      result = parseInt(num1) - parseInt(num2);
      return result;
    },

    clear: function() {
      oldNumber = '';
      displayNumber = '';
      resultNumber = '';
      updateOutputView('0');
    },
  };

  function calculatorInput(key) {
    if (/[0-9]/.test(key)) {
      keyFlash(key);
      displayNumber += key;
      updateOutputView(displayNumber);

    } else if (/\/|\*|\-|\+|Enter|a|=|\.|_|%/.test(key)){
      keyFlash(key);

      // Isolate three numbers, the oldNumber, the CurrentNumber/DisplayNumber
      // and the resultNumber. With these you may be able to better control
      // the state.


      switch (key) {
        case 'a':
          calculator.clear();
          break;

        case '+':
          currentNumber = displayNumber;
          resultNumber = calculator.addition(oldNumber, currentNumber);
          updateOutputView(resultNumber);
          console.log(resultNumber);
          oldNumber = resultNumber;
          displayNumber = '';
          break;

        case 'Enter':
          console.log(resultNumber);
          updateOutputView(resultNumber);
          displayNumber = '';
          oldNumber = '0';
          break;
      }








      //   case 'Enter':
      //     console.log(resultNumber);
      //     updateOutputView(resultNumber);
      //     break;

      //   case '+':
      //     if (currentNumber == '') {
      //       currentNumber = displayNumber;
      //       displayNumber = '';
      //       break;
      //     }

      //     if (resultNumber == '') {
      //       resultNumber = currentNumber;
      //     }

      //     displayNumber = ''; //Reset for next input
      //     resultNumber = calculator.addition(currentNumber, resultNumber);
      //     updateOutputView(resultNumber);
      //     oldNumber = resultNumber;
      //     break;
      // }
    }
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
})();