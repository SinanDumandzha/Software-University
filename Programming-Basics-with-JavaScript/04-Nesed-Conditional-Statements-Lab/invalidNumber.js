function invalidNumber(input) {

    input = Number(input);

    let range = input >= 100 && input <= 200;
    let isZero = input === 0;

    if (range || isZero) {

    } else {
        console.log('invalid');
    }
}

invalidNumber('100');