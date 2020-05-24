function solve(peopleCount, typeOfGroup, dayOfTheWeek) {
    let totalPrice = 0;

    if (typeOfGroup == 'Students') {
        if (dayOfTheWeek == 'Friday') {
            totalPrice = (peopleCount * 8.45);
        } else if (dayOfTheWeek == 'Saturday') {
            totalPrice = (peopleCount * 9.80);
        } else if (dayOfTheWeek == 'Sunday') {
            totalPrice = (peopleCount * 10.46);
        }
        if (peopleCount >= 30) {
            totalPrice *= 0.85;
        }
        console.log(`Total price: ${totalPrice.toFixed(2)}`);

    } else if (typeOfGroup == 'Business') {
        if (peopleCount >= 100) {
            peopleCount -= 10;
        }
        if (dayOfTheWeek == 'Friday') {
            totalPrice = (peopleCount * 10.90);
        } else if (dayOfTheWeek == 'Saturday') {
            totalPrice = (peopleCount * 15.60);
        } else if (dayOfTheWeek == 'Sunday') {
            totalPrice = (peopleCount * 16);
        }
        console.log(`Total price: ${totalPrice.toFixed(2)}`);

    } else if (typeOfGroup == 'Regular') {
        if (dayOfTheWeek == 'Friday') {
            totalPrice = (peopleCount * 15);
        } else if (dayOfTheWeek == 'Saturday') {
            totalPrice = (peopleCount * 20);
        } else if (dayOfTheWeek == 'Sunday') {
            totalPrice = (peopleCount * 22.50);
        }
        if (peopleCount >= 10 && peopleCount <= 20) {
            totalPrice *= 0.95;
        }
        console.log(`Total price: ${totalPrice.toFixed(2)}`);
    }
}

solve(30, 'Students', 'Friday');