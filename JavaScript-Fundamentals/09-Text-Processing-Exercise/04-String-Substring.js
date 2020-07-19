function checkWord(wordToSearch, text) {
    let textLowerCase = text.toLowerCase().split(' ');

        if (textLowerCase.includes(wordToSearch)) {
            console.log(`${wordToSearch}`);
        } else {
            console.log(`${wordToSearch} not found!`);
        }
}

checkWord('javascript', 'JavaScript is the best programming language');