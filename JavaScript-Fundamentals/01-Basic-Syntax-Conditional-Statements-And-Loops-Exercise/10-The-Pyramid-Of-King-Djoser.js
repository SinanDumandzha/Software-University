function solve(base, increment) {
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let totalGold = 0;
    let row = 0;
    let currentBase = base;

    while (currentBase > 2) {
        let marbel = currentBase * 4 - 4;
        let stone = currentBase * currentBase - marbel;
        totalStone += stone;

        row += 1;
        if (row % 5 == 0) {
            totalLapis += marbel;
        } else {
            totalMarble += marbel;
        }
        currentBase -= 2;
    }
    row += 1;
    let gold = currentBase * currentBase;

    stone = Math.ceil(totalStone * increment);
    marble = Math.ceil(totalMarble * increment);
    lapis = Math.ceil(totalLapis * increment);
    totalGold = Math.ceil(gold * increment);
    totalHeight = Math.floor(row * increment);

    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${totalGold}`);
    console.log(`Final pyramid height: ${totalHeight}`);
}

solve(11, 1);