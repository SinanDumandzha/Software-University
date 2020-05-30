function solve(startingYield) {
    let minedSpice = 0;
    let minedDays = 0;

    while (startingYield >= 100) {
        minedSpice += startingYield - 26;
        startingYield -= 10; 
        minedDays++;
    }
    minedSpice += (-26);

    if (minedSpice >= 26) {
        console.log(minedDays);
        console.log(minedSpice);
    } else {
        minedSpice = 0;

        console.log(minedDays);
        console.log(minedSpice);
    }
}

solve(111);