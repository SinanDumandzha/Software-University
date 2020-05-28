function solve(distance, passengersCount, fuelLtPrice) {
    let neededFuel = ((distance / 100) * 7) + passengersCount * 0.1;
    let neededMoney = neededFuel * fuelLtPrice;

    console.log(`Needed money for that trip is ${neededMoney}lv.`);
}

solve(90, 14, 2.88);