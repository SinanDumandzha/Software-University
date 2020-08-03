function checkRegistration(input) {
    let registrationsCount = Number(input[0]);
    let successfulRegistrationsCount = 0;

    for (let i = 1; i <= registrationsCount; i++) {
        let registrationText = input[i];
        let pattern = /(U\$)(?<username>[A-Z][a-z]{2,})(U\$)(P\@\$)(?<password>[A-Za-z]{5,}[0-9]+)(P\@\$)/g;
        let match = pattern.exec(registrationText);

        if (match) {
            successfulRegistrationsCount++;
            console.log(`Registration was successful`);
            console.log(`Username: ${match.groups.username}, Password: ${match.groups.password}`);
        } else {
            console.log(`Invalid username or password`);
        }
    }
    console.log(`Successful registrations: ${successfulRegistrationsCount}`);
}

checkRegistration(['3',
    'U$MichaelU$P@$asdqwe123P@$',
    'U$NameU$P@$PasswordP@$',
    'U$UserU$P@$ad2P@$'
]);