function revealWords(wordsToReplace, text) {
    let words = wordsToReplace.split(", ");

    words.forEach((word) => {
        let stars = "*".repeat(word.length);

        text = text.replace(stars, word);
    });
    console.log(text);
}

revealWords(
    "great, learning",
    "softuni is ***** place for ******** new programming languages"
);
