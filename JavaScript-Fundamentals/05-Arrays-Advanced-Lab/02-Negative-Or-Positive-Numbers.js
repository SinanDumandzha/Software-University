function negativeToPositiveNumbers(array) {

    let resultArray = [];

    for (let number of array) {

        if (number >= 0) {
            resultArray.push(number);
        } else {
            resultArray.unshift(number);
        }
    }

    for (let number of resultArray) {
        console.log(number);
    }
}

negativeToPositiveNumbers([3, -2, 0, -1]);