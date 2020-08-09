function printTourDestination(input) {
    let destinations = input[0];
    let actions = input.slice(1);
    let action = actions.shift();

    while (action !== 'Travel') {
        let tokens = action.split(':');
        let command = tokens[0];

        switch (command) {
            case 'Add Stop':
                let index = Number(tokens[1]);
                let string = tokens[2];

                if (index >= 0 && index <= destinations.length) {
                    let leftPart = destinations.substring(0, index);
                    let rightPart = destinations.substring(index);
                    destinations = leftPart + string + rightPart;
                }
                console.log(destinations);
                break;

            case 'Remove Stop':
                let startIndex = Number(tokens[1]);
                let endIndex = Number(tokens[2]);

                if ((startIndex >= 0 && startIndex < destinations.length) && (endIndex >= 0 && endIndex < destinations.length)) {
                    let stringToDelete = destinations.substring(startIndex, endIndex + 1);
                    destinations = destinations.replace(stringToDelete, '');
                }
                console.log(destinations);
                break;

            case 'Switch':
                let oldString = tokens[1];
                let newString = tokens[2];

                if (destinations.includes(oldString)) {
                    destinations = destinations.replace(oldString, newString);
                }
                console.log(destinations);
                break;

            default:
                console.log(destinations);
                break;
        }
        action = actions.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${destinations}`);
}

printTourDestination([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Rome:Bulgaria',
    'Travel'
]);