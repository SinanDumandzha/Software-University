function solve(input) {
    let numberOfPayment = Number(input.shift());
    let payment = Number(input.shift());
    let paymentCount = 1;

    let totalMoney = 0;

    while (numberOfPayment >= paymentCount) {
        if (payment < 0) {
            console.log(`Invalid operation!`);
            break;
        } else {
            console.log(`Increase: ${payment}`)
            totalMoney += payment;
            paymentCount += 1; 
            payment = Number(input.shift());
        }
    }
    console.log(`Total: ${totalMoney.toFixed(2)}`);
}

solve(['3', '5.51', '69.42', '100']);