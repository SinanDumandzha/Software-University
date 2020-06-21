function sortBiggestAndSmallest(array) {

    let bigToSmall = array.slice().sort((a, b) => b - a);

    let result = [];

    while (bigToSmall.length > 0) {
        let biggestNumber = bigToSmall.shift();
        let smallestNumber = bigToSmall.pop();

        result.push(biggestNumber, smallestNumber);
    }

    console.log(result.join(' '));
}

sortBiggestAndSmallest([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);