function decryptMessage(input) {
    let message = input[0];
    let actionArray = input.slice(1);
    let action = actionArray.shift();

    while (action !== 'Reveal') {
        let [command, firstArgument, secondArgument] = action.split(':|:');

        let hasError = false;

        switch (command) {
            case 'InsertSpace':
                let indexToPlace = Number(firstArgument);

                message = message.substring(0, indexToPlace) + ' ' + message.substring(indexToPlace);
                break;

            case 'Reverse':
                if (message.includes(firstArgument)) {
                    let reversedText = firstArgument.split('').reverse().join('');
                    message = message.replace(firstArgument, '').concat(reversedText);
                } else {
                    hasError = true;
                    console.log('error');
                }
                break;

            case 'ChangeAll':
                while (message.includes(firstArgument)) {
                    message = message.replace(firstArgument, secondArgument);
                }
                break;
        }
        if (!hasError) {
            console.log(`${message}`);
        }

        action = actionArray.shift();
    }
    console.log(`You have a new text message: ${message}`);
}

decryptMessage([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);