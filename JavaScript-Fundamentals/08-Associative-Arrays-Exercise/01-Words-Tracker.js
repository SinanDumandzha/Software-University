function countWords(input) {
    let words = {};
    input
        .shift()
        .split(" ")
        .map((word) => (words[word] = 0));

    input.map((word) => {
        if (words.hasOwnProperty(word)) {
            words[word] += 1;
        }
    });

    Object.entries(words)
        .sort((a, b) => b[1] - a[1])
        .forEach((word) => {
            console.log(`${word[0]} - ${word[1]}`);
        });
}

countWords([
    "this sentence",
    "In",
    "this",
    "sentence",
    "you",
    "have",
    "to",
    "count",
    "the",
    "occurances",
    "of",
    "the",
    "words",
    "this",
    "and",
    "sentence",
    "because",
    "this",
    "is",
    "your",
    "task",
]);
