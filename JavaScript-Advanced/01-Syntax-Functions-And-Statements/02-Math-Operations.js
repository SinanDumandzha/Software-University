function calculateResult(firstNumber, secondNumber, operator) {
    let number1 = Number(firstNumber);
    let number2 = Number(secondNumber);
    let result = 0;
    let isOperatorValid = true;

    switch (operator) {
        case '+':
            result = number1 + number2;
            break;

        case '-':
            result = number1 - number2;
            break;

        case '*':
            result = number1 * number2;
            break;

        case '/':
            result = number1 / number2;
            break;

        case '%':
            result = number1 % number2;
            break;

        case '**':
            result = number1 ** number2;
            break;

        default:
            isOperatorValid = false;
            console.log('Error! Unknown operator.');
            break;
    }

    if (isOperatorValid) {
        console.log(result);
    }
}

calculateResult(3, 5.5, '*');