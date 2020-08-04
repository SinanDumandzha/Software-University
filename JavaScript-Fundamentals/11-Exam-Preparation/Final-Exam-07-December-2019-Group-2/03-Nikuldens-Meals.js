function mealsResult(input) {
    let feedbacksResult = {};
    let unlikedMealsCount = 0;
    let feedbacks = input.slice();
    let currentFeedback = feedbacks.shift();

    while (currentFeedback !== 'Stop') {
        let [feedback, guest, meal] = currentFeedback.split('-');

        switch (feedback) {
            case 'Like':
                if (!feedbacksResult[guest]) {
                    feedbacksResult[guest] = [meal];
                }
                if (!feedbacksResult[guest].includes(meal)) {
                    feedbacksResult[guest].push(meal);
                }
                break;

            case 'Unlike':
                if (feedbacksResult[guest]) {
                    if (feedbacksResult[guest].includes(meal)) {
                        let indexOfUnlikedMeal = Number(feedbacksResult[guest].indexOf(meal));
                        feedbacksResult[guest].splice(indexOfUnlikedMeal, 1);
                        unlikedMealsCount++;
                        console.log(`${guest} doesn't like the ${meal}.`);
                    } else {
                        console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
                    }
                } else {
                    console.log(`${guest} is not at the party.`);
                }
                break;
        }
        currentFeedback = feedbacks.shift();
    }

    let sortedResults = Object.entries(feedbacksResult).sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));

    for (let kvp of sortedResults) {
        console.log(`${kvp[0]}: ${kvp[1].join(', ')}`);
    }
    console.log(`Unliked meals: ${unlikedMealsCount}`);
}

mealsResult(['Like-Krisi-shrimps',
    'Like-Krisi-soup',
    'Like-Misho-salad',
    'Like-Pena-dessert',
    'Stop'
]);