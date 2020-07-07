function calculateBiscuits(input) {
    let dailyBiscuitsPerWorker = input[0];
    let workersCount = input[1];
    let biscuitsProducedComputingFactory = input[2];

    let month = 30;
    let producedBiscuits = 0;
    let totalBiscuits = 0;

    for (let day = 1; day <= month; day++) {

        producedBiscuits = Math.floor(dailyBiscuitsPerWorker * workersCount);

        if (day % 3 == 0) {
            producedBiscuits = Math.floor(producedBiscuits * 0.75);
        }

        totalBiscuits += producedBiscuits;
    }
    console.log(`You have produced ${totalBiscuits} biscuits for the past month.`);

    let difference = Math.abs(totalBiscuits - biscuitsProducedComputingFactory);
    let percentage = (difference / biscuitsProducedComputingFactory * 100).toFixed(2);

    if (totalBiscuits > biscuitsProducedComputingFactory) {
        console.log(`You produce ${percentage} percent more biscuits.`);
    } else {
        console.log(`You produce ${percentage} percent less biscuits.`);
    }
}

calculateBiscuits(['78', '8', '16000']);