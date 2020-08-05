function printHeroesData(input) {
    let heroesData = {};
    let actionsData = input.slice();
    let action = actionsData.shift();
    let tokens = action.split(' ');

    while (action !== 'End') {
        let tokens = action.split(' ');
        let command = tokens[0];
        let heroName = tokens[1];
        let spell = tokens[2];

        switch (command) {
            case 'Enroll':
                if (!heroesData.hasOwnProperty(heroName)) {
                    heroesData[heroName] = [];
                } else {
                    console.log(`${heroName} is already enrolled.`);
                }
                break;

            case 'Learn':
                if (heroesData.hasOwnProperty(heroName)) {
                    if (!heroesData[heroName].includes(spell)) {
                        heroesData[heroName].push(spell);
                    } else {
                        console.log(`${heroName} has already learnt ${spell}.`);
                    }
                } else {
                    console.log(`${heroName} doesn't exist.`);
                }
                break;

            case 'Unlearn':
                if (heroesData.hasOwnProperty(heroName)) {
                    if (heroesData[heroName].includes(spell)) {
                        let deleteSpellIndex = Number(heroesData[heroName].indexOf(spell));
                        heroesData[heroName].splice(deleteSpellIndex, 1);
                    } else {
                        console.log(`${heroName} doesn't know ${spell}.`);
                    }
                } else {
                    console.log(`${heroName} doesn't exist.`);
                }
                break;
        }
        action = actionsData.shift();
    }

    let sortedHeroesData = Object.entries(heroesData).sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));

    console.log(`Heroes:`);

    for (let hero of sortedHeroesData) {
        console.log(`== ${hero[0]}: ${hero[1].join(', ')}`);
    }
}

printHeroesData(['Enroll Stefan',
    'Learn Stefan ItShouldWork',
    'Learn Stefan ItShouldWork',
    'Unlearn Stefan NotFound',
    'End'
]);