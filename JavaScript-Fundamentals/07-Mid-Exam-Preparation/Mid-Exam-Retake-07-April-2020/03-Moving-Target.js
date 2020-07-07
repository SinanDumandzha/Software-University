function shootingResult(input) {
    let targetSequence = input.shift().split(' ').map(Number);

    for (data of input) {
        let [command, index, value] = data.split(' ');
        index = Number(index);
        value = Number(value);

        switch (command) {
            case 'Shoot':
                if (targetSequence[index] !== undefined) {
                    targetSequence[index] -= Number(value);
                }

                if (targetSequence[index] <= 0) {
                    targetSequence.splice(targetSequence.indexOf(targetSequence[index]), 1);
                }
                break;

            case 'Add':
                if (targetSequence[index] !== undefined) {
                    targetSequence.splice(targetSequence.indexOf(targetSequence[index]), 0, value);
                } else {
                    console.log(`Invalid placement!`);
                }
                break;

            case 'Strike':
                let checkRange = targetSequence[index - value] !== undefined &&
                    targetSequence[index] !== undefined &&
                    targetSequence[index + value];

                let range = (value * 2) + 1;

                if (checkRange) {
                    targetSequence.splice(targetSequence.indexOf(targetSequence[index - value]), range);
                } else {
                    console.log(`Strike missed!`);
                }
                break;

            case 'End':
                console.log(`${targetSequence.join('|')}`);
                break;
        }
    }
}

// shootingResult(['52 74 23 44 96 110',
//     'Shoot 5 10',
//     'Shoot 1 80',
//     'Strike 2 1',
//     'Add 22 3',
//     'End']);

shootingResult(['47 55 85 78 99 20',
    'Shoot 1 55',
    'Shoot 8 15',
    'Strike 2 3',
    'Add 0 22',
    'Add 2 40',
    'Add 2 50',
    'End']);