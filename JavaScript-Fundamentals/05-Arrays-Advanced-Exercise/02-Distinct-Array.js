function removeRepeatingElemnts(array) {

    let result = [];

    for (let element of array) {

        if (!result.includes(element)) {
            result.push(element);
        }
    }

    console.log(result.join(' '));
}

removeRepeatingElemnts([7, 8, 9, 7, 2, 3, 4, 1, 2]);