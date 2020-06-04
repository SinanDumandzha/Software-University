function solve(arrayOfNumbers) {
    let newArray = [];

    while (arrayOfNumbers.length > 1) {
        for (let i = 0; i < arrayOfNumbers.length - 1; i++) {
            newArray[i] = arrayOfNumbers[i] + arrayOfNumbers[i + 1];
        }
        arrayOfNumbers = newArray;
        newArray = [];
    }
    console.log(arrayOfNumbers[0]);
}

solve([5, 0, 4, 1, 2]);