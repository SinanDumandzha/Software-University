function solve(nTimes) {
    let sum = 0;
    let lastDigit = 0;
    let firstDigit = 0;

    for (let i = 1; i <= nTimes; i++) {
        if (i >= 10) {
            lastDigit = i % 10;
            firstDigit = parseInt((i % 100) / 10);
            sum = firstDigit + lastDigit;
        } else {
            sum = i;
        }
        let result = sum == 5 || sum == 7 || sum == 11;

        if (result) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}

solve(15);