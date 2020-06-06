function solve(array) {
    let currentNumber = 0;
    let nextNumber = 0;

    let output = '';

    for (let i = 0; i < array.length; i++) {
        currentNumber = array[i];

        let isTop = true;

        for (let j = i + 1; j < array.length; j++) {
            nextNumber = array[j];

            if (currentNumber <= nextNumber) {
                isTop = false;
            }
        }
        if (isTop) {
            output += currentNumber + ' ';
        }
    }
    console.log(output);
}

solve([41, 41, 34, 20]);