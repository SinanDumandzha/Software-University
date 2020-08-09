function printPlantDiscoveryInfo(input) {
    let plantsInfo = {};
    let plantsCount = Number(input[0]);
    let plants = input.slice(1, plantsCount + 1);

    for (let i = 0; i < plantsCount; i++) {
        let [plantName, rarity] = plants[i].split('<->');
        rarity = Number(rarity);

        if (!(plantsInfo.hasOwnProperty(plantName))) {
            plantsInfo[plantName] = {
                rarity: rarity,
                ratings: [],
                ratingsAverage: 0
            }
        } else {
            plantsInfo[plantName].rarity = rarity;
        }
    }

    let actions = input.slice(plantsCount + 1);
    let action = actions.shift();

    while (action !== 'Exhibition') {
        let tokens = action.split(' ');
        let command = tokens[0];
        let plant = tokens[1];

        switch (command) {
            case 'Rate:':
                if ((plantsInfo.hasOwnProperty(plant))) {
                    let rating = Number(tokens[3]);
                    plantsInfo[plant].ratings.push(rating);
                    plantsInfo[plant].ratingsAverage = ((plantsInfo[plant].ratings).map(Number).reduce((accumulator, currentValue) => accumulator + currentValue)) / plantsInfo[plant].ratings.length;
                } else {
                    console.log(`error`);
                }
                break;

            case 'Update:':
                if ((plantsInfo.hasOwnProperty(plant))) {
                    let newRarity = Number(tokens[3]);
                    plantsInfo[plant].rarity = newRarity;
                } else {
                    console.log(`error`);
                }
                break;

            case 'Reset:':
                if ((plantsInfo.hasOwnProperty(plant))) {
                    plantsInfo[plant].ratings = [];
                    plantsInfo[plant].ratingsAverage = 0;
                } else {
                    console.log(`error`);
                }
                break;
        }
        action = actions.shift();
    }
    console.log(`Plants for the exhibition:`);

    let sortedPlantsInfo = Object.entries(plantsInfo).sort((a, b) => b[1].rarity - a[1].rarity || b[1].ratingsAverage - a[1].ratingsAverage);

    for (let plant of sortedPlantsInfo) {
        console.log(` - ${plant[0]}; Rarity: ${plant[1].rarity}; Rating: ${(plant[1].ratingsAverage).toFixed(2)}`);
    }
}

printPlantDiscoveryInfo(['3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Reset: Arnoldii',
    'Exhibition'
]);