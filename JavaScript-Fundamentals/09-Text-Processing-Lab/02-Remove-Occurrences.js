function removeOccurences(word, text) {
    let currentText = text;

    while (currentText.includes(word)) {
        currentText = currentText.replace(word, '');   
    }
    console.log(currentText);
}

removeOccurences('ice', 'kicegiciceeb');