function solve(array) {
    let sumOriginalArray = 0;
    let sumModifiedArray = 0;
    let modifiedArray = [];

    for (let index in array) {
        sumOriginalArray += Number(array[index]);

        if (array[index] % 2 === 0) {
            let add = array[index] + Number(index);

            modifiedArray[index] = add;
        } else {
            let substract = array[index] - Number(index);

            modifiedArray[index] = substract; 
        }
    }

    for (let number of modifiedArray) {
        sumModifiedArray += number;
    }

    console.log(modifiedArray);
    console.log(sumOriginalArray);
    console.log(sumModifiedArray);
}

solve([5, 15, 23, 56, 35]);