function modifyArray(input) {
    let array = input.shift().split(' ').map(Number);

    let command = '';

    while (command !== 'end') {
        for (command of input) {
            let [action, firstIndex, secondIndex] = command.split(' ');
            firstIndex = Number(firstIndex);
            secondIndex = Number(secondIndex);

            let indexCheck = (firstIndex >= 0 && firstIndex < array.length) && (secondIndex >= 0 && secondIndex < array.length);

            switch (action) {
                case 'swap':
                    if (indexCheck) {
                        [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]];
                    }
                    break;

                case 'multiply':
                    if (indexCheck) {
                        let result = array[firstIndex] * array[secondIndex];
                        array.splice(firstIndex, 1, result);
                    }
                    break;

                case 'decrease':
                    array = array.map(x => x - 1);
                    break;
            }
        }
    }
    console.log(array.join(', '));
}

modifyArray(['23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);