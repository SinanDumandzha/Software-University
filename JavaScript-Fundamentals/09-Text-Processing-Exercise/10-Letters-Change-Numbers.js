function calculateSumByLetters(input) {
    let data = input.split(" ");
    let sum = 0;

    for (let element of data) {
        let number = Number(
            element.trimStart().substring(1, element.length - 1)
        );

        let firstLetterPosition = element.charCodeAt(0);
        let lastLetterPosititon = element.charCodeAt(element.length - 1);

        let checkFirstUpper =
            64 < firstLetterPosition && firstLetterPosition < 91;
        let checkFirstLower =
            96 < firstLetterPosition || firstLetterPosition < 123;

        let checkLastUpper =
            64 < lastLetterPosititon && lastLetterPosititon < 91;
        let checkLastLower =
            96 < lastLetterPosititon || lastLetterPosititon < 123;

        let letterPosition = 0;

        if (checkFirstUpper) {
            letterPosition = firstLetterPosition - 64;
            number /= letterPosition;
        } else if (checkFirstLower) {
            letterPosition = firstLetterPosition - 96;
            number *= letterPosition;
        }

        if (checkLastUpper) {
            letterPosition = lastLetterPosititon - 64;
            number -= letterPosition;
        } else if (checkLastLower) {
            letterPosition = lastLetterPosititon - 96;
            number += letterPosition;
        }
        sum += number;
    }
    console.log(sum.toFixed(2));
}

calculateSumByLetters("A12b s17G");
