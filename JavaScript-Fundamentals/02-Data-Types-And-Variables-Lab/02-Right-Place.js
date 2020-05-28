function solve(wordOne, char, wordTwo) {
    console.log(wordOne.replace('_', char) == wordTwo ? 'Matched' : 'Not Matched');
}

solve('Str_ng', 'i', 'String');