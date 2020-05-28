function solve(numberOne, numberTwo, numberThree) {
    let result = numberOne + numberTwo + numberThree;
    let message = '';
    if (result % 1 != 0) {
        message = 'Float';
    } else {
        message = 'Integer';
    }
    console.log(`${result} - ${message}`);
}

solve(9, 100, 10.1);