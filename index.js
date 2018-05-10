
// TODO: Add JSDoc annotations
// TODO: Disable drag effect on keys
// TODO: Add Flash when key typed

// TODO: Function Keys
  // /
  // x
  // -
  // +
  // =

// TODO: Adjust Keys
  // +/-
  // %

// TODO: Compute math equaltion
  // Store value when currentNumber is computational value


(function() {
  let keypad = '';
  let outputText = '';
  let fontSize = '';
  let oldNumber = '';
  let resultNumber = '';
  let currentNumber = '';

  document.addEventListener('DOMContentLoaded', function() {
    keypad = document.querySelector('.calculator-keypad');
    outputText = document.querySelector('.calculator-outputview-output');

    keypad.addEventListener('click', function(event){
      calculator(event.target.textContent);
    });

    document.addEventListener('keypress', function(event) {
      if (/[0-9]/.test(event.key)) {
        calculator(event.key);
      } else if (/\/|\*|\-|\+|Enter|a|=/.test(event.key)) {

        switch (event.key) {
          case 'a':
            oldNumber = '';
            updateOutputView('0');
            break;

          case '+':
            if (oldNumber == '') {
              oldNumber = currentNumber;
              currentNumber = '';
              break;
            }


            resultNumber = add(oldNumber, currentNumber);
            console.log({oldNumber, currentNumber, resultNumber});

            oldNumber = resultNumber;
            currentNumber = '';
            updateOutputView(resultNumber);
        }
      }
    });
  });

  function calculator(key) {
    // Add the last key pressed to the display
    currentNumber += key;
    checkOutputViewTextSize();
    updateOutputView(currentNumber);
  }

  function add(oldNumber, currentNumber) {
    // TODO: Seperate current total and new number, return new total
    resultNumber = parseInt(oldNumber) + parseInt(currentNumber);
    return resultNumber;
  }

  function updateOutputView(string) {
    outputText.textContent = string;
  }

  function checkOutputViewTextSize(){
    // Decrease font size as number increases length
    if (fontSize == '') {
      fontSize = '3';
    }

    if (currentNumber.length > 8) {
      if (fontSize > 0.5) {
        fontSize -= 0.25;
        fontSize = Math.round(fontSize * 100) / 100;
        outputText.style.fontSize = `${fontSize}em`;
      }
    }
  }
})();