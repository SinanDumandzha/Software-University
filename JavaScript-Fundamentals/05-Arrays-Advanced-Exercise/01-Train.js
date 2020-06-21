function trainOrganizator(inputData) {

    let wagons = inputData.shift()
        .split(' ')
        .map(Number);
    let maxCapacity = Number(inputData.shift());

    for (let command of inputData) {

        command = command.split(' ');

        if (command[0] == 'Add') {
            wagons.push(Number(command[1]));
        } else {

            for (let index in wagons) {

                command = Number(command);

                if (wagons[index] + command <= maxCapacity) {
                    wagons[index] += command;
                    break;
                }
            }
        }
    }

    console.log(wagons.join(' '));
}

trainOrganizator(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
]);