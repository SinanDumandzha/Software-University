function toyShop (tripPrice, puzzles, dolls, bears, minions, trucks) {

    tripPrice = Number(tripPrice);
    puzzles = Number(puzzles);
    dolls = Number(dolls);
    bears = Number(bears);
    minions = Number(minions);
    trucks = Number(trucks);

    let puzzlePrice = 2.60;
    let dollPrice = 3.00;
    let bearPrice = 4.10;
    let minionPrice = 8.20;
    let truckPrice = 2.00;

    let toysCount = puzzles + dolls + bears + minions + trucks; 

    let totalPuzzlesPrice = puzzles * puzzlePrice;
    let totalDollsPrice = dolls * dollPrice;
    let totalBearsPrice = bears * bearPrice;
    let totalMinionsPrice = minions * minionPrice;
    let totalTrucksPrice = trucks * truckPrice;

    let totalPrice = totalPuzzlesPrice + totalDollsPrice + totalBearsPrice + totalMinionsPrice + totalTrucksPrice;

    if (toysCount > 50) {
        totalPrice = totalPrice * 0.75;
    }    
    
    totalPrice = totalPrice * 0.90;

    if (totalPrice >= tripPrice) {
        let finalMoney = totalPrice - tripPrice;
        console.log(`Yes! ${finalMoney.toFixed(2)} lv left.`);
        
    } else {
        let moneyLeft = tripPrice - totalPrice;
        console.log(`Not enough money! ${moneyLeft.toFixed(2)} lv needed.`);
    }
}

toyShop ("320", "8", "2", "5", "5", "1");