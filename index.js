// TODO: Add JSDoc annotations
// TODO: Disable drag effect on keys

document.addEventListener('DOMContentLoaded', function() {
  let keypad = document.querySelector('.calculator-keypad');
  let outputText = document.querySelector('.calculator-outputview-output');
  let currentNumber = '';
  let fontSize = outputText.style.fontSize;

  function add(number) {
    return `You passed ${number}`;
  }

  function calculator(key) {

    currentNumber += key;

    // If key is not an integer...
    if (key != parseInt(key) ) {

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
  }

  keypad.addEventListener('click', function(event){
    calculator(event.target.textContent);
  });

  document.addEventListener('keypress', function(event) {
    calculator(event.key);
  });

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

  // TODO: Print result to output window
    // Update output window as you go
    // Output final result
});