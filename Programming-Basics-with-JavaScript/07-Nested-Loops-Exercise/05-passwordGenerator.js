function solve(input) {
    let n = Number(input.shift());
    let l = Number(input.shift());

    let output = '';

    for (let p1 = 1; p1 <= n; p1++) {
        for (let p2 = 1; p2 <= n; p2++) {
            for (let p3 = 97; p3 < 97 + l; p3++) {
                for (let p4 = 97; p4 < 97 + l; p4++) {
                    for (let p5 = 1; p5 <= n; p5++) {
                        if (p5 > p2 && p5 > p1) {
                            let thirdDigit = String.fromCharCode(p3);
                            let fourthDigit = String.fromCharCode(p4);

                            output += `${p1}${p2}${thirdDigit}${fourthDigit}${p5} `;
                        }
                    }
                }
            }
        }
    }
    console.log(output);
}

solve(['2', '4']);