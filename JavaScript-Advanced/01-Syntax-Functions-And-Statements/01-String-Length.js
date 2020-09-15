function findStringLength(firstData, secondData, thirdData) {
    let firstDataLength = firstData.length;
    let secondDataLength = secondData.length;
    let thirdDataLength = thirdData.length;

    let totalLength = firstDataLength + secondDataLength + thirdDataLength;
    let averageLength = Math.floor(totalLength / 3);

    console.log(totalLength);
    console.log(averageLength);
}

findStringLength('chocolate', 'ice cream', 'cake');