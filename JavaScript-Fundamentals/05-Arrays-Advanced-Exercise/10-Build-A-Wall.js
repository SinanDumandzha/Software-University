function concreteAndPriceCalculatar(construction) {

    construction.map(Number);

    let concretePerDay = 195;
    let concreteSum = 0;
    let neededWorkToFinish = 30 * (construction.length);
    let dailyUsedConcrete = [];
    let totalConcrete = 0;
    let currentWork = 0;

    for (let wall of construction) {
        currentWork += wall;
    }

    while (currentWork < neededWorkToFinish) {

        let dailyTotalConcrete = 0;

        for (let wall of construction) {

            if (wall < 30) {
                concreteSum++;
                dailyTotalConcrete += concretePerDay;
                currentWork++;
                totalConcrete += concretePerDay;

                construction.splice(construction.indexOf(wall), 1, (wall + 1));
            }
        }

        dailyUsedConcrete.push(dailyTotalConcrete);
    }

    let totalPrice = totalConcrete * 1900;

    console.log(dailyUsedConcrete.join(', '));
    console.log(`${totalPrice} pesos`);
}

concreteAndPriceCalculatar([21, 25, 28]);