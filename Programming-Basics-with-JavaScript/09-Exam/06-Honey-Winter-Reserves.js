function solve(input) {
    let neededHoney = Number(input.shift());
    let beesName = input.shift();

    let honeySum = 0;
    let honeyLeft = 0;

    while (beesName !== 'Winter has come') {
        for (let i = 1; i <= 6; i++) {
            honeyAdded = Number(input.shift());
            honeySum += honeyAdded;
        }
        if (honeySum < 0) {
            console.log(`${beesName} was banished for gluttony`);
        }
        if (honeySum >= neededHoney) {
            break;
        }
        beesName = input.shift();
    }

    if (honeySum < neededHoney) {
        honeyLeft = neededHoney - honeySum;
        console.log(`Hard Winter! Honey needed ${honeyLeft.toFixed(2)}.`);
    } else {
        honeyLeft = honeySum - neededHoney;
        console.log(`Well done! Honey surplus ${honeyLeft.toFixed(2)}.`);
    }
}

solve(['300', 'Beeatrice', '50', '-10', '40', '30', '100', '100', 'Winter has come']);