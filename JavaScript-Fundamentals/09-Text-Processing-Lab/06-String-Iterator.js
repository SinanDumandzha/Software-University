function stringIterator(text) {
    let splitWords = text.split(" ");

    let words = {
        [Symbol.iterator]: function () {
            return {
                next: function () {
                    let isDone = splitWords.length === 0;
                    let currentWord = splitWords.shift();

                    return {
                        value: currentWord,
                        done: isDone,
                    };
                },
            };
        },
    };

    for (const word of words) {
        console.log(word);
    }
}

stringIterator("Et cillum do voluptate cillum ut cupidatat aliqua.");
