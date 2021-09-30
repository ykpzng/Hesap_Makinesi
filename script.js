const btnGroup = document.getElementsByClassName("btn");
const textInput = document.getElementById("input");

for (const btn of btnGroup) {
  btn.addEventListener("click", inputWrite);
}

let num1=0, num2=0, counter=0;

function inputWrite(e) {
  if (e.target.id === 'percent' || e.target.id === 'divide' || e.target.id === 'multiply' || e.target.id === 'subtract' || e.target.id === 'add') {
    num1 = textInput.value;
    textInput.value = "";
    switch (e.target.id) {
      case 'percent':
        counter = 1;
        break;
      case 'divide':
        counter = 2;
        break;
      case 'multiply':
        counter = 3;
        break;
      case 'subtract':
        counter = 4;
        break;
      case 'add':
        counter = 5;
        break;
    }
  } else {
    textInput.value += e.target.value;
  }

  if (e.target.id === 'dot') {
    const isDot = textInput.value.split('');
    if (!isDot.includes('.'))
      textInput.value += '.';
  }

  if (e.target.id === 'clear') {
    textInput.value = "";
  }

  if (e.target.id === 'backSpace') {
    textInput.value = textInput.value.slice(0, textInput.value.length - 1);
  }

  if (e.target.id === 'equal') {
    num2 = textInput.value;
    textInput.value = calculate(num1, num2, counter);

  }
}

function calculate(num1, num2, operant) {
  switch (operant) {
    case 1:
      return (num1 * num2) / 100;
    case 2:
      return parseFloat(num1) / parseFloat(num2);
    case 3:
      return parseFloat(num1) * parseFloat(num2);
    case 4:
      return parseFloat(num1) - parseFloat(num2);
    case 5:
      return parseFloat(num1) + parseFloat(num2);
  }
}
