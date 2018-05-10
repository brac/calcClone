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
  let currentNumber = '';
  let fontSize = '';

  function add(number) {
    // TODO: Seperate current total and new number, return new total
    // currentTotal = parseInt(currentNumber);
    // number = parseInt(number);
    // let newTotal = currentTotal + number;
    // return newTotal;

    return "A computation will be preformed";
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
    // TODO: Make the font size go back up if the numbers reduce
  }

  function calculator(key) {
    // Determine if function key or number key
    if (isNaN(parseInt(key))) {
      // TODO: Do some computations based on key pressed
      switch (key){
        case 'a':
        case'AC':
          updateOutputView('0');
          currentNumber = '';
          break;
        default:
          console.log(add(currentNumber));
          break;
      }
    } else {
      // Add the last key pressed to the display
      currentNumber += key;
      checkOutputViewTextSize();
      updateOutputView(currentNumber);
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    keypad = document.querySelector('.calculator-keypad');
    outputText = document.querySelector('.calculator-outputview-output');

    keypad.addEventListener('click', function(event){
      calculator(event.target.textContent);
    });

// TODO: Make the font size go back up if the numbers reduce
    document.addEventListener('keypress', function(event) {
      if (/[0-9]|\/|\*|\-|\+|Enter|a|=/.test(event.key)) {
        calculator(event.key);
      }
    });
  });
})();