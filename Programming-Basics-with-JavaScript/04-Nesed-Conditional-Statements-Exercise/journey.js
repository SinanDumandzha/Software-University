function journey(budget, season) {

    budget = Number(budget);

    let destination = '';
    let place = '';
    let moneySpend = 0;

    if (budget <= 100) {
        destination = 'Bulgaria';

        if (season === 'summer') {
            place = 'Camp';
            moneySpend = budget * 0.3;

        } else if (season === 'winter') {
            place = 'Hotel';
            moneySpend = budget * 0.7;
        }
        console.log(`Somewhere in Bulgaria`);
        console.log(`${place} - ${moneySpend.toFixed(2)}`);

    } else if (budget <= 1000) {
        destination = 'Balkans';

        if (season === 'summer') {
            place = 'Camp';
            moneySpend = budget * 0.4;

        } else if (season === 'winter') {
            place = 'Hotel';
            moneySpend = budget * 0.8;
        }
        console.log(`Somewhere in Balkans`);
        console.log(`${place} - ${moneySpend.toFixed(2)}`);

    } else if (budget > 1000) {
        destination = 'Europe';
        place = 'Hotel';
        moneySpend = budget * 0.9;

        console.log(`Somewhere in Europe`);
        console.log(`${place} - ${moneySpend.toFixed(2)}`);
    }
}

journey('50', 'summer');