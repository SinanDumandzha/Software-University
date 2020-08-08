function generateUsername(input) {
    let username = input[0];
    let actions = input.slice(1);
    let action = actions.shift();

    while (action !== 'Sign up') {
        let tokens = action.split(' ');
        let command = tokens[0];

        switch (command) {
            case 'Case':
                let lowerOrUpper = tokens[1];

                if (lowerOrUpper === 'lower') {
                    username = username.toLowerCase();
                } else if (lowerOrUpper === 'upper') {
                    username = username.toUpperCase();
                }
                console.log(username);
                break;

            case 'Reverse':
                let startIndex = Number(tokens[1]);
                let endIndex = Number(tokens[2]);

                if (startIndex >= 0 && endIndex < username.length) {
                    let reversedUsername = username.substring(startIndex, endIndex + 1);
                    reversedUsername = reversedUsername.split('').reverse().join('');
                    console.log(reversedUsername);
                }
                break;

            case 'Cut':
                let substring = tokens[1];

                if (username.includes(substring)) {
                    username = username.replace(substring, '');
                    console.log(username);
                } else {
                    console.log(`The word ${username} doesn't contain ${substring}.`);
                }
                break;

            case 'Replace':
                let charToReplace = tokens[1];

                while (username.includes(charToReplace)) {
                    username = username.replace(charToReplace, '*');
                }
                console.log(username);
                break;

            case 'Check':
                let char = tokens[1];

                if (username.includes(char)) {
                    console.log(`Valid`);
                } else {
                    console.log(`Your username must contain ${char}.`);
                }
                break;
        }
        action = actions.shift();
    }
}

generateUsername(['ThisIsMyString',
    'Reverse 1 4',
    'Replace i',
    'Cut My',
    'Sign up'
]);