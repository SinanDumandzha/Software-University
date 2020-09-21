function addAndRemoveElements(input) {
    let initialNumber = 1;
    let result = [];

    input.forEach(command => {
        if (command === 'add') {
            result.push(initialNumber);
        } else if (command === 'remove') {
            result.pop();
        }
        initialNumber++;
    });

    if (result.length !== 0) {
        result.forEach(element => console.log(element));
    } else {
        console.log('Empty');
    }
}

addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add'
]);