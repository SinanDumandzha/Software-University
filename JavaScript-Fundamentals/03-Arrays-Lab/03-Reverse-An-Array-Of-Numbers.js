function solve(arrayLength, array) {
    let newArray = [];
    let result = '';

    for (let i = 0; i < arrayLength; i++) {
        newArray[i] = array[arrayLength - 1 - i];
        result += newArray[i] + ' ';
    }
    console.log(result);
} 

solve(3, [10, 20, 30, 40, 50]);