function printGameResult(input) {
    let cars = {};

    let carsCount = Number(input[0]);
    let carsArr = input.slice(1);

    for (let i = 0; i < carsCount; i++) {
        let [carNameModel, mileage, fuel] = carsArr.shift().split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);

        cars[carNameModel] = {
            mileage,
            fuel
        };
    }

    let command = carsArr.shift();

    while (command !== 'Stop') {
        let [
            action,
            carNameModel,
            firstArgument,
            secondArgument
        ] = command.split(' : ');

        switch (action) {
            case 'Drive':
                let distance = Number(firstArgument);
                let fuel = Number(secondArgument);

                if (cars[carNameModel].fuel >= fuel) {
                    cars[carNameModel].mileage += distance;
                    cars[carNameModel].fuel -= fuel;

                    console.log(`${carNameModel} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

                    if (cars[carNameModel].mileage >= 100000) {
                        delete cars[carNameModel];
                        console.log(`Time to sell the ${carNameModel}!`);
                    }
                } else {
                    console.log(`Not enough fuel to make that ride`);
                }
                break;

            case 'Refuel':
                let oldFuel = cars[carNameModel].fuel;
                let refueled = Number(firstArgument);

                if ((oldFuel + refueled) > 75) {
                    cars[carNameModel].fuel = 75;
                    console.log(`${carNameModel} refueled with ${75 - oldFuel} liters`);
                } else {
                    cars[carNameModel].fuel += refueled;
                    console.log(`${carNameModel} refueled with ${refueled} liters`);
                }
                break;

            case 'Revert':
                let kmsToDecrease = Number(firstArgument);

                cars[carNameModel].mileage -= kmsToDecrease;

                if (cars[carNameModel].mileage >= 10000) {
                    console.log(`${carNameModel} mileage decreased by ${kmsToDecrease} kilometers`);
                } else {
                    cars[carNameModel].mileage = 10000;
                }
                break;
        }
        command = carsArr.shift();
    }

    let carEntries = Object.entries(cars);

    let sortedCarEntries = carEntries.sort((a, b) => {
        if (b[1].mileage == a[1].mileage) {
            return a[0].localeCompare(b[0]);
        } else {
            return b[1].mileage - a[1].mileage;
        }
    });

    for (let kvp of sortedCarEntries) {
        console.log(`${kvp[0]} -> Mileage: ${kvp[1].mileage} kms, Fuel in the tank: ${kvp[1].fuel} lt.`);
    }
}

// printGameResult([
//     '4',
//     'Lamborghini Veneno|11111|74',
//     'Bugatti Veyron|12345|67',
//     'Koenigsegg CCXR|67890|12',
//     'Aston Martin Valkryie|99900|50',
//     'Drive : Koenigsegg CCXR : 382 : 82',
//     'Drive : Aston Martin Valkryie : 99 : 23',
//     'Drive : Aston Martin Valkryie : 2 : 1',
//     'Refuel : Lamborghini Veneno : 40',
//     'Revert : Bugatti Veyron : 2000',
//     'Stop'
// ]);

printGameResult([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])