function solve(input) {
    let n = Number(input.shift())

    let current = 1;
    let isBigger = false;
    let output = '';

    for (let row = 1; row <= n; row++) {
        for (let column = 1; column <= row; column++) {
            if (current > n) {
                isBigger = true;
                break;
            }
            output += current + ' ';
            current++;
        }
        console.log(`${output}`);
        output = '';
        if (isBigger) {
            break;
        }
    }
}

solve(['10']);