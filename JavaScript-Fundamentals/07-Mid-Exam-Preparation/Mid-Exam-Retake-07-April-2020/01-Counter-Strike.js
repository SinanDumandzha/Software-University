function gameResult(input) {
    let energy = input.shift();
    let battleWons = 0;

    for (distance of input) {

        if (distance !== 'End of battle') {
            distance = Number(distance);

            if (energy - distance < 0) {
                console.log(`Not enough energy! Game ends with ${battleWons} won battles and ${energy} energy`);
                break;
            }

            energy -= distance;
            battleWons++;

        } else {
            console.log(`Won battles: ${battleWons}. Energy left: ${energy}`);
        }

        if (battleWons % 3 == 0) {
            energy += battleWons;
        }
    }
}

// gameResult([100, 10, 10, 10, 1, 2, 3, 73, 10]);

gameResult([200, 54, 14, 28, 13, 'End of battle']);