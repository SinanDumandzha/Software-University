function extractIncreasingSubsequnece(input) {
    let currentBiggerNumber = Number.MIN_SAFE_INTEGER;

    input.forEach(number => {
        if (number >= currentBiggerNumber) {
            currentBiggerNumber = number;
            console.log(currentBiggerNumber);
        }
    });
}

extractIncreasingSubsequnece([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]);