function sortArray(array, criteria) {
    let result = criteria == 'asc' ? array.sort((a, b) => a - b) : array.sort((a, b) => b - a);
    return result;
}