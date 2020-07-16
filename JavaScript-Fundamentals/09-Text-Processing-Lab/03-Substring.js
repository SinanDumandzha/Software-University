function substringInput(word, startIndex, count) {
    let result = word.substring(startIndex, Number(startIndex) + Number(count));
    console.log(result);
}

substringInput('ASentence', 1, 8);