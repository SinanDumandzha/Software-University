function printDiagonalAttackResult(input) {
    let matrix = input.map(row => row.split(" ").map(Number));
    let firstDiagonalSum = 0;
    let secondDiagonalSum = 0;

    for (let row = 0; row < matrix.length; row++) {
        firstDiagonalSum += matrix[row][row];
        secondDiagonalSum += matrix[row][matrix[row].length - row - 1];
    }

    if (firstDiagonalSum == secondDiagonalSum) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix.length; col++) {
                if (row == col || row + col + 1 == matrix.length) {
                    continue;
                }
                matrix[row][col] = firstDiagonalSum;
            }
        }
    }

    matrix.forEach(row => {
        console.log(row.join(' '));
    });
}

printDiagonalAttackResult(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);