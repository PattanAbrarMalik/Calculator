// CALCULATOR PROGRAM

// Function to append a value to the display
function appendToDisplay(value) {
  const displayElement = document.getElementById('display');
  if (displayElement) {
      displayElement.value += value;
  } else {
      console.error('Element with id "display" not found.');
  }
}

// Function to calculate the expression in the display
function calculate() {
  const displayElement = document.getElementById('display');
  if (displayElement) {
      try {
          displayElement.value = eval(displayElement.value);
      } catch (e) {
          console.error('Invalid expression');
      }
  } else {
      console.error('Element with id "display" not found.');
  }
}

// Function to clear the display
function clearDisplay() {
  const displayElement = document.getElementById('display');
  if (displayElement) {
      displayElement.value = '';
  } else {
      console.error('Element with id "display" not found.');
  }
}
