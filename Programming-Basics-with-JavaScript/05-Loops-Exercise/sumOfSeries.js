function solve (n) {
    let number = Number (n);

    let sum = 0;

    for (let i = 1; i <= number; i++) {
        sum += i * i;
    }
    console.log (sum);
}

solve ('7');