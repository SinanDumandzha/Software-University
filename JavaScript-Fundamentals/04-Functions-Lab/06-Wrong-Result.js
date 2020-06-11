function findPositiveOrNegativeResult(firstNumber, secondNumber, thirdNumber) {
    let result = '';

    if (firstNumber >= 0 && secondNumber >= 0 && thirdNumber >= 0) {
        result = 'Positive';
    } else if (firstNumber < 0 && secondNumber < 0 && thirdNumber < 0) {
        result = 'Negative';
    } else if (firstNumber < 0 && secondNumber < 0 && thirdNumber > 0) {
        result = 'Positive';
    } else if (firstNumber < 0 && secondNumber > 0 && thirdNumber < 0) {
        result = 'Positive';
    } else if (firstNumber > 0 && secondNumber < 0 && thirdNumber < 0) {
        result = 'Positive';
    } else if (firstNumber > 0 && secondNumber > 0 && thirdNumber < 0) {
        result = 'Negative';
    } else if (firstNumber > 0 && secondNumber < 0 && thirdNumber > 0) {
        result = 'Negative';
    } else if (firstNumber < 0 && secondNumber > 0 && thirdNumber > 0) {
        result = 'Negative';
    } else if (firstNumber == 0 && secondNumber > 0 && thirdNumber > 0) {
        result = 'Positive';
    } else if (firstNumber > 0 && secondNumber == 0 && thirdNumber > 0) {
        result = 'Positive';
    } else if (firstNumber > 0 && secondNumber > 0 && thirdNumber == 0) {
        result = 'Positive';
    } else if (firstNumber == 0 && secondNumber < 0 && thirdNumber > 0) {
        result = 'Positive';
    } else if (firstNumber == 0 && secondNumber > 0 && thirdNumber < 0) {
        result = 'Positive';
    } else if (firstNumber < 0 && secondNumber == 0 && thirdNumber > 0) {
        result = 'Positive';
    } else if (firstNumber == 0 && secondNumber > 0 && thirdNumber > 0) {
        result = 'Positive';
    }
    console.log(result);
}

findPositiveOrNegativeResult(-1, 0, 1);