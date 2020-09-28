function createProducedCarsList(input) {
    let carsList = {};

    input.forEach(carInfo => {
        let [company, model, count] = carInfo.split(' | ');

        count = +count;

        if (!carsList.hasOwnProperty(company)) {
            carsList[company] = {};
        }

        if (carsList[company].hasOwnProperty(model)) {
            carsList[company][model] += count;
        } else {
            carsList[company][model] = count;
        }
    });

    for (let [company, models] of Object.entries(carsList)) {
        console.log(company);

        for (let [model, count] of Object.entries(models)) {
            console.log(`###${model} -> ${count}`);
        }
    }
}

createProducedCarsList(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);