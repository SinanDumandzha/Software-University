function findCoolEmojis(input) {
    let text = input[0];

    let coolThresholdPattern = /[0-9]/g;
    let coolThresholdMatch = text.match(coolThresholdPattern);
    let coolThreshold = coolThresholdMatch.reduce((accumulator, currentValue) => Number(accumulator) * Number(currentValue));

    let emojiPattern = /(?<sign>::|\*\*)(?<emojiName>[A-Z][a-z]{2,})(\k<sign>)/g;
    let emojiMatch = emojiPattern.exec(text);
    let validEmojisCount = 0;
    let coolEmojis = [];

    while (emojiMatch) {
        validEmojisCount++;

        let emojiCoolness = emojiMatch.groups.emojiName
            .split('')
            .map(x => x.charCodeAt(0))
            .reduce((accumulator, currentValue) => accumulator + currentValue);

        if (emojiCoolness >= coolThreshold) {
            coolEmojis.push(emojiMatch[0]);
        }

        emojiMatch = emojiPattern.exec(text);
    }
    console.log(`Cool threshold: ${coolThreshold}`);

    if (coolEmojis.length >= 0) {
        console.log(`${validEmojisCount} emojis found in the text. The cool ones are:`);
        console.log(coolEmojis.join('\n'));
    }
}

findCoolEmojis(['In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**']);