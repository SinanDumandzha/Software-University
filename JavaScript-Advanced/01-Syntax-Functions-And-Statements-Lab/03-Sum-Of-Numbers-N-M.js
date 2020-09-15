function calculateSum(startingNumber, endingNumber) {
    let start = Number(startingNumber);
    let end = Number(endingNumber);
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }
    console.log(sum);
}

calculateSum('-8', '20');