function checkAndEncryptPassword(input) {
    let passwordsCount = Number(input[0]);
    let passwords = input.slice(1);

    for (let i = 0; i < passwordsCount; i++) {
        let password = passwords[i];
        let pattern = /^(?<starting>^(.+))\>(?<numbers>[0-9]{3})\|(?<lowercaseLetters>[a-z]{3})\|(?<uppercaseLetters>[A-Z]{3})\|(?<symbols>[^\<\>]{3})\<(\k<starting>)$/g;
        let match = pattern.exec(password);

        if (match) {
            let numbers = match.groups.numbers;
            let lowercaseLetters = match.groups.lowercaseLetters;
            let uppercaseLetters = match.groups.uppercaseLetters;
            let symbols = match.groups.symbols;

            let encryptedPassword = numbers + lowercaseLetters + uppercaseLetters + symbols;
            console.log(`Password: ${encryptedPassword}`);
        } else {
            console.log(`Try another password!`);
        }
    }
}

checkAndEncryptPassword(['5',
    'aa>111|mqu|BAU|mqu<aa',
    '()>111!aaa!AAA!^&*<()',
    'o>088|abc|AAA|***<o',
    'asd>asd|asd|ASD|asd<asd',
    '*>088|zzzz|ZzZ|123<*'
]);