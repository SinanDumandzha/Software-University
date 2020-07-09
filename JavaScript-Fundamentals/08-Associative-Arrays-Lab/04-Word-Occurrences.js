function checkWordsCount(input) {
    let wordsMap = new Map();
    let count = 1;

    for (let word of input) {

        if (!wordsMap.has(word)) {
            wordsMap.set(word, count);
        } else {
            let count = wordsMap.get(word);
            count += 1;

            wordsMap.set(word, count);
        }
    }

    let sorted = Array.from(wordsMap).sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sorted) {
        console.log(`${word} -> ${count} times`);
    }
}

checkWordsCount(['Here', 'is', 'the', 'first', 'sentence',
    'Here', 'is', 'another', 'sentence', 'And',
    'finally', 'the', 'third', 'sentence'
]);