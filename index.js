// TODO: Add JSDoc annotations
// TODO: Disable drag effect on keys
// TODO: Add Flash when key typed

// TODO: Function Keys
  // /
  // x
  // -
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
        keyFlash(event.key);

        calculator(event.key);
      } else if (/\/|\*|\-|\+|Enter|a|=|\.|_|%/.test(event.key)) {
        keyFlash(event.key);

        switch (event.key) {
          case 'a':
            oldNumber = '';
            currentNumber = '';
            resultNumber = '';
            updateOutputView('0');
            break;

          // TODO: Fix if + is hit multiple times
          case '+':
            if (oldNumber == '') {
              oldNumber = currentNumber;
              currentNumber = '';
              break;
            }

            resultNumber = add(oldNumber, currentNumber);
            oldNumber = resultNumber;
            currentNumber = '';
            updateOutputView(resultNumber);
            break;
        }
      }
    });
  });

  function keyFlash(key){
    console.log(key);
    const el = document.querySelector(`[id='${key}']`);
    el.classList.add('calculator-keypad-inputkeys-numberkeys-numberkey-flash');

    setTimeout(function() {
      el.classList.remove('calculator-keypad-inputkeys-numberkeys-numberkey-flash');
    }, 100);
  }

  function calculator(key) {
    // Add the last key pressed to the display
    currentNumber += key;
    updateOutputView(currentNumber);
  }

  function add(oldNumber, currentNumber) {
    // TODO: Seperate current total and new number, return new total
    resultNumber = parseInt(oldNumber) + parseInt(currentNumber);
    return resultNumber;
  }

  function updateOutputView(string) {
    checkOutputViewTextSize();
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