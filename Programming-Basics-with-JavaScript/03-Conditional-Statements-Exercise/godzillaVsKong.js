function calculate(budget, statistCount, dressPrice) {

    budget = Number(budget);
    statistCount = Number(statistCount);
    dressPrice = Number(dressPrice);

    let decorPrice = budget * 0.1;
    let totalDressPrice = statistCount * dressPrice;
    let totalDecorAndDress = 0;

    if (statistCount >= 150) {
        totalDressPrice = totalDressPrice * 0.9;
        totalDecorAndDress = totalDressPrice + decorPrice;
    } else {
        totalDecorAndDress = totalDressPrice + decorPrice;
    }

    if (budget >= totalDecorAndDress) {
        let moneyLeft = budget - totalDecorAndDress;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);

    } else {
        let moneyNeeded = totalDecorAndDress - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    }
}

calculate("9587.88", "222", "55.68");