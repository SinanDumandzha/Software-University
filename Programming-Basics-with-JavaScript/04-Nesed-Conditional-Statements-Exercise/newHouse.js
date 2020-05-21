function flowers(flowerType, flowerCount, budget) {

    flowerCount = Number(flowerCount);
    budget = Number(budget);

    let totalPrice = 0;
    let finalMoney = 0;

    if (flowerType === 'Roses') {
        totalPrice = flowerCount * 5.00;

        if (flowerCount > 80) {
            totalPrice = (flowerCount * 5.00) * 0.9;
        }
    }

    if (flowerType === 'Dahlias') {
        totalPrice = flowerCount * 3.80;

        if (flowerCount > 90) {
            totalPrice = (flowerCount * 3.80) * 0.85;
        }
    }

    if (flowerType === 'Tulips') {
        totalPrice = flowerCount * 2.80;

        if (flowerCount > 80) {
            totalPrice = (flowerCount * 2.80) * 0.85;
        }
    }

    if (flowerType === 'Narcissus') {
        totalPrice = flowerCount * 3.00;

        if (flowerCount < 120) {
            totalPrice = (flowerCount * 3.00) + ((flowerCount * 3.00) * 0.15);
        }
    }

    if (flowerType === 'Gladiolus') {
        totalPrice = flowerCount * 2.50;

        if (flowerCount < 80) {
            totalPrice = (flowerCount * 2.50) + ((flowerCount * 2.50) * 0.20);
        }
    }

    finalMoney = Math.abs(budget - totalPrice);

    if (budget >= totalPrice) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${finalMoney.toFixed(2)} leva left.`);

    } else {
        console.log(`Not enough money, you need ${finalMoney.toFixed(2)} leva more.`);
    }
}

flowers('Tulips', '88', '260');