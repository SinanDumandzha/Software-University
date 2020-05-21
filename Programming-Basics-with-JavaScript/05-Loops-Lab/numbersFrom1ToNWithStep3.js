function solve (n) {
    let number = Number (n);

    for (let i = 1; i <= number; i += 3) {
        console.log (i);
    }
}

solve ('10');