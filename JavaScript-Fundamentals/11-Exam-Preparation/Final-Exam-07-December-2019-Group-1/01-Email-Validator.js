function validateEmail(input) {
    let email = input[0];
    let actions = input.slice(1);
    let action = actions.shift();

    while (action !== 'Complete') {
        let tokens = action.split(' ');
        let command = tokens[0];

        switch (command) {
            case 'Make':
                if (tokens[1] === 'Upper') {
                    email = email.toUpperCase();
                    console.log(email);
                } else if (tokens[1] === 'Lower') {
                    email = email.toLowerCase();
                    console.log(email);
                }
                break;

            case 'GetDomain':
                let lastCharCount = Number(tokens[1]);
                let lastChars = email.substring((email.length - 3));
                console.log(lastChars);
                break;

            case 'GetUsername':
                if (email.includes('@')) {
                    let indexOfSymbol = email.indexOf('@');
                    let substring = email.substring(0, indexOfSymbol);
                    console.log(substring);
                } else {
                    console.log(`The email ${email} doesn't contain the @ symbol.`);
                }
                break;

            case 'Replace':
                let charToReplace = tokens[1];

                while (email.includes(charToReplace)) {
                    email = email.replace(charToReplace, '-');
                }
                console.log(`${email}`);
                break;

            case 'Encrypt':
                let charsAsciiValue = [];

                let asciiValuesOfChars = email.split('').forEach(char => {
                    charsAsciiValue.push(char.charCodeAt(0));
                });
                console.log(charsAsciiValue.join(' '));
                break;
        }
        action = actions.shift();
    }
}

validateEmail(['Mike123@somemail.com',
    'Make Upper',
    'GetDomain 3',
    'GetUsername',
    'Encrypt',
    'Complete'
]);