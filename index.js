// TODO: Add JSDoc annotations
// TODO: Disable drag effect on keys
// TODO: Add Flash when key typed

(function() {
  let keypad = '';
  let outputText = '';
  let currentNumber = '';
  let fontSize = '';

  function add(number) {
    return `You passed ${number} to be added`;
  }

  function calculator(key) {

    // Preform computations
    if (key != parseInt(key) ) {
      switch (key){
        case '+':
          console.log(add(currentNumber));
      }
    } else {
      currentNumber += key;
    }


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

    // Print the new number to the output view
    outputText.textContent = currentNumber;

        // TODO: Function Keys
      // /
      // x
      // -
      // +
      // =

    // TODO: Adjust Keys
      // AC
      // +/-
      // %

    // TODO: Compute math equaltion
      // Store value when currentNumber is computational value
  }

  document.addEventListener('DOMContentLoaded', function() {
    keypad = document.querySelector('.calculator-keypad');
    outputText = document.querySelector('.calculator-outputview-output');
    fontSize = outputText.style.fontSize;

    keypad.addEventListener('click', function(event){
      calculator(event.target.textContent);
    });

    document.addEventListener('keypress', function(event) {
      if (/[0-9]|\/|\*|\-|\+|Enter|a|=/.test(event.key)) {
        console.log('huzzah!');
        calculator(event.key);
      }
    });
  });
})();