function solve(number) {
    let output = '';

    for (let i = 1; i <= number; i++) {
        output = '';
        for (let j = 1; j <= i; j++) {
            output += i + ' ';
        }
        console.log(output);
    }
}

solve(6);