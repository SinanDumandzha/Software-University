function getLastKNumbersSequence(nInput, kInput) {
    let n = nInput;
    let k = kInput;

    let result = [1];

    for (let i = 1; i < n; i++) {

        let numbers = result.slice(Math.max(0, i - k), i);
        let sum = numbers.reduce((x, y) => x + y, 0); 
        result.push(sum);
    }

    console.log(result.join(' '));
}

getLastKNumbersSequence(6, 3);