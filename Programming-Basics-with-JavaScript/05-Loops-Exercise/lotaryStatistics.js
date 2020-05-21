function solve(n) {
    let maxNumber = Number(n);

    let countOddAndTo10 = 0;
    let countEven = 0;
    let countOddEndsWith7 = 0;
    let countDivid100 = 0;

    for (let i = 1; i <= maxNumber; i++) {
        if (i % 2 !== 0 && i < 10) {
            countOddAndTo10++;
        }
        if (i % 2 === 0) {
            countEven++;
        }
        if (i !== 0 && i % 10 === 7) {
            countOddEndsWith7++;
        }
        if (100 % i === 0) {
            countDivid100++;
        }
    }

    let percentage1 = countOddAndTo10 / maxNumber * 100;
    let percentage2 = countEven / maxNumber * 100;
    let percentage3 = countOddEndsWith7 / maxNumber * 100;
    let percentage4 = countDivid100 / maxNumber * 100;

console.log (`${percentage1.toFixed(2)}%`);
console.log (`${percentage2.toFixed(2)}%`);
console.log (`${percentage3.toFixed(2)}%`);
console.log (`${percentage4.toFixed(2)}%`);
}

solve ('49');