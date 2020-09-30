function solve() {
    let buttons = document.querySelector('.keys');
    let expressionOutput = document.querySelector('#expressionOutput');
    let resultOutput = document.querySelector('#resultOutput');
    let clearButton = document.querySelector('.clear');

    let expression = '';

    buttons.addEventListener('click', click => {
        let value = click.target.value;

        if (value !== '=') {
            if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].includes(value)) {
                expression += `${value}`
                expressionOutput.textContent = expression;
            } else {
                expression += ` ${value} `;
                expressionOutput.textContent = expression;
            }
        } else {
            let [firstNumber, operator, secondNumber] = expression.split(' ');

            if (secondNumber) {
                let result = {
                    '-': (a, b) => a - b,
                    '+': (a, b) => a + b,
                    '*': (a, b) => a * b,
                    '/': (a, b) => a / b
                } [operator](Number(firstNumber), Number(secondNumber));

                resultOutput.textContent = result;
            } else {
                resultOutput.textContent = 'NaN';
            }
        }
    })

    clearButton.addEventListener('click', e => {
        resultOutput.textContent = '';
        expression = '';
        expressionOutput.textContent = '';
    })
}