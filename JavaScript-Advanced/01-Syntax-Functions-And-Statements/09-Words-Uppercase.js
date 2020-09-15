function seperateAndUppercaseWords(text) {
    let result = text.toUpperCase()
        .split(/[\W]+/)
        .filter(word => word.length > 0)
        .join(', ');

    console.log(result);
}

seperateAndUppercaseWords('Hi, how are you?');