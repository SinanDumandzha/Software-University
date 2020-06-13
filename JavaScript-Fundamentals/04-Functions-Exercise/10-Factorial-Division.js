function getFactorialDivison(firstNumber, secondNumber) {

    let firstFactorial = getFactorial(firstNumber);
    let secondFactorial = getFactorial(secondNumber);
    let divideResult = getDivide(firstFactorial, secondFactorial);

    console.log(divideResult);

    function getFactorial(num) {
        if (num < 0) {
            return -1;
        } else if (num == 0) {
            return 1;
        } else {
            return (num * getFactorial(num - 1));
        }
    }

    function getDivide(firstNum, secondNum) {
        return (firstNum / secondNum).toFixed(2);
    }
}

getFactorialDivison(6, 2);