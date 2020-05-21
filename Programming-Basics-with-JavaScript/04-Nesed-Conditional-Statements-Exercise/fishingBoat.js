function fishing(budget, season, fisherCount) {

    budget = Number(budget);
    fisherCount = Number(fisherCount);

    let price = 0;
    let money = 0;

    if (season === 'Spring') {
        price = 3000;

        if (fisherCount > 0 && fisherCount <= 6) {
            price *= 0.9;

        } else if (fisherCount > 7 && fisherCount <= 11) {
            price *= 0.85;

        } else if (fisherCount >= 12) {
            price *= 0.75;
        }

        if (fisherCount % 2 == 0) {
            price *= 0.95;
        }

        money = Math.abs(budget - price);

        if (budget >= price) {
            console.log(`Yes! You have ${money.toFixed(2)} leva left.`);

        } else if (budget < price) {
            console.log(`Not enough money! You need ${money.toFixed(2)} leva.`);
        }
    }

    if (season === 'Summer') {
        price = 4200;

        if (fisherCount > 0 && fisherCount <= 6) {
            price *= 0.9;

        } else if (fisherCount > 7 && fisherCount <= 11) {
            price *= 0.85;

        } else if (fisherCount >= 12) {
            price *= 0.75;
        }

        if (fisherCount % 2 == 0) {
            price *= 0.95;
        }

        money = Math.abs(budget - price);

        if (budget >= price) {
            console.log(`Yes! You have ${money.toFixed(2)} leva left.`);

        } else if (budget < price) {
            console.log(`Not enough money! You need ${money.toFixed(2)} leva.`);
        }
    }

    if (season === 'Autumn') {
        price = 4200;

        if (fisherCount > 0 && fisherCount <= 6) {
            price *= 0.9;

        } else if (fisherCount > 7 && fisherCount <= 11) {
            price *= 0.85;

        } else if (fisherCount >= 12) {
            price *= 0.75;
        }

        money = Math.abs(budget - price);

        if (budget >= price) {
            console.log(`Yes! You have ${money.toFixed(2)} leva left.`);

        } else if (budget < price) {
            console.log(`Not enough money! You need ${money.toFixed(2)} leva.`);
        }
    }

    if (season === 'Winter') {
        price = 2600;

        if (fisherCount > 0 && fisherCount <= 6) {
            price *= 0.9;

        } else if (fisherCount > 7 && fisherCount <= 11) {
            price *= 0.85;

        } else if (fisherCount >= 12) {
            price *= 0.75;
        }

        if (fisherCount % 2 == 0) {
            price *= 0.95;
        }

        money = Math.abs(budget - price);

        if (budget >= price) {
            console.log(`Yes! You have ${money.toFixed(2)} leva left.`);

        } else if (budget < price) {
            console.log(`Not enough money! You need ${money.toFixed(2)} leva.`);
        }
    }
}

fishing('2000', 'Winter', '14');
