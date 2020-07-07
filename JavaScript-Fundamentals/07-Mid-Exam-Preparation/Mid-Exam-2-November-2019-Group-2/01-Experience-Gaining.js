function calculateExperience(input) {
    let neededExperience = Number(input.shift());
    let battlesCount = Number(input.shift());
    let totalExperience = 0;
    let counter = 0;
    let battles = 0;

    for (experience of input) {
        totalExperience += Number(experience);
        counter++;

        if (counter % 3 == 0) {
            totalExperience += experience * 0.15;
        }

        if (counter % 5 == 0) {
            totalExperience -= experience * 0.10;
        }

        if (totalExperience >= neededExperience) {
            battles = counter;
            console.log(`Player successfully collected his needed experience for ${battles} battles.`);
        }
    }

    if (totalExperience < neededExperience) {
        let experienceLeft = (neededExperience - totalExperience).toFixed(2);
        console.log(`Player was not able to collect the needed experience, ${experienceLeft} more needed.`);
    }
}

calculateExperience(['500',
    '5',
    '50',
    '100',
    '200',
    '100',
    '30'
]);