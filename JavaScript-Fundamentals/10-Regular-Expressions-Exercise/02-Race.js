function printRaceResult(input) {
    let racers = input[0].split(', ');
    let data = input.slice(1);

    let raceInfo = {};

    for (let info of data) {
        let nameMatch = info.match(/[A-Za-z]/g);
        let name = nameMatch.join('');

        if (nameMatch && racers.includes(name)) {
            let distanceMatch = info.match(/[\d]/g);
            let distance = distanceMatch.reduce(reducer = (accumulator, currentValue) => Number(accumulator) + Number(currentValue));

            if (!raceInfo[name]) {
                raceInfo[name] = 0;
            }

            raceInfo[name] += distance;
        }
    }

    let firstThreeRacers = Object.keys(raceInfo).sort((a, b) => raceInfo[b] - raceInfo[a]).slice(0, 3);

    for (let index in firstThreeRacers) {

        switch (index) {
            case '0':
                console.log(`1st place: ${firstThreeRacers[index]}`);
                break;

            case '1':
                console.log(`2nd place: ${firstThreeRacers[index]}`);
                break;

            case '2':
                console.log(`3rd place: ${firstThreeRacers[index]}`);
                break;
        }
    }
}

printRaceResult([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);