function solve(input) {
    let budget = Number(input.shift());
    let gender = input.shift();
    let age = Number(input.shift());
    let sportType = input.shift();

    let price = 0;

    if (gender == 'm') {
        switch (sportType) {
            case 'Gym':
                price = 42;
                break;
            case 'Boxing':
                price = 41;
                break;
            case 'Yoga':
                price = 45;
                break;
            case 'Zumba':
                price = 34;
                break;
            case 'Dances':
                price = 51;
                break;
            case 'Pilates':
                price = 39;
                break;
        }
    } else {
        switch (sportType) {
            case 'Gym':
                price = 35;
                break;
            case 'Boxing':
                price = 37;
                break;
            case 'Yoga':
                price = 42;
                break;
            case 'Zumba':
                price = 31;
                break;
            case 'Dances':
                price = 53;
                break;
            case 'Pilates':
                price = 37;
                break;
        }
    }
    if (age <= 19) {
        price *= 0.8; 
    }
    if (budget >= price) {
        console.log(`You purchased a 1 month pass for ${sportType}.`);
    } else {
        let moneyNeeded = price - budget;
        console.log(`You don't have enough money! You need $${moneyNeeded.toFixed(2)} more.`);
    }
}

solve(['20', 'f', '15', 'Yoga']);