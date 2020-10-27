function subSum(array, startIndex, endIndex) {
    let result;

    if (!Array.isArray(array)) {
        return result = NaN;
    }

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex > array.length) {
        endIndex = array.length;
    }

    let sumRange = array.slice(startIndex, endIndex + 1);
    result = sumRange.reduce((acc, curr) => acc + Number(curr), 0);

    return result;
}