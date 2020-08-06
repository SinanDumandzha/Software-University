function decryptMessage(input) {
    let messageCount = Number(input[0]);
    let messageArr = input.slice(1);

    for (let i = 0; i < messageCount; i++) {
        let message = messageArr[i];
        let pattern = /^(?<symbol>\$|%)(?<tag>[A-Z][a-z]{3,})(\k<symbol>):[" "]\[(?<num1>[0-9]+)\]\|\[(?<num2>[0-9]+)\]\|\[(?<num3>[0-9]+)\]\|$/g;
        let match = pattern.exec(message);

        if (match) {
            let tag = match.groups.tag;
            let num1 = String.fromCharCode(match.groups.num1);
            let num2 = String.fromCharCode(match.groups.num2);
            let num3 = String.fromCharCode(match.groups.num3);

            let decryptedText = num1 + num2 + num3;
            console.log(`${tag}: ${decryptedText}`);
        } else {
            console.log(`Valid message not found!`);
        }
    }
}

decryptMessage(['4',
    '$Request$: [73]|[115]|[105]|',
    '%Taggy$: [73]|[73]|[73]|',
    '%Taggy%: [118]|[97]|[108]|',
    '$Request$: [73]|[115]|[105]|[32]|[75]|'
]);