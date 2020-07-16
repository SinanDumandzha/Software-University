function countStringOccurences(text, inputToSearch) {
    let words = text.split(' ');
    let counter = 0;

    for (word of words) {
        if (word === inputToSearch) {
            counter++;
        }
    } 
    console.log(counter);
}

countStringOccurences('This is a word and it also is a sentence', 'is');