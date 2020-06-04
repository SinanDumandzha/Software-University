function solve(arrayOfStrings) {
    let numberOfSwaps = Math.ceil(arrayOfStrings.length / 2);
    let result = '';


    for (let i = 0; i < arrayOfStrings.length; i++) {
        result += arrayOfStrings[arrayOfStrings.length - 1 - i] + ' '; 
    }
    console.log(result);
}

solve(['a', 'b', 'c', 'd', 'e']);