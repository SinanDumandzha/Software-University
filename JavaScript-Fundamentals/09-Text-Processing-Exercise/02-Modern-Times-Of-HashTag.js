function findHashtags(text) {
    let words = text.split(" ").filter((word) => word.length > 1 && word.startsWith("#"));

    words.forEach((word) => {
        word = word.replace('#', '')
        let asciiCode = word.charCodeAt(0);
        let checkAsciiRange = (64 < asciiCode && asciiCode < 91) || (97 < asciiCode && asciiCode < 122);

        if (checkAsciiRange) {
            console.log(word);
        }
    });
}

findHashtags("Nowadays everyone uses # to tag a #special word in #socialMedia");
