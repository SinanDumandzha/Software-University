function searchForANumber(array, info) {

    let countToTake = info[0];
    let countToDelete = info[1];
    let elementToSearch = info[2];

    let result = array.slice(0, (countToTake));
    result = result.slice(countToDelete);

    let includesCount = 0;

    for (let element of result) {

        if (element == elementToSearch) {
            includesCount++;
        }
    }

    console.log(`Number ${elementToSearch} occurs ${includesCount} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);