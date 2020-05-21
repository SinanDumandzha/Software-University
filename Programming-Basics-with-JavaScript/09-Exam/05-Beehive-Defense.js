function solve(beesCountInput, bearsHealthInput, attackInput) {
    let beesCount = Number(beesCountInput);
    let bearsHealth = Number(bearsHealthInput);
    let attack = Number(attackInput);

    let isBearWon = false;
    let isBeesWon = false;

    while (bearsHealth >= 0 || beesCount > 100) {
        beesCount -= attack;
        bearsHealth -= beesCount * 5;

        if (bearsHealth <= 0) {
            isBeesWon = true;
            break;
        } else if (beesCount < 100) {
            if (beesCount < 0) {
                beesCount = 0;
            }
            isBearWon = true;
            break;
        }
    }
    if (isBearWon) {
        console.log(`The bear stole the honey! Bees left ${beesCount}.`);
    } else if (isBeesWon) {
        console.log(`Beehive won! Bees left ${beesCount}.`);
    }
}

solve('200', '1000', '90');