function solve(arrayOne, arrayTwo) {
    let mergedArray = [];

    for (let index in arrayOne) {
        if (index % 2 === 0) {
            let addNumbers = Number(arrayOne[index]) + Number(arrayTwo[index]);

            mergedArray[index] = addNumbers;
        } else {
            let concatNumbers = arrayOne[index] + arrayTwo[index];

            mergedArray[index] = concatNumbers;
        }
    }
    console.log(mergedArray.join(' - '));
}

solve(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);

solve(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);