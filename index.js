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

// TODO: Determine how to keep value correct when switching to anohter
  // computation. Currently pressing a plus or minus will immediatly
  // preform that operation before getting the new input. Probably calling
  // the computational operation too early

(function() {
  let keypad = '';
  let outputText = '';
  let fontSize = '';
  let oldNumber = '';
  let resultNumber = '';
  let displayNumber = '';

  document.addEventListener('DOMContentLoaded', function() {
    keypad = document.querySelector('.calculator-keypad');
    outputText = document.querySelector('.calculator-outputview-output');

    keypad.addEventListener('click', function(event){
      calculator(event.target.textContent);
    });

    document.addEventListener('keypress', function(event) {

      if (/[0-9]/.test(event.key)) {
        calculator(event.key);

      } else if (/\/|\*|\-|\+|Enter|a|=|\.|_|%/.test(event.key)) {

        keyFlash(event.key);

        switch (event.key) {
          case 'a':
            oldNumber = '';
            displayNumber = '';
            resultNumber = '';
            updateOutputView('0');
            break;

          // TODO: Fix if + is hit multiple times
          case '+':
            if (oldNumber == '') {
              oldNumber = displayNumber;
              displayNumber = '';
              break;
            }

            resultNumber = add(oldNumber, displayNumber);
            oldNumber = resultNumber;
            displayNumber = '';
            updateOutputView(resultNumber);
            break;

          // case '-':
            // if (oldNumber == '') {
              // oldNumber = displayNumber;
              // displayNumber = '';
              // break;
            // }
            //
            // resultNumber = subtract(oldNumber, displayNumber);
            // oldNumber = resultNumber;
            // displayNumber = '';
            // updateOutputView(resultNumber);
            // break;
        }
      }
    });
  });

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

  function calculator(key) {
    // TODO: Move most of the switch statment logic in the key press
    // add even listener to here
    keyFlash(event.key);

    displayNumber += key;
    updateOutputView(displayNumber);
  }

  function add(oldNumber, displayNumber) {
    resultNumber = parseInt(oldNumber) + parseInt(displayNumber);
    return resultNumber;
  }

  function subtract(oldNumber, displayNumber) {
    resultNumber = parseInt(oldNumber) - parseInt(displayNumber);
    return resultNumber;
  }

  function updateOutputView(string) {
    checkOutputViewTextSize();
    outputText.textContent = string;
  }

  function checkOutputViewTextSize(){
    if (fontSize == '') {
      fontSize = '3';
    }

    // Decrease font size as number increases length
    if (displayNumber.length > 8) {
      if (fontSize > 0.5) {
        fontSize -= 0.25;
        fontSize = Math.round(fontSize * 100) / 100;
        outputText.style.fontSize = `${fontSize}em`;
      }
    }

    // TODO: Increase font size as number decreases
  }
})();