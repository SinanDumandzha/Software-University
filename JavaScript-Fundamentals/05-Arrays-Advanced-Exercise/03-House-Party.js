function prepareGuestList(list) {

    let guestList = [];

    for (let command of list) {

        command = command.split(' ');
        let name = command[0];

        if (!command.includes('not')) {

            if (!guestList.includes(name)) {
                guestList.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {

            if (guestList.includes(name)) {
                guestList = guestList.filter((guestName) => guestName !== name);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    console.log(guestList.join('\n'));
}

prepareGuestList(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'
]);