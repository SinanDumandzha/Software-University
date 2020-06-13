function getCharactersInRange(firstCharacter, secondCharacter) {

    let firstChar = firstCharacter.charCodeAt(0);
    let secondChar = secondCharacter.charCodeAt(0);

    let startingChar = Math.min(firstChar, secondChar);
    let finishingChar = Math.max(firstChar, secondChar);

    let result = findCharatersInRange(startingChar, finishingChar);

    console.log(result);

    function findCharatersInRange(start, finish) {

        let characters = [];

        for (let i = start + 1; i < finish; i++) {

            characters.push(String.fromCharCode(i));
        }

        let range = characters.join(' ');

        return range;
    }
}

getCharactersInRange('C', '#');