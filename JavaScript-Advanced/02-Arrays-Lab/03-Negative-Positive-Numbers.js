function sortNumbers(numbers) {
    numbers = numbers.map(Number);
    let result = [];

    for (let number of numbers) {
        number < 0 ? result.unshift(number) : result.push(number);
    }

    result.forEach(number => console.log(number));
}

sortNumbers([3, -2, 0, -1]);