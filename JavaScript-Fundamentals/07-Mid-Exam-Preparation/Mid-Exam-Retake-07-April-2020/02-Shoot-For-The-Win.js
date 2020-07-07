function shotsResult(input) {
    let targets = input.shift().split(' ').map(Number);
    let shotsInTarget = 0;

    let index = 0;

    while (input[index] !== 'End') {
        let indexOfTarget = Number(input[index]);
        let shottedTarget = Number(targets[indexOfTarget]);

        if (indexOfTarget < targets.length && shottedTarget !== -1) {
            targets.splice(indexOfTarget, 1, -1);
            shotsInTarget++;

            let targetValue = shottedTarget;
            shottedTarget = -1;
 
            targets = targets.map(e => {
                if(e === -1) return e;
 
                if (e > targetValue) {
                    return e - targetValue;
                }
                return  e + targetValue;
            });

            }
        index++;
    }
    console.log(`Shot targets: ${shotsInTarget} -> ${targets.join(' ')}`);
}

shotsResult(['24 50 36 70', 0, 4, 3, 1, 'End']);

shotsResult(['30 30 12 60 54 66', 5, 2, 4, 0, 'End']);