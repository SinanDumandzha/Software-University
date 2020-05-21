function solve(input) {
    let days = Number(input.shift());
    let food = Number(input.shift());

    let foodEatenByDog = 0;
    let foodEatenByCat = 0;
    let biscuits = 0;

    for (let i = 1; i <= days; i++) {

        let currentEatenFoodByDog = Number(input.shift());
        let currentEatenFoodByCat = Number(input.shift());

        foodEatenByDog += currentEatenFoodByDog;
        foodEatenByCat += currentEatenFoodByCat;

        if (i % 3 == 0) {
            let currentBiscuits = (currentEatenFoodByDog + currentEatenFoodByCat) * 0.1;
            biscuits += currentBiscuits;
        }
    }
    let totalEatenFood = foodEatenByDog + foodEatenByCat;
    let totalEatenFoodPercent = (totalEatenFood / food) * 100;
    let eatenFoodByDogPercent = (foodEatenByDog / totalEatenFood) * 100;
    let eatenFoodByCatPercent = (foodEatenByCat / totalEatenFood) * 100;

    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    console.log(`${totalEatenFoodPercent.toFixed(2)}% of the food has been eaten.`);
    console.log(`${eatenFoodByDogPercent.toFixed(2)}% eaten from the dog.`);
    console.log(`${eatenFoodByCatPercent.toFixed(2)}% eaten from the cat.`);
}

solve(['3', '1000', '300', '20', '100', '30', '110', '40']);