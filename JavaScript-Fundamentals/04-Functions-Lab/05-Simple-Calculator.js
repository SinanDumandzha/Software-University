function calculator (firstNumber, secondNumber, operator) {
    let operation = null;

    switch (operator) {
        case 'multiply':
        operation = (a, b) => a * b;   
        break;
        case 'divide':
        operation = (a, b) => a / b;   
        break;
        case 'add':
        operation = (a, b) => a + b;   
        break;
        case 'subtract':
        operation = (a, b) => a - b;   
        break;
    }
    
    let result = operation(firstNumber, secondNumber);

    console.log(result);
}

calculator(40, 8, 'divide');