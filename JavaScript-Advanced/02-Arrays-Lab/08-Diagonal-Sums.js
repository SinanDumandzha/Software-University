function calculateDiagonalSums(matrix) {
    let firstSum = 0;
    let secondSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        firstSum += matrix[i][i];
        secondSum += matrix[i][matrix[i].length - i - 1];
    }
    console.log(`${firstSum} ${secondSum}`);
}

calculateDiagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);