function fruitShop(fruit, day, count) {

    count = Number(count);

    let weekDays = day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Friday';
    let weekend = day === 'Saturday' || day === 'Sunday';
    let price = 0;

    switch (fruit) {

        case 'banana':
            if (weekDays) {
                price = count * 2.50;
                console.log(price.toFixed(2));

            } else if (weekend) {
                price = count * 2.70;
                console.log(price.toFixed(2));

            } else {
                console.log('error');
            }
            break;

        case 'apple':
            if (weekDays) {
                price = count * 1.20;
                console.log(price.toFixed(2));

            } else if (weekend) {
                price = count * 1.25;
                console.log(price.toFixed(2));

            } else {
                console.log('error');
            }
            break;

        case 'orange':
            if (weekDays) {
                price = count * 0.85;
                console.log(price.toFixed(2));

            } else if (weekend) {
                price = count * 0.90;
                console.log(price.toFixed(2));
            
            } else {
                console.log ('error');
            }    
            break;

        case 'grapefruit':
            if (weekDays) {
                price = count * 1.45;
                console.log(price.toFixed(2));

            } else if (weekend) {
                price = count * 1.60;
                console.log(price.toFixed(2));

            } else {
                console.log ('error');
            } 
            break;

        case 'kiwi':
            if (weekDays) {
                price = count * 2.70;
                console.log(price.toFixed(2));

            } else if (weekend) {
                price = count * 3.00;
                console.log(price.toFixed(2));

            } else {
                console.log ('error');
            } 
            break;

        case 'pineapple':
            if (weekDays) {
                price = count * 5.50;
                console.log(price.toFixed(2));

            } else if (weekend) {
                price = count * 5.60;
                console.log(price.toFixed(2));

            } else {
                console.log ('error');
            } 
            break;

        case 'grapes':
            if (weekDays) {
                price = count * 3.85;
                console.log(price.toFixed(2));

            } else if (weekend) {
                price = count * 4.20;
                console.log(price.toFixed(2));

            } else {
                console.log ('error');
            } 
            break;

        default:
            console.log('error');
            break;
    }
}

fruitShop('kiwi', 'Sunday', '2');
