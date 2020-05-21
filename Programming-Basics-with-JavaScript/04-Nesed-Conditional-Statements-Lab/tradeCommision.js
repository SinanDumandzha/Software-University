function tradeCommision(city, tradeCount) {

    tradeCount = Number(tradeCount);

    let commision = 0;

    if (tradeCount < 0) {
        console.log('error');
        return;
    }

    if (city === 'Sofia') {

        if (tradeCount >= 0 && tradeCount <= 500) {
            commision = tradeCount * 0.05;

        } else if (tradeCount > 500 && tradeCount <= 1000) {
            commision = tradeCount * 0.07;

        } else if (tradeCount > 1000 && tradeCount <= 10000) {
            commision = tradeCount * 0.08;

        } else if (tradeCount > 10000) {
            commision = tradeCount * 0.12;
        }


    } else if (city === 'Varna') {

        if (tradeCount >= 0 && tradeCount <= 500) {
            commision = tradeCount * 0.045;

        } else if (tradeCount > 500 && tradeCount <= 1000) {
            commision = tradeCount * 0.075;

        } else if (tradeCount > 1000 && tradeCount <= 10000) {
            commision = tradeCount * 0.10;

        } else if (tradeCount > 10000) {
            commision = tradeCount * 0.13;

        }

    } else if (city === 'Plovdiv') {

        if (tradeCount >= 0 && tradeCount <= 500) {
            commision = tradeCount * 0.055;

        } else if (tradeCount > 500 && tradeCount <= 1000) {
            commision = tradeCount * 0.08;

        } else if (tradeCount > 1000 && tradeCount <= 10000) {
            commision = tradeCount * 0.12;

        } else if (tradeCount > 10000) {
            commision = tradeCount * 0.145;
        } 

    } else {
        console.log('error');
        return;
    }
    console.log(commision.toFixed(2));
}

tradeCommision('Varna', '50');