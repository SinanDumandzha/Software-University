function findLowestPriceWithLocation(input) {
    let products = new Map();

    for (let list of input) {
        let [town, product, price] = list.split(/\s+\|\s+/g);

        if (!products.has(product)) {
            products.set(product, new Map());
        }

        products.get(product).set(town, Number(price));
    }

    for (let [product, towns] of products) {
        let lowestPrice = Number.MAX_VALUE;
        let lowestPricedInTown = '';

        for (let [town, price] of towns) {
            if (price < lowestPrice) {
                lowestPrice = price;
                lowestPricedInTown = town;
            }
        }

        console.log(`${product} -> ${lowestPrice} (${lowestPricedInTown})`);
    }
}

findLowestPriceWithLocation([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'
]);