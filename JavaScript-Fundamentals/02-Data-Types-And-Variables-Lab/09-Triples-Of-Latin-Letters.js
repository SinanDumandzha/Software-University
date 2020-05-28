function solve(numberN) {
    let firstNum = 'a'.charCodeAt(0);

    for (let i = 0; i < numberN; i += 1) {
        for (let j = 0; j  < numberN; j += 1) {
            for (let k = 0; k < numberN; k += 1) {
                console.log(String.fromCharCode(
                    firstNum + i,
                    firstNum + j,
                    firstNum + k));
            }
        }
    }
}

solve(3);