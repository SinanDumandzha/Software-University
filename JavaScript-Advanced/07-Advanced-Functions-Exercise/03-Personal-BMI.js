function personalBMI(name, age, weight, height) {
    let bmi = (weight / (height ** 2)) * 10000;
    let state;

    if (bmi < 18.5) {
        state = 'underweight';
    } else if (bmi < 25) {
        state = 'normal';
    } else if (bmi < 30) {
        state = 'overweight';
    } else {
        state = 'obese';
    }

    let person = {
        name: name,
        personalInfo: {
            age: age,
            weight: Math.round(weight),
            height: Math.round(height)
        },
        BMI: Math.round(bmi),
        status: state
    };

    if (state === 'obese') {
        person.recommendation = 'admission required';
    }

    return person;
}

personalBMI('Peter', 29, 75, 182);