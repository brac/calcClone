// TODO: Add JSDoc annotations

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

  function add(num1, num2) {
    let result = parseInt(num1) + parseInt(num2);
    return result;
  }

  const createGroupedEquations = function(array, chunkSize) {
    let groups = [], i;

    for (let i =0; i < array.length;i += chunkSize) {
      groups.push(array.slice(i, i + chunkSize));
    }

    return groups;
  };

  const calculator = {
    addition: function(num1, num2) {
      let result = parseInt(num1) + parseInt(num2);
      return result;
    },

    subtract: function(num1, num2){
      let result = parseInt(num1) - parseInt(num2);
      return result;
    },

    clear: function() {
      displayNumber = '';
      updateOutputView('0');
      history = [];
    },

    solve: function(arrayEquation) {
      let result = 0;


      // Trim up if function key was the last key
      if ((arrayEquation[arrayEquation.length-1] == '')) {
        arrayEquation.pop();
      }

      let startValue = arrayEquation[0];
      arrayEquation.shift();

      const equations = createGroupedEquations(arrayEquation, 2);
      console.log(startValue, equations);






      // for (let i = 0; i <= arrayEquation.length - 1; i++) {
      //   if (parseInt(arrayEquation[i] && arrayEquation[i+2])) {
      //   }
      // }
      return result;
    }
  };

  function calculatorInput(key) {
    if (/[0-9]/.test(key)) {
      keyFlash(key);
      displayNumber += key;
      updateOutputView(displayNumber);

    } else if (/\/|\*|\-|\+|Enter|a|=|\.|_|%/.test(key)){
      keyFlash(key);

      switch (key) {
        case 'a':
          calculator.clear();
          break;

        case '+':
          history.push(displayNumber, '+');
          displayNumber = '';
          // updateOutputView(resultNumber);
          break;

        case '-':
          history.push(displayNumber, '-');
          displayNumber = '';
          break;

        case '/':
          history.push(displayNumber, '/');
          displayNumber = '';
          break;

        case '*':
          history.push(displayNumber, '*');
          displayNumber = '';
          break;

        case 'Enter':
          history.push(displayNumber);
          console.log(calculator.solve(history));
          break;
      }
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