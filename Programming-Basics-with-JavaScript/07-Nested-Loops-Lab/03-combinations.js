function solve(input) {
    let number = Number(input.shift());

    let count = 0;

    for (let i = 0; i <= number; i++) {
        for (let j = 0; j <= number; j++) {
            for (let k = 0; k <= number; k++) {
                let sum = i + j + k;

                if (sum === number) {
                    count++; 
                }
            }
        }
    }
    console.log(count);
}

solve(['20']);