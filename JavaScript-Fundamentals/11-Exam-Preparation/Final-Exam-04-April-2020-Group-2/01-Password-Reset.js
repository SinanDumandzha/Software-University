function passwordReset(input) {
    let password = input[0];
    let actions = input.slice(1);
    let action = actions.shift();

    while (action !== 'Done') {
        let tokens = action.split(' ');
        let command = tokens[0];

        switch (command) {
            case 'TakeOdd':
                let passwordCharArray = password.split('');
                let oddCharPassword = '';

                for (let i = 1; i < passwordCharArray.length; i += 2) {
                    if (i < passwordCharArray.length) {
                        oddCharPassword += passwordCharArray[i];
                    }
                }
                password = oddCharPassword;
                console.log(password);
                break;

            case 'Cut':
                let index = Number(tokens[1]);
                let length = Number(tokens[2]);
                let substring = password.substr(index, length);

                password = password.replace(substring, '');
                console.log(password);
                break;

            case 'Substitute':
                let checkSubstring = tokens[1];
                let subsituteToReplace = tokens[2];

                if (password.includes(checkSubstring)) {
                    while (password.includes(checkSubstring)) {
                        password = password.replace(checkSubstring, subsituteToReplace);
                    }
                    console.log(password);
                } else {
                    console.log(`Nothing to replace!`);
                }
                break;
        }
        action = actions.shift();
    }
    console.log(`Your password is: ${password}`);
}

// passwordReset(['up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
//     'TakeOdd',
//     'Cut 18 2',
//     'Substitute ! ***',
//     'Substitute ? .!.',
//     'Done'
// ]);