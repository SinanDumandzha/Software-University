function heartGame(input) {
    let houses = input.shift().split('@').map(Number);
    let command = input.shift();

    let currentIndex = 0;

    while (command !== 'Love!') {
        let tokens = command.split(' ');
        let jumpLength = Number(tokens[1]);

        currentIndex += jumpLength;

        if (currentIndex >= houses.length) {
            currentIndex = 0;
        }

        if (houses[currentIndex] === 0) {
            console.log(`Place ${currentIndex} already had Valentine's day.`);
        } else {
            houses[currentIndex] -= 2;
            
            if (houses[currentIndex] === 0) {
                console.log(`Place ${currentIndex} has Valentine's day.`);
            }
        }

        command = input.shift();
    }

    console.log(`Cupid's last position was ${currentIndex}.`);

    let isSuccess = true;
    let count = 0;

    for (const house of houses) {
        if (house !== 0) {
            isSuccess = false;
            count++;
        }
    }

    if (isSuccess) {
        console.log(`Mission was successful.`);
    } else {
        console.log(`Cupid has failed ${count} places.`);
    }
}

heartGame(['2@4@0',
    'Jump 2',
    'Jump 2',
    'Jump 8',
    'Jump 3',
    'Jump 1',
    'Love!'
]);