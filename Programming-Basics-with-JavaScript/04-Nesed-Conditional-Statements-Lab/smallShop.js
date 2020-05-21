function shop(product, city, count) {

    count = Number(count);
    totalPrice = 0;

    switch (city) {

        case 'Sofia':
            if (product === 'coffee') {
                totalPrice = count * 0.50;
                console.log(totalPrice);
                break;

            } else if (product === 'water') {
                totalPrice = count * 0.80;
                console.log(totalPrice);
                break;

            } else if (product === 'beer') {
                totalPrice = count * 1.20;
                console.log(totalPrice);
                break;

            } else if (product === 'sweets') {
                totalPrice = count * 1.45;
                console.log(totalPrice);
                break;

            } else if (product === 'peanuts') {
                totalPrice = count * 1.60;
                console.log(totalPrice);
                break;
            }

        case 'Plovdiv':
            if (product === 'coffee') {
                totalPrice = count * 0.40;
                console.log(totalPrice);
                break;

            } else if (product === 'water') {
                totalPrice = count * 0.70;
                console.log(totalPrice);
                break;

            } else if (product === 'beer') {
                totalPrice = count * 1.15;
                console.log(totalPrice);
                break;

            } else if (product === 'sweets') {
                totalPrice = count * 1.30;
                console.log(totalPrice);
                break;

            } else if (product === 'peanuts') {
                totalPrice = count * 1.50;
                console.log(totalPrice);
                break;
            }

        case 'Varna':
            if (product === 'coffee') {
                totalPrice = count * 0.45;
                console.log(totalPrice);
                break;

            } else if (product === 'water') {
                totalPrice = count * 0.70;
                console.log(totalPrice);
                break;

            } else if (product === 'beer') {
                totalPrice = count * 1.10;
                console.log(totalPrice);
                break;

            } else if (product === 'sweets') {
                totalPrice = count * 1.35;
                console.log(totalPrice);
                break;

            } else if (product === 'peanuts') {
                totalPrice = count * 1.55;
                console.log(totalPrice);
                break;
            }
    }
}

shop ('beer', 'Sofia', '6');
