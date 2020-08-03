function manageInbox(input) {
    let inboxInfo = {};
    let usersCount = 0;
    let commands = input.slice();
    let command = commands.shift();

    while (command !== 'Statistics') {
        let [action, username, email] = command.split('->');

        switch (action) {
            case 'Add':
                if (!inboxInfo[username]) {
                    inboxInfo[username] = {
                        email: []
                    };
                    usersCount++;
                } else {
                    console.log(`${username} is already registered`);
                }
                break;

            case 'Send':
                if (inboxInfo[username]) {
                    inboxInfo[username].email.push(email);
                }
                break;

            case 'Delete':
                if (inboxInfo[username]) {
                    delete inboxInfo[username];
                    usersCount--;
                } else {
                    console.group(`${username} not found!`);
                }
                break;
        }
        command = commands.shift();
    }

    console.log(`Users count: ${usersCount}`);

    let sortedInboxInfo = Object.entries(inboxInfo).sort((a, b) => b[1].email.length - a[1].email.length || a[0].localeCompare(b[0]));

    for (let user of sortedInboxInfo) {
        console.log(`${user[0]}`);

        for (let mail of user[1].email)
            console.log(` - ${mail}`);
    }
}

manageInbox(['Add->Mike',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Some random test mail',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Send->George->It would be a pleasure',
    'Send->Mike->Another random test mail',
    'Statistics'
]);