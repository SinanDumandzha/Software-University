function printSquare(size = 5) {
    let squareSize = Number(size);

    for (let i = 1; i <= squareSize; i++) {
        console.log('* '.repeat(squareSize));
    }
}

printSquare(2);