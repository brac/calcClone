

document.addEventListener('DOMContentLoaded', function() {
  var keypad = document.querySelector('.calculator-keypad');
  var outputText = document.querySelector('.calculator-outputview-output');
  var input = '';
  var fontSize = outputText.style.fontSize;

  function add(number) {
    return `You passed ${number}`;
  }

  function calculator(event) {
    if (!event.key) {
      input += event.target.textContent;
    } else {
      input += event.key;
    }

    if (fontSize == '') {
      fontSize = '3';
    }

    // Decrease font size as number increases length
    if (input.length > 8) {
      if (fontSize > 0.5) {
        fontSize -= 0.25;
        fontSize = Math.round(fontSize * 100) / 100;
        outputText.style.fontSize = `${fontSize}em`;
      }
    }

    console.log(fontSize);
    outputText.textContent = input;
  }

  keypad.addEventListener('click', function(event){
    calculator(event);
  });

  document.addEventListener('keypress', function(event) {
    calculator(event);
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
    // Store value when input is computational value

  // TODO: Print result to output window
    // Update output window as you go
    // Output final result
});