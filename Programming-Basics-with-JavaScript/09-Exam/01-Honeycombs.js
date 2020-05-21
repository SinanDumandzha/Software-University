function solve(beesInput, flowersInput) {
    let bees = Number(beesInput);
    let flowers = Number(flowersInput);

    let honey = bees * flowers * 0.21;
    let honeycombs = Math.floor(honey / 100);
    let honeyLeft = honey - (honeycombs * 100);

    console.log(`${honeycombs} honeycombs filled.`);
    console.log(`${honeyLeft.toFixed(2)} grams of honey left.`);
}

solve(11, 120]);