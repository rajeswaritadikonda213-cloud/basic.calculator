function calculate() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operation = document.getElementById('operation').value;
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById('result').innerText = "⚠️ Please enter valid numbers.";
    return;
  }

  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num2 === 0 ? "Error: Cannot divide by zero." : num1 / num2;
      break;
    case 'power':
      result = Math.pow(num1, num2);
      break;
  }

  document.getElementById('result').innerText = `Result: ${result}`;
}
