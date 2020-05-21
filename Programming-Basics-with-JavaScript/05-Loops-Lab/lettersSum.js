function solve(product, controlNumberInput, budgetInput) {
    let controlNumber = Number(controlNumberInput);
    let budget = Number(budgetInput);

    let letterValue = 0;
    let productPrice = 0;
    let moneyLeft = 0;

    for (let i = 0; i < product.length; i++) {
        switch (product[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'y':
                letterValue += 3;
                break;
            default:
                letterValue += 1;
                break;
        }
    }
    productPrice = letterValue * controlNumber;

    if (productPrice <= budget) {
        moneyLeft = budget - productPrice;
        console.log(`${product} bought. Money left: ${moneyLeft.toFixed(2)}`);
    } else {
        moneyLeft = productPrice - budget;
        console.log(`Cannot buy ${product}. Product value: ${productPrice.toFixed(2)}`);
    }
}

solve('apple', '2', '20');