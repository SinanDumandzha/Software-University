function solve(input) {
    let start = Number(input.shift());
    let finish = Number(input.shift());
    let magicNumber = Number(input.shift());

    let combinations = 0;
    let isFound = false;



    for (let i = start; i <= finish; i++) {
        for (let j = start; j <= finish; j++) {
            combinations++;
            let sum = i + j;
            if (sum === magicNumber) {
                console.log(`Combination N:${combinations} (${i} + ${j} = ${magicNumber})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${combinations} combinations - neither equals ${magicNumber}`);
    }
}

solve(['1', '10', '5']);