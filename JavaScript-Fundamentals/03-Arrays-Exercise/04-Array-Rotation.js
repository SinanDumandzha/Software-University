function solve(array, rotationCount) {
    let rotations = rotationCount % (array.length);
    let modifiedArray = [];

    for (let i = rotations, j = 0; i < array.length; i++, j++) {
        modifiedArray[j] = array[i]; 
    }

    for (let i = 0; i < rotations; i++) {
        modifiedArray[modifiedArray.length] = array[i]; 
    }
    console.log(modifiedArray.join(' '));
}

solve([51, 47, 32, 61, 21], 2);