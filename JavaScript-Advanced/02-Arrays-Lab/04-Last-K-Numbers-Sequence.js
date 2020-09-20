function calculateNumberSequenceSum(sequenceLengthInput, numberCountForSumInput) {
    let sequenceLength = Number(sequenceLengthInput);
    let numberCountForSum = Number(numberCountForSumInput);
    let result = [1];

    for (let i = 1; i < sequenceLength; i++) {
        let startIndex = Math.max(0, i - numberCountForSum);
        let currentSum = result.slice(startIndex, startIndex + numberCountForSum).reduce((a, b) => a + b, 0);
        result.push(currentSum);
    }

    console.log(result.join(" "));
}

calculateNumberSequenceSum(6, 3);