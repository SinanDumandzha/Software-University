function bombNumbers(numbers, bombInfo) {

    let bomb = bombInfo[0];
    let bombRange = bombInfo[1];

    let index = numbers.indexOf(bomb);

    while (index > -1) {

        numbers.splice(Math.max((index - bombRange), 0), Math.min(bombRange, index) );

        index = numbers.indexOf(bomb);

        numbers.splice(index, (bombRange + 1))

        index = numbers.indexOf(bomb);
    }

    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);