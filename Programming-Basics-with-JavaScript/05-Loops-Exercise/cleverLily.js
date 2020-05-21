function solve (ageInput, wMachinePriceInput, toyPriceInput) {
    let age = Number (ageInput);
    let wMachinePrice = Number (wMachinePriceInput);
    let toyPrice = Number (toyPriceInput);

    let money = 0;
    let moneyTotal = 0;
    let toyPriceTotal = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            money += 10;
            moneyTotal += money - 1;
        } else {
            toyPriceTotal += toyPrice;
        }
    }
    let moneyFinal = moneyTotal + toyPriceTotal;
    let moneyLeft = 0;

    if (moneyFinal >= wMachinePrice) {
        moneyLeft = moneyFinal - wMachinePrice;
        console.log (`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        moneyLeft = wMachinePrice - moneyFinal;
        console.log (`No! ${moneyLeft.toFixed(2)}`);
    }
}

solve ('10', '170.00', '6');