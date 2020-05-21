function solve(input) {
    let destination = input.shift();
    let tripPrice = Number(input.shift());

    while (destination != 'End') {
        if (destination == 'End') {
            break;
        }
        let sum = 0;
        while (tripPrice > sum) {
            let saving = Number(input.shift());
            sum += saving;
        }
        console.log(`Going to ${destination}!`)
        destination = input.shift();
        tripPrice = Number(input.shift());
    }
}

solve(['Greece', 1000, 200, 200, 300, 100, 150, 240, 'Spain', 1200, 300, 500, 193, 423, 'End']);