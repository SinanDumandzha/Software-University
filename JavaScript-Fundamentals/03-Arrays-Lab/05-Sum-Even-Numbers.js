function solve(arrayOfStrings) {
    let evenSum = 0;

    for (let element of arrayOfStrings) {
        element = Number(element);

        if (element % 2 === 0) {
            evenSum += element;
        }
    }
    console.log(evenSum);
}

solve(['1', '2', '3', '4', '5', '6']);