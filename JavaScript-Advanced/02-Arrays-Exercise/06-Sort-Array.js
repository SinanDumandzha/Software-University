function sortArray(input) {
    let sortedArray = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
    let result = sortedArray.join('\n');
    console.log(result);
}

sortArray(['test',
    'Deny',
    'omen',
    'Default'
]);