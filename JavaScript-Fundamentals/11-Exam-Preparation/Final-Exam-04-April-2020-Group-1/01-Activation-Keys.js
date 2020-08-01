function activationKeysGenerator(input) {
    let rawKey = input[0];
    let actions = input.slice(1);

    let action = actions.shift();

    while (action !== 'Generate') {
        let tokens = action.split('>>>');
        let command = tokens[0];

        switch (command) {
            case 'Contains':
                let substring = tokens[1];

                if (rawKey.includes(substring)) {
                    console.log(`${rawKey} contains ${substring}`);
                } else {
                    console.log(`Substring not found!`);
                }
                break;

            case 'Flip':
                let caseToChange = tokens[1];
                let startIndex = Number(tokens[2]);
                let endIndex = Number(tokens[3]);

                let substringToFlip = rawKey.substring(startIndex, endIndex);

                if (caseToChange === 'Upper') {
                    rawKey = rawKey.substring(0, startIndex) + substringToFlip.toUpperCase() + rawKey.substring(endIndex);
                } else {
                    rawKey = rawKey.substring(0, startIndex) + substringToFlip.toLowerCase() + rawKey.substring(endIndex);
                }
                console.log(`${rawKey}`);
                break;

            case 'Slice':
                let startIndexToDelete = Number(tokens[1]);
                let endIndexToDelete = Number(tokens[2]);

                let substringToDelete = rawKey.substring(startIndexToDelete, endIndexToDelete);

                rawKey = rawKey.replace(substringToDelete, '');

                console.log(`${rawKey}`);
        }
        action = actions.shift();
    }
    console.log(`Your activation key is: ${rawKey}`);
}

activationKeysGenerator(['134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
]);