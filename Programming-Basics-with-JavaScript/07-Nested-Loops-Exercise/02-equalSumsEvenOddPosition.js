function solve(input) {
    let firstNum = Number(input.shift());
    let secondNum = Number(input.shift());

    let output = '';

    for (let i = firstNum; i <= secondNum; i++) {
        let oddSum = 0;
        let evenSum = 0;
        let currentNum = i.toString();

        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum[j]);

            if (j % 2 !== 0) {
                oddSum += currentDigit;
            } else {
                evenSum += currentDigit;
            }
        }
        if (oddSum === evenSum) {
            output += currentNum + ' ';
        }
    }
    console.log(output);
}

solve(['100000', '100050']);