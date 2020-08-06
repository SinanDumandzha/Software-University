function printMessageManagerInfo(input) {
    let messageManager = {};
    let usersCount = 0;
    let capacity = Number(input[0]);
    let actionsArr = input.slice(1);
    let action = actionsArr.shift();

    while (action !== 'Statistics') {
        let tokens = action.split('=');
        let command = tokens[0];

        switch (command) {
            case 'Add':
                let username = tokens[1];
                let sent = Number(tokens[2]);
                let recieved = Number(tokens[3]);

                if (!messageManager.hasOwnProperty(username)) {
                    messageManager[username] = {
                        sent: sent,
                        recieved: recieved,
                    }
                    usersCount++;
                }
                break;

            case 'Message':
                let sender = tokens[1];
                let reciever = tokens[2];

                if (messageManager.hasOwnProperty(sender) && messageManager.hasOwnProperty(reciever)) {
                    messageManager[sender].sent += 1;
                    messageManager[reciever].recieved += 1;

                    if ((messageManager[sender].sent + messageManager[sender].recieved) >= capacity) {
                        console.log(`${sender} reached the capacity!`);
                        delete messageManager[sender];
                        usersCount--;
                    }

                    if ((messageManager[reciever].sent + messageManager[reciever].recieved) >= capacity) {
                        console.log(`${reciever} reached the capacity!`);
                        delete messageManager[reciever];
                        usersCount--;
                    }
                }
                break;

            case 'Empty':
                let usernameToEmptyData = tokens[1];

                if (messageManager.hasOwnProperty(usernameToEmptyData)) {
                    delete messageManager[usernameToEmptyData];
                    usersCount--;
                }

                if (usernameToEmptyData === 'All') {
                    for (let userToDelete in messageManager) {
                        delete messageManager[userToDelete];
                    }
                    usersCount = 0;
                }
                break;
        }
        action = actionsArr.shift();
    }

    console.log(`Users count: ${usersCount}`);

    let sortedMessageManager = Object.entries(messageManager).sort((a, b) => b[1].recieved - a[1].recieved || a[0].localeCompare(b[0]));

    for (let user of sortedMessageManager) {
        let totalMessages = user[1].sent + user[1].recieved;
        console.log(`${user[0]} - ${totalMessages}`);
    }
}

printMessageManagerInfo(['20',
    'Add=Mark=3=9',
    'Add=Berry=5=5',
    'Add=Clark=4=0',
    'Empty=Berry',
    'Add=Blake=9=3',
    'Add=Michael=3=9',
    'Add=Amy=9=9',
    'Message=Blake=Amy',
    'Message=Michael=Amy',
    'Statistics'
]);