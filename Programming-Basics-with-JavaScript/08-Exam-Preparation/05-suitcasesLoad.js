function solve(input) {
    let Capacity = Number(input.shift());

    let currentCapacity = 0;
    let suitcaseCount = 0;
    let suitcase = input.shift();
    let isFull = false;

    while (suitcase != 'End') {
        let suitcaseSize = Number(suitcase);
        

        if ((suitcaseCount + 1) % 3 == 0) {
            suitcaseSize *= 1.1;
        }

        if (currentCapacity + suitcaseSize <= Capacity) {
            currentCapacity += suitcaseSize;
            suitcaseCount++;
        } else {
            isFull = true;
            break;
        }
        suitcase = input.shift();
    }
    if (isFull) {
        console.log(`No more space!`);
        console.log(`Statistic: ${suitcaseCount} suitcases loaded.`);
    } else {
        console.log(`Congratulations! All suitcases are loaded!`);
        console.log(`Statistic: ${suitcaseCount} suitcases loaded.`);
    }
}

solve(['550', '100', '252', '72', 'End', '']);