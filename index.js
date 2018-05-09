function add(number) {
  return `You passed ${number}`;
}

document.addEventListener('DOMContentLoaded', function() {
  var keypad = document.querySelector('.calculator-keypad');
  var outputText = document.querySelector('.calculator-outputview-output');
  var input = '';
  var fontSize = outputText.style.fontSize;

  // TODO: Combine the click and keypress
  keypad.addEventListener('click', function(event){
    if (fontSize == '') {
      fontSize = '3';
    }

    input += event.target.textContent;

    // Adjust font size as number increases
    if (input.length > 8) {
      if (fontSize > 0.5) {
        fontSize -= 0.25;
        fontSize = Math.round(fontSize * 100) / 100;
        outputText.style.fontSize = `${fontSize}em`;
      }
    }

    console.log(fontSize);
    outputText.textContent = input;
  });

  document.addEventListener('keypress', function(event) {
    outputText.textContent = event.key;
  });

  // TODO: Make the output get deterministically smaller

  // TODO: Compute math equaltion
    // Store value when input is computational value

  // TODO: Print result to output window
    // Update output window as you go
    // Output final result
});