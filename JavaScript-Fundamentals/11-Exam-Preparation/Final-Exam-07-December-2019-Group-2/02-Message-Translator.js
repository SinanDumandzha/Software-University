function translateMessage(input) {
    let messageCount = Number(input[0]);
    let messageArr = input.slice(1);

    let pattern = /!(?<command>[A-Z][a-z]{2,})!:(\[)(?<message>[A-Za-z]{8,})(\])/g;

    for (let i = 0; i < messageCount; i++) {
        let currentMessage = messageArr[i];
        let match = pattern.exec(currentMessage);

        if (match) {
            let messageToEncrypt = match.groups.message;
            let asciiValuesOfMessage = messageToEncrypt.split('').map(char => char.charCodeAt(0)).join(' ');
            console.log(`${match.groups.command}: ${asciiValuesOfMessage}`);
        } else {
            console.log(`The message is invalid`);
        }
    }
}

translateMessage(['3',
    'go:[outside]',
    '!drive!:YourCarToACarWash',
    '!Watch!:[LordofTheRings]'
]);