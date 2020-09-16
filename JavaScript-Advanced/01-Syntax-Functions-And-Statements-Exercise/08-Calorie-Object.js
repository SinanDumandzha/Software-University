function composeFoodCalories(infoArray) {
    let foodCalories = {};

    for (let i = 0; i < infoArray.length; i += 2) {
        let foodName = infoArray[i];
        let calories = Number(infoArray[i + 1]);

        foodCalories[foodName] = calories;
    }
    console.log(foodCalories);
}

composeFoodCalories(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);