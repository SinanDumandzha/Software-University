function personalTitle(age, gender) {
    age = parseFloat(age);

    if (gender === 'm' && age >= 16) {
        console.log('Mr.');

    } else if (gender === 'm' && age < 16) {
        console.log('Master');
    }

    if (gender === 'f' && age >= 16) {
        console.log('Ms.');

    } else if (gender === 'f' && age < 16) {
        console.log('Miss');
    }
}

personalTitle('18', 'm');

