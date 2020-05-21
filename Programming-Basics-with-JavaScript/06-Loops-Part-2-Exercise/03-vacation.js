function solve(input) {
    let tripPrice = Number(input.shift());
    let budget = Number(input.shift());

    let spendCount = 0;
    let daysCount = 0;

    while (budget < tripPrice && spendCount < 5) {
        let action = input.shift();
        let amountOfAction = Number(input.shift());

        if (action === 'save') {
            budget += amountOfAction
            spendCount = 0;
            daysCount += 1;

            if (budget >= tripPrice) {
                console.log(`You saved the money for ${daysCount} days.`);
                break;
            }
        } else if (action === 'spend') {
            budget -= amountOfAction;
            if (budget < 0) {
                budget = 0;
            }
            spendCount += 1;
            daysCount += 1;

            if (spendCount == 5) {
                console.log(`You can't save the money.`);
                console.log(`${daysCount}`)
                break;
            }
        }
    }
}

solve(['110', '60', 'spend', '10', 'spend', '10', 'spend', '10', 'spend', '10', 'spend', '10']);