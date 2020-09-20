function findBiggestNumber(matrix) {
    let numbersArray = matrix[0];

    for (let i = 1; i < matrix.length; i++) {
        numbersArray = numbersArray.concat(matrix[i]);
    }

    let biggestNumber = numbersArray.sort((a, b) => b - a).slice(0, 1).join('');

    console.log(biggestNumber);
}

findBiggestNumber([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]);