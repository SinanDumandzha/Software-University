function solve(firstArray, secondArray) {
    let sum = 0;
    let indexCounter = 0;
    let isEqual = true;

    for (let i = 0; i < firstArray.length; i++) {
        firstArray[i] = Number(firstArray[i]);
    }

    for (let j = 0; j < secondArray.length; j++) {
        secondArray[j] = Number(secondArray[j]);
    }

    for (let k = 0; k < firstArray.length; k++) {
        if ((firstArray[k] === secondArray[k])) {
            sum += firstArray[k];
        } else {
            isEqual = false;
            break;
        }
        indexCounter++;
    }

    if (isEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${indexCounter} index`);
    }
}

solve(['10', '20', '30'], ['10', '20', '30']);