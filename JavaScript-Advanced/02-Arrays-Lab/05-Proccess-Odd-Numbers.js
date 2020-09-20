function multiplyReverseOddPositionNumbers(numbers) {
    numbers = numbers.map(Number);
    let oddPositionNumbers = [];

    for (let i = 1; i < numbers.length; i += 2) {
        oddPositionNumbers.push(numbers[i]);
    }

    let modifiedNumbers = oddPositionNumbers.map((x) => x * 2).reverse();
    let result = modifiedNumbers.join(' ');
    console.log(result);
}

multiplyReverseOddPositionNumbers([3, 0, 10, 4, 7, 3]);