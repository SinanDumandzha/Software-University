function calculatecurrentMoneyForJourney (input) {
    let journeyPrice = Number(input[0]);
    let months = Number(input[1]);
    let currentMoney = 0;

    for (let month = 1; month <= months; month++) {

        if (month % 2 !== 0 && month !== 1) {
            currentMoney -= currentMoney * 0.16;
        }  

        if (month % 4 == 0) {
            currentMoney += currentMoney * 0.25;
        }
        currentMoney += journeyPrice * 0.25;
    }

    if (currentMoney >= journeyPrice) {
        let moneyLeft = (currentMoney - journeyPrice).toFixed(2);
        console.log(`Bravo! You can go to Disneyland and you will have ${moneyLeft}lv. for souvenirs.`);
    } else {
        let neededMoney = (journeyPrice - currentMoney).toFixed(2);
        console.log(`Sorry. You need ${neededMoney}lv. more.`);
    }
}

calculatecurrentMoneyForJourney(['1000', '4']);