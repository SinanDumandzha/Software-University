function solve(n) {
    let number = Number(n);

    if (number % 2 === 0) {
        for (let i = 2; i <= number; i += 2) {
            console.log(`Current number: ${i}. Cube: ${Math.pow(i, 3)}`);
        }

    } else {
        for (let i = 1; i <= number; i += 2) {
            console.log(`Current number: ${i}. Cube: ${Math.pow(i, 3)}`);
        }
    }
}

solve('6');