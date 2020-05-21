function solve(input) {
    let number = Number(input.shift());

    let calculation = 1;

    while (calculation <= number) {
        console.log(`${calculation}`);
        calculation = (calculation * 2) + 1;   
    }
}

solve([15]);