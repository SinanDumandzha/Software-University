function operateElements(arrayOfElements) {
    let array = arrayOfElements;
    let sumOfNumbers = 0;
    let sumOfInverseNumbers = 0;
    let concatinatedElements = '';

    for (let i = 0; i < array.length; i++) {
        sumOfNumbers += Number(array[i]);
        sumOfInverseNumbers += (1 / Number(array[i]));
        concatinatedElements += array[i];
    }

    console.log(sumOfNumbers);
    console.log(sumOfInverseNumbers);
    console.log(concatinatedElements);
}

operateElements([2, 4, 8, 16]);