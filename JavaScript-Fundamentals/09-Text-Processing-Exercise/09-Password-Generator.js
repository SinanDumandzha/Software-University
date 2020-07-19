function generatePassword(input) {
    let concatenatedWords = input[0].concat(input[1]);
    let wordToUpperCase = input[2].toUpperCase();

    let index = 0;
    let currentLetter = "";

    for (let character of concatenatedWords) {
        let checkVowels =
            character === "a" ||
            character === "e" ||
            character === "i" ||
            character === "o" ||
            character === "u";

        if (index >= wordToUpperCase.length) {
            index = 0;
        }

        currentLetter = wordToUpperCase[index];

        if (checkVowels) {
            concatenatedWords = concatenatedWords.replace(
                character,
                currentLetter
            );
            index++;
        }
    }
    let result = concatenatedWords.split("").reverse().join("");

    console.log(`Your generated password is ${result}`);
}

generatePassword([
    "areyousureaboutthisone",
    "notquitebutitrustyou",
    "disturbed",
]);
