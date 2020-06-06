function solve(array) {
    let isEqual = false;

    for (let index in array) {
        let leftSum = 0;

        for (let previousNumber = Number(index) - 1; previousNumber >= 0; previousNumber--) {
            leftSum += array[previousNumber];
        }

        let rightSum = 0;

        for (let nextNumber = Number(index) + 1; nextNumber < array.length; nextNumber++) {
            rightSum += array[nextNumber];
        }

        if (leftSum == rightSum) {
            isEqual = true;
            console.log(index);
            break;
        }
    }

    if (!isEqual) {
        console.log('no');
    }
}

solve([1, 2, 3, 3]);