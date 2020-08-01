function piratesResult(input) {
    let cities = {};
    let sailIndex = input.indexOf('Sail');
    let targetedCities = input.slice(0, sailIndex + 1);
    let target = targetedCities.shift();

    while (target !== 'Sail') {
        let [cityName, population, gold] = target.split('||');

        if (!cities[cityName]) {
            cities[cityName] = {
                population: 0,
                gold: 0
            };
        }

        cities[cityName].population += Number(population);
        cities[cityName].gold += Number(gold);

        target = targetedCities.shift();
    }

    let actions = input.slice(sailIndex + 1);
    let action = actions.shift();

    while (action !== 'End') {
        let tokens = action.split('=>');
        let command = tokens[0];
        let cityName = tokens[1];

        switch (command) {
            case 'Plunder':
                let killedPeople = Number(tokens[2]);
                let stolenGold = Number(tokens[3]);

                if (cities[cityName]) {
                    cities[cityName].population -= killedPeople;
                    cities[cityName].gold -= stolenGold;

                    console.log(`${cityName} plundered! ${stolenGold} gold stolen, ${killedPeople} citizens killed.`);
                }

                if (cities[cityName].population <= 0 || cities[cityName].gold <= 0) {
                    delete cities[cityName];
                    console.log(`${cityName} has been wiped off the map!`);
                }

                break;

            case 'Prosper':
                let incresedGold = Number(tokens[2]);

                if (incresedGold >= 0) {
                    cities[cityName].gold += incresedGold;

                    console.log(`${incresedGold} gold added to the city treasury. ${cityName} now has ${cities[cityName].gold} gold.`);
                } else {
                    console.log(`Gold added cannot be a negative number!`);
                }
                break;
        }
        action = actions.shift();
    }

    if ((Object.keys(cities).length) > 0) {
        console.log(`Ahoy, Captain! There are ${Object.keys(cities).length} wealthy settlements to go to:`);

        let sortedCities = Object.keys(cities).sort((a, b) => (cities[b].gold - cities[a].gold) || (a.localeCompare(b)));

        for (city of sortedCities) {
            let population = cities[city].population;
            let gold = cities[city].gold;

            console.log(`${city} -> Population: ${population} citizens, Gold: ${gold} kg`);
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }
}

// piratesResult(['Nassau||95000||1000',
//     'San Juan||930000||1250',
//     'Campeche||270000||690',
//     'Port Royal||320000||1000',
//     'Port Royal||100000||2000',
//     'Sail',
//     'Prosper=>Port Royal=>-200',
//     'Plunder=>Nassau=>94000=>750',
//     'Plunder=>Nassau=>1000=>150',
//     'Plunder=>Campeche=>150000=>690',
//     'End'
// ]);

piratesResult(['Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End'
])