function add(number) {
  return `You passed ${number}`;
}

document.addEventListener('DOMContentLoaded', function() {

  var keypad = document.querySelector('.calculator-keypad');
  var outputText = document.querySelector('.calculator-outputview-output');
  var input = '';

  // TODO: Combine the click and keypress
  keypad.addEventListener('click', function(event){

    input += event.target.textContent;
    if (input.length > 8) {
      console.log('too big!');
      outputText.style.fontSize = '2em';
    }
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