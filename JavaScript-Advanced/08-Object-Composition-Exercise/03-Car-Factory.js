function carFactory(wantedCar) {
    let engines = [{
        power: 90,
        volume: 1800
    }, {
        power: 120,
        volume: 2400
    }, {
        power: 200,
        volume: 3500
    }];

    let carriages = [{
        type: 'hatchback',
        color: wantedCar.color
    }, {
        type: 'coupe',
        color: wantedCar.color
    }];

    let wheelsize = wantedCar.wheelsize % 2 == 1 ? wantedCar.wheelsize : wantedCar.wheelsize - 1;

    return {
        model: wantedCar.model,
        engine: engines.find((e) => e.power >= wantedCar.power),
        carriage: carriages.find((c) => c.type == wantedCar.carriage),
        wheels: [wheelsize, wheelsize, wheelsize, wheelsize]
    }
}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});