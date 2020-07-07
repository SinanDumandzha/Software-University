function printResult(input) {
    let targets = input.shift().split('|').map(Number);
    let points = 0;

    for (command of input) {
        let [action, startIndex, length] = command.split('@');
        startIndex = Number(startIndex);
        length = Number(length);

        let targetIndex = 0;

        switch (action) {
            case 'Shoot Left':
                if (startIndex >= 0 && startIndex < targets.length) {
                    targetIndex = startIndex - length;

                    while (targetIndex < 0) {
                        targetIndex += targets.length;
                    }

                    if (targets[targetIndex] >= 5) {
                        targets[targetIndex] -= 5;
                        points += 5;
                    } else if (0 < targets[targetIndex] < 5) {
                        points += targets[targetIndex];
                        targets[targetIndex] = 0;
                    } 
                }
                break;

            case 'Shoot Right':
                if (startIndex >= 0 && startIndex < targets.length) {
                    targetIndex = startIndex + length;

                    while (targetIndex >= targets.length) {
                        targetIndex -= targets.length;
                    }

                    if (targets[targetIndex] >= 5) {
                        targets[targetIndex] -= 5;
                        points += 5;
                    } else if (0 < targets[targetIndex] < 5) {
                        points += targets[targetIndex];
                        targets[targetIndex] = 0;
                    } 
                }
                break;

            case 'Reverse':
                targets.reverse();
                break;

            case 'Game over':
                console.log(targets.join(' - '));
                console.log(`Iskren finished the archery tournament with ${points} points!`);
                break;
        }
    }
}

printResult(['20|30|40|50|60',
    'Shoot Left@0@12',
    'Shoot Right@4@15',
    'Shoot Left@6@5',
    'Reverse',
    'Game over',
]);