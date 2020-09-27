function registerAndPrintTownPopulations(input) {
    let towns = {};

    input.forEach(townInfo => {
        let [townName, popuation] = townInfo.split(' <-> ');

        if (!towns.hasOwnProperty([townName])) {
            towns[townName] = Number(popuation);
        } else {
            towns[townName] += Number(popuation);
        }
    });

    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`);
    }
}

registerAndPrintTownPopulations(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);