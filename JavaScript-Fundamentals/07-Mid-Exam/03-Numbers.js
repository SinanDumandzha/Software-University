function topFiveGreaterThanAverage(input) {
    let numbers = input.split(' ').map(Number);
    let sum = 0;

    for (number of numbers) {
        sum += number;
    }

    let averageNumber = sum / (numbers.length);

    let greaterThanAverage = numbers.filter(x => x > averageNumber);

    if (greaterThanAverage.length > 0) {
        let sortDescending = greaterThanAverage.sort((a, b) => b - a);

        let topFiveGreater = [];

        for (let i = 0; i < 5; i++) {
            topFiveGreater.push(sortDescending[i]);
        }
        console.log(topFiveGreater.join(' '));

    } else {
        console.log(`No`);
    }
}

topFiveGreaterThanAverage('1');