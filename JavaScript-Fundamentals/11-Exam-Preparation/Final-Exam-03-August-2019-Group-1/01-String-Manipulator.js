function maniuplateString(input) {
    let string = input[0];
    let actions = input.slice(1);
    let action = actions.shift();

    while (action !== 'End') {
        let tokens = action.split(' ');
        let command = tokens[0];

        switch (command) {
            case 'Translate':
                let char = tokens[1];
                let replacment = tokens[2];

                while (string.includes(char)) {
                    string = string.replace(char, replacment);
                }
                console.log(string);
                break;

            case 'Includes':
                let checkText = tokens[1];

                string.includes(checkText) ? console.log(`True`) : console.log(`False`);
                break;

            case 'Start':
                let checkStartingText = tokens[1];
                string.startsWith(checkStartingText) ? console.log(`True`) : console.log(`False`);
                break;

            case 'Lowercase':
                string = string.toLowerCase();
                console.log(string);
                break;

            case 'FindIndex':
                let lastCharToCheck = tokens[1];
                let lastIndexOfChar = string.lastIndexOf(lastCharToCheck);
                console.log(lastIndexOfChar);
                break;

            case 'Remove':
                let startIndex = Number(tokens[1]);
                let count = Number(tokens[2]);
                let substring = string.substr(startIndex, count);
                string = string.replace(substring, '');
                console.log(string);
                break;
        }
        action = actions.shift();
    }
}

maniuplateString(['//Thi5 I5 MY 5trING!//',
    'Translate 5 s',
    'Includes string',
    'Start //This',
    'Lowercase',
    'FindIndex i',
    'Remove 0 10',
    'End'
]);