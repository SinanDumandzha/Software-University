function weaponCrafter(input) {
    let nameParts = input.shift().split('|');

    for (command of input) {
        let [action, info, index] = command.split(' ');
        let indexToMove = 0;
        index = Number(index);

        switch (info) {
            case 'Left':

                if (index > 0 && index < nameParts.length) {
                    [nameParts[index - 1], nameParts[index]] = [nameParts[index], nameParts[index - 1]];
                }
                break;

            case 'Right':

                if (index >= 0 && index < nameParts.length - 1) {
                    [nameParts[index + 1], nameParts[index]] = [nameParts[index], nameParts[index + 1]];
                }
                break;

            case 'Even':
                let evenIndex = [];

                for (let i = 0; i < nameParts.length; i += 2) {
                    evenIndex.push(nameParts[i]);
                }
                console.log(evenIndex.join(' '));
                break;

            case 'Odd':
                let oddIndex = [];

                for (let i = 1; i < nameParts.length; i += 2) {
                    oddIndex.push(nameParts[i]);
                }
                console.log(oddIndex.join(' '));
                break;
        }
    }

    let weaponName = nameParts.join('');
    console.log(`You crafted ${weaponName}!`);
}

weaponCrafter(['ha|Do|mm|om|er',
    'Move Right 0',
    'Move Left 3',
    'Check Odd',
    'Move Left 2',
    'Move Left 10',
    'Move Left 0',
    'Done'
]);