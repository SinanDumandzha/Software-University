function neighborhoodsList(input) {
    let neighborhoodsList = input.shift().split(', ');
    let neighborhoods = new Map();

    for (let location of neighborhoodsList) {
        neighborhoods.set(location, []);
    }

    for (let data of input) {
        let [neighborhood, person] = data.split(' - ');

        if (neighborhoods.has(neighborhood)) {
            neighborhoods.get(neighborhood).push(person);
        }
    }

    let sorted = Array.from(neighborhoods.keys()).sort((a, b) => {
        return neighborhoods.get(b).length - neighborhoods.get(a).length;
    });

    for (let place of sorted) {
        console.log(`${place}: ${neighborhoods.get(place).length}`);

        for (let person of neighborhoods.get(place)) {
            console.log(`--${person}`);
        }
    }
}

neighborhoodsList(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'
]);