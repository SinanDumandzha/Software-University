function solve(input) {
    let sumOfSteps = 0;

    while (sumOfSteps < 10000) {
        let walkedSteps = (input.shift());

        if (sumOfSteps >= 10000) {
            console.log(`Goal reached! Good job!`);
            break;

        } else if (walkedSteps == 'Going home') {
            walkedSteps = (input.shift());
            sumOfSteps += Number(walkedSteps);
            if (sumOfSteps < 10000) {
                console.log(`${10000 - sumOfSteps} more steps to reach goal.`);
            }
        }
        sumOfSteps += Number(walkedSteps);
    }
    if (sumOfSteps >= 10000) {
        console.log(`Goal reached! Good job!`);
    }
}

solve([1500, 300, 2500, 3000, 'Going home', 200]);