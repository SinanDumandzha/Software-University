function numberInRange(number) {

    number = Number(number);

    let isInRange = number >= -100 && number <= 100;
    let isZero = number != 0;

    if (isInRange && isZero) {
        console.log('Yes');

    } else {
        console.log('No');
    }
}

numberInRange ('88');