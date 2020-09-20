function findTwoSmallestNumbers(numbers) {
    let numbersArray = numbers.map(Number);
    let sortedNumbers = numbersArray.sort((a, b) => a - b);
    let twoSmallastNumbers = sortedNumbers.slice(0, 2);
    let result = twoSmallastNumbers.join(' ');

    console.log(result);
}

findTwoSmallestNumbers([3, 0, 10, 4, 7, 3]);