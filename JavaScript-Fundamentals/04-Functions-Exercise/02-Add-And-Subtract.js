function addAndSubtract(firstNumber, secondNumber, thirdNumber) {

    let sumNumbers = (a, b) => (a + b);

    let subtractNumbers = (c, d) => (c - d);

    let sum = sumNumbers(firstNumber, secondNumber);
    let subtract = subtractNumbers(sum, thirdNumber);

    console.log(subtract);
}

addAndSubtract(23, 6, 10);