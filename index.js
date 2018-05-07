document.addEventListener('DOMContentLoaded', function() {

  var keypad = document.querySelector('.calculator-keypad');
  var outputText = document.querySelector('.calculator-outputview-output');

  keypad.addEventListener('click', function(event){
    outputText.textContent = event.target.textContent;
  });

  document.addEventListener('keypress', function(event) {
    outputText.textContent = event.key;

  });




  // TODO:
  // Compute math equaltion
    // Store value when input is computational value

  // TODO:
  // Print result to output window
    // Update output window as you go
    // Output final result
});