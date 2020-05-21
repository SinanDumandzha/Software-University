function solve(input) {
    let amount = Number(input.shift()) * 100;

    let coins = 0;

    while (200 <= amount) {
        amount -= 200;
        coins += 1;
    }
    while (100 <= amount) {
        amount -= 100;
        coins += 1;
    }
    while (50 <= amount) {
        amount -= 50;
        coins += 1;
    }
    while (20 <= amount) {
        amount -= 20;
        coins += 1;
    }
    while (10 <= amount) {
        amount -= 10;
        coins += 1;
    }
    while (5 <= amount) {
        amount -= 5;
        coins += 1;
    }
    while (2 <= amount) {
        amount -= 2;
        coins += 1;
    }
    while (1 <= amount) {
        amount -= 1;
        coins += 1;
    }
    console.log(coins);
}

solve([1.23]); 
