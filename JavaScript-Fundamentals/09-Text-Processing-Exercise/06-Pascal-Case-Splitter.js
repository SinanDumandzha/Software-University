function splitPascalCaseWords(text) {
    let bigLettersIndex = [];
    let letters = text.split("");

    for (let index in letters) {
        let letterCode = letters[index].charCodeAt(0);

        if (64 < letterCode && letterCode < 91) {
            bigLettersIndex.push(index);
        }
    }

    let words = [];

    for (let index = 0; index < bigLettersIndex.length; index++) {
        words.push(text.substring(bigLettersIndex[index], bigLettersIndex[index + 1]));
    }

    console.log(words.join(', '));
}

splitPascalCaseWords('SplitMeIfYouCanHaHaYouCantOrYouCan');
