function operations(firstNumber, secondNumber, operator) {

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    let result = 0;
    let oddOrEven = '';

    

    if (operator === '+') {
        result = firstNumber + secondNumber;

        if (result % 2 === 0) {
            oddOrEven = 'even';

        } else {
            oddOrEven = 'odd';
        }
        console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} - ${oddOrEven}`);
    }

    if (operator === '-') {
        result = firstNumber - secondNumber;

        if (result % 2 === 0) {
            oddOrEven = 'even';

        } else {
            oddOrEven = 'odd';
        }
        console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} - ${oddOrEven}`);
    }

    if (operator === '*') {
        result = firstNumber * secondNumber;

        if (result % 2 === 0) {
            oddOrEven = 'even';

        } else {
            oddOrEven = 'odd';
        }
        console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} - ${oddOrEven}`);
    }

    if (operator === '/') {

        if (secondNumber === 0) {
            console.log(`Cannot divide ${firstNumber} by zero`);

        } else {

            result = firstNumber / secondNumber;

            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result.toFixed(2)}`);
        }
    }

    if (operator === '%') {

        if (secondNumber === 0) {
            console.log(`Cannot divide ${firstNumber} by zero`);

        } else {

            result = firstNumber % secondNumber;

            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
        }
    }
}

operations('0', '0', '*');