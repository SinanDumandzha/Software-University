function createStoreCatalogue(input) {
    let catalogue = {};

    input.forEach(productInfo => {
        let [product, price] = productInfo.split(' : ');
        price = Number(price);
        let firstLetter = product[0];

        if (!catalogue.hasOwnProperty(firstLetter)) {
            catalogue[firstLetter] = [];
        }

        let productName = {
            product,
            price
        };
        catalogue[firstLetter].push(productName);
    });

    let sortAlphabetically = Object.entries(catalogue).sort((a, b) => a[0].localeCompare(b[0]));

    for (let i = 0; i < sortAlphabetically.length; i++) {
        console.log(`${sortAlphabetically[i][0]}`);

        let sortProductsAlphabetically = sortAlphabetically[i][1].sort((a, b) => a.product.localeCompare(b.product));

        sortProductsAlphabetically.forEach((product) => console.log(`  ${product.product}: ${product.price}`));
    }
}

createStoreCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);