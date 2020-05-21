function solve(intellegenceInput, powerInput, genderInput) {
    let intellegence = Number(intellegenceInput);
    let power = Number(powerInput);
    let gender = genderInput;

    if (intellegence >= 80) {
        if (power >= 80 && gender == 'female') {
            console.log(`Queen Bee`);
        } else {
            console.log(`Repairing Bee`);
        }
    } else if (intellegence >= 60) {
        console.log(`Cleaning Bee`);
    } else if (power >= 80 && gender == 'male') {
        console.log(`Drone Bee`);
    } else if (power >= 60) {
        console.log(`Guard Bee`);
    } else {
        console.log(`Worker Bee`);
    }
}

solve('82', '81', 'female');