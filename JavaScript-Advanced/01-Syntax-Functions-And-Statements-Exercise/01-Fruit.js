function calculateNeededMoney(fruit, weightGr, pricePerKg) {
    let weightKg = Number(weightGr / 1000);
    let price = Number(pricePerKg);
    let neededMoney = weightKg * price;

    console.log(`I need $${neededMoney.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`);
}

calculateNeededMoney('apple', 1563, 2.35);