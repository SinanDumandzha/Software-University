function solve(input) {
    let size1 = Number(input.shift());
    let size2 = Number(input.shift());

    let cakeSize = size1 * size2;
    let sumOfPieces = 0;

    while (sumOfPieces <= cakeSize) {
        let pieces = input.shift();

        if (pieces === 'STOP') {
            break;
        }
        sumOfPieces += Number(pieces);
        if (cakeSize < sumOfPieces) {
            break;
        }
    }
    if (cakeSize < sumOfPieces) {
        console.log(`No more cake left! You need ${sumOfPieces - cakeSize} pieces more.`);
    } else {
        console.log(`${cakeSize - sumOfPieces} pieces are left.`);
    }
}

solve([10, 2, 2, 4, 6, 'STOP']);