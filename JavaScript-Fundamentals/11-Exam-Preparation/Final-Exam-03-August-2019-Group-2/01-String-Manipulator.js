function manipulateString(input) {
    let string = input[0];
    let actions = input.slice(1);
    let action = actions.shift();

    while (action !== 'Done') {
        let tokens = action.split(' ');
        let command = tokens[0];

        switch (command) {
            case 'Change':
                let char = tokens[1];
                let replacment = tokens[2];

                while (string.includes(char)) {
                    string = string.replace(char, replacment);
                }
                console.log(string);
                break;

            case 'Includes':
                let checkString = tokens[1];
                string.includes(checkString) ? console.log(`True`) : console.log(`False`);
                break;

            case 'End':
                let checkEnd = tokens[1];
                string.endsWith(checkEnd) ? console.log(`True`) : console.log(`False`);
                break;

            case 'Uppercase':
                string = string.toUpperCase();
                console.log(string);
                break;

            case 'FindIndex':
                let checkIndexOfChar = string.indexOf(tokens[1]);
                console.log(checkIndexOfChar);
                break;

            case 'Cut':
                let startIndex = Number(tokens[1]);
                let length = Number(tokens[2]);

                string = string.substr(startIndex, length);
                console.log(string);
                break;
        }
        action = actions.shift();
    }
}

manipulateString(['//Th1s 1s my str1ng!//',
    'Change 1 i',
    'Includes string',
    'End my',
    'Uppercase',
    'FindIndex I',
    'Cut 5 5',
    'Done'
]);