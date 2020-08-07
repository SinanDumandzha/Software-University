function encryptMessage(input) {
    let messageCount = Number(input[0]);
    let messageArr = input.slice(1);

    for (let i = 0; i < messageCount; i++) {
        let message = messageArr[i];
        let pattern = /(?<start>\*|@)(?<tag>[A-Z][a-z]{2,})(\k<start>):[ ]\[(?<char1>[A-Z|a-z])\]\|\[(?<char2>[A-Z|a-z])\]\|\[(?<char3>[A-Z|a-z])\]\|$/g;
        let match = pattern.exec(message);

        if (match) {
            let tag = match.groups.tag;
            let char1 = (match.groups.char1).charCodeAt(0);
            let char2 = (match.groups.char2).charCodeAt(0);
            let char3 = (match.groups.char3).charCodeAt(0);

            console.log(`${tag}: ${char1} ${char2} ${char3}`);
        } else {
            console.log(`Valid message not found!`);
        }
    }
}

encryptMessage(['3',
    '*Request*: [I]|[s]|[i]|',
    '*Taggy@: [73]|[73]|[73]|',
    'Should be valid @Taggy@: [v]|[a]|[l]|'
]);