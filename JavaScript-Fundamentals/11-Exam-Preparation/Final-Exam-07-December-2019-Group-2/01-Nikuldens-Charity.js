function decryptMessage(input) {
    let message = input[0];
    let actions = input.slice(1);
    let action = actions.shift();

    while (action !== 'Finish') {
        let tokens = action.split(' ');
        let command = tokens[0];

        switch (command) {
            case 'Replace':
                let currentChar = tokens[1];
                let newChar = tokens[2];

                while (message.includes(currentChar)) {
                    message = message.replace(currentChar, newChar);
                }
                console.log(message);
                break;

            case 'Cut':
                let startIndex = Number(tokens[1]);
                let endIndex = Number(tokens[2]);

                if (!(startIndex < 0 || endIndex >= message.length)) {
                    let substring = message.substring(startIndex, endIndex + 1);
                    message = message.replace(substring, '');
                    console.log(message);
                } else {
                    console.log(`Invalid indexes!`);
                }
                break;

            case 'Make':
                let editType = tokens[1];

                if (editType === 'Upper') {
                    message = message.toUpperCase();
                    console.log(message);
                } else if (editType === 'Lower') {
                    message = message.toLowerCase();
                    console.log(message);
                }
                break;

            case 'Check':
                let string = tokens[1];

                if (message.includes(string)) {
                    console.log(`Message contains ${string}`);
                } else {
                    console.log(`Message doesn't contain ${string}`);
                }
                break;

            case 'Sum':
                let startIndexToSum = Number(tokens[1]);
                let endIndexToSum = Number(tokens[2]);

                if (!(startIndexToSum < 0 || endIndexToSum >= message.length)) {
                    let substringToSum = message.substring(startIndexToSum, endIndexToSum + 1);
                    let substringArr = substringToSum.split('');
                    let substringSum = 0;

                    substringArr.forEach(letter => {
                        substringSum += letter.charCodeAt(0);
                    });
                    console.log(substringSum);
                } else {
                    console.log(`Invalid indexes!`);
                }
                break;
        }
        action = actions.shift();
    }
}

decryptMessage(['ILikeSharan',
    'Replace a e',
    'Make Upper',
    'Check SHEREN',
    'Sum 1 4',
    'Cut 1 4',
    'Finish'
]);