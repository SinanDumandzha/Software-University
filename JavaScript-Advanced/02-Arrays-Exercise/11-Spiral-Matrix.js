function generateSpiralMatrix(dimensionOne, dimensionTwo) {
    let matrix = [];

    for (let i = 0; i < dimensionOne; i++) {
        matrix.push([]);
    }

    let startingRow = 0;
    let startingCol = 0;
    let endingRow = dimensionOne - 1;
    let endingCol = dimensionTwo - 1;
    let number = 1;

    while (startingRow <= endingRow || startingCol <= endingCol) {
        for (let i = startingCol; i <= endingCol; i++) {
            matrix[startingRow][i] = number++;
        }

        for (let i = startingRow + 1; i <= endingRow; i++) {
            matrix[i][endingCol] = number++;
        }

        for (let i = endingCol - 1; i >= startingCol; i--) {
            matrix[endingRow][i] = number++;
        }

        for (let i = endingRow - 1; i > startingRow; i--) {
            matrix[i][startingCol] = number++;
        }

        startingRow++;
        startingCol++;
        endingRow--;
        endingCol--;
    }

    console.log(matrix.map(row => row.join(' ')).join('\n'));
}

generateSpiralMatrix(5, 5);