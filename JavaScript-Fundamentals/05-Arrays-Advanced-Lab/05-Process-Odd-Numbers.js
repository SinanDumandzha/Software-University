function processOddNumbers(array) {

    let result = [];

    let processedNumbers = array.map(x => x * 2);

    for (let i = 1; i < processedNumbers.length; i += 2) {

        result.unshift(processedNumbers[i]);
    }

    console.log(result.join(' '));
}

processOddNumbers([3, 0, 10, 4, 7, 3]);