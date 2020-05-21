function solve(input) {
    let n = Number(input.shift());
    let output = '';

    for (let i = 1111; i <= 9999; i++) {
        let currentNum = i;

        let isMagicNum = true;

        while (currentNum > 0) {
            let lastDigit = currentNum % 10;

            if (n % lastDigit !== 0) {
                isMagicNum = false;
                break;
            }
            currentNum = Math.trunc(currentNum / 10);
        }
        if (isMagicNum) {
            output += i + ' ';
        }
    }
    console.log(output);
}

solve(['11']);