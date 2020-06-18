function getSmallestTwoNumbers(array) {

    let sortedNumbers = array.sort((a, b) => {
        return a - b;
    });

    let smallestTwoNumbers = sortedNumbers.slice(0, 2);

    console.log(smallestTwoNumbers.join(' '));
}

getSmallestTwoNumbers([3, 0, 10, 4, 7, 3]);