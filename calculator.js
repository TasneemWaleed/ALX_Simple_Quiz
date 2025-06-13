// Arithmetic functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

// Helper function to get numbers
function getNumbers() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return [number1, number2];
}

// Display result
function showResult(result) {
    document.getElementById('calculation-result').textContent = result;
}

// Event Listeners
document.getElementById('add').addEventListener('click', () => {
    const [n1, n2] = getNumbers();
    showResult(add(n1, n2));
});

document.getElementById('subtract').addEventListener('click', () => {
    const [n1, n2] = getNumbers();
    showResult(subtract(n1, n2));
});

document.getElementById('multiply').addEventListener('click', () => {
    const [n1, n2] = getNumbers();
    showResult(multiply(n1, n2));
});

document.getElementById('divide').addEventListener('click', () => {
    const [n1, n2] = getNumbers();
    showResult(divide(n1, n2));
});
