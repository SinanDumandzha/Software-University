function solve(array, magicNumber) {
    for (let index = 0; index < array.length; index++) {
        for (let i = index + 1; i < array.length; i++) {
            if (array[index] + array[i] === magicNumber) {
                console.log(`${array[index]} ${array[i]}`);
            }
        }
    }
}

solve([14, 20, 60, 13, 7, 19, 8], 27);