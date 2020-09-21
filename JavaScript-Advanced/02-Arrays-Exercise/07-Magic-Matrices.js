function checkIsMagicMatrix(matrix) {
    let rowSum = matrix[0].reduce((a, b) => a + b);
    let isMagic = true;

    for (let i = 1; i < matrix.length; i++) {
        if (rowSum != matrix[i].reduce((a, b) => a + b)) {
            isMagic = false;
        }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;

        for (let row = 0; row < matrix.length; row++) {
            colSum += matrix[row][col];
        }

        if (colSum != rowSum) {
            isMagic = false;
        }
    }

    console.log(isMagic);
}

checkIsMagicMatrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);