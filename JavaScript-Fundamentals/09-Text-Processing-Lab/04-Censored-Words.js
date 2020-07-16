function censoreWords(sentence, censoredWord) {
    let result = sentence;

    while (result.includes(censoredWord)) {
        result = result.replace(censoredWord, ('*'.repeat(censoredWord.length))); 
    }
    console.log(result);
}

censoreWords('A small sentence with some words', 'small');