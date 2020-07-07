function createFriendList(input) {
    let usernames = input.shift().split(', ');
    let command = input.shift();
    let blacklistCount = 0;
    let lostNameCount = 0;

    while (command !== 'Report') {
        let [action, info, newName] = command.split(' ');

        switch (action) {
            case 'Blacklist':
                if (usernames.includes(info)) {
                    console.log(`${info} was blacklisted.`);
                    let nameIndex = usernames.indexOf(info);
                    usernames.splice(nameIndex, 1, 'Blacklisted');
                    blacklistCount++;
                } else {
                    console.log(`${info} was not found.`);
                }
                command = input.shift();
                break;

            case 'Error':
                info = Number(info);

                if (usernames[info] !== ('Blacklisted') && usernames[info] !== ('Lost')) {
                    let name = usernames[info];
                    usernames.splice(info, 1, 'Lost');
                    console.log(`${name} was lost due to an error.`);
                    lostNameCount++;
                }
                command = input.shift();
                break;

            case 'Change':
                info = Number(info);

                if (info >= 0 && info < usernames.length) {
                    let currentName = usernames[info];
                    let startIndex = usernames.indexOf(currentName);
                    usernames.splice(startIndex, 1, newName);
                    console.log(`${currentName} changed his username to ${newName}.`);
                }
                command = input.shift();
                break;
        }
    }
    console.log(`Blacklisted names: ${blacklistCount}`);
    console.log(`Lost names: ${lostNameCount}`);
    console.log(usernames.join(' '));
}

createFriendList(['Mike, John, Eddie, William',
    'Error 3',
    'Error 3',
    'Change 0 Mike123',
    'Blacklist Eddie',
    'Report'
]);