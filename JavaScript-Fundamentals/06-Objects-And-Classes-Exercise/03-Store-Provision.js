function updateProducts(currentProducts, orderedProducts) {
    const updateResult = {};

    for (let i = 0; i < currentProducts.length; i += 2) {
        const product = currentProducts[i];
        const quantity = Number(currentProducts[i + 1]);

        updateResult[product] = quantity;
    }

    for (let i = 0; i < orderedProducts.length; i += 2) {
        const product = orderedProducts[i];
        const quantity = Number(orderedProducts[i + 1]);

        if (updateResult[product] === undefined) {
            updateResult[product] = 0;
        }

        updateResult[product] += quantity;
    }

    for (let [product, quantity] of Object.entries(updateResult)) {
        console.log(`${product} -> ${quantity}`);
    }
}

updateProducts([
        'Chips', '5', 'CocaCola', '9', 'Bananas',
        '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ]);