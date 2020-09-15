function findLargestNumber(firstNumber, secondNumber, thirdNumber) {
    let firstNum = Number(firstNumber);
    let secondNum = Number(secondNumber);
    let thirdNum = Number(thirdNumber);

    let largestNumber = Math.max(firstNum, secondNum, thirdNum);

    console.log(`The largest number is ${largestNumber}.`);
}

findLargestNumber(5, -3, 16);