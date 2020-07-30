function findMirrorWords(input) {
    let mirrorWords = [];

    let pairsCount = 0;

    let text = input[0];

    let pattern = /([@#])(?<firstWord>[A-Za-z]{3,})\1{2}(?<secondWord>[A-Za-z]{3,})\1/g;

    let match = pattern.exec(text);

    while (match) {
        pairsCount++;

        let {
            firstWord,
            secondWord
        } = match.groups;

        let reverseMirrorWord = secondWord.split('').reverse().join('');

        if (firstWord === reverseMirrorWord) {
            mirrorWords.push(`${firstWord} <=> ${secondWord}`);
        }
        match = pattern.exec(text);
    }

    if (pairsCount < 1) {
        console.log(`No word pairs found!`);
    } else {
        console.log(`${pairsCount} word pairs found!`);
    }

    if (mirrorWords.length > 0) {

        console.log(`The mirror words are:`);
        console.log(mirrorWords.join(', '));
    } else {
        console.log(`No mirror words!`);
    }
}

findMirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);