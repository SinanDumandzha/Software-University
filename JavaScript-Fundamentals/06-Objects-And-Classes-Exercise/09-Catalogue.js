function createCatalogue(input) {
    let letters = [];

    class Letter {
        constructor(letter) {
            this.name = letter;
            this.products = [];
        }
    }

    class Product{
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
    }

    for (let line of input) {
        let name = line.split(' : ')[0];
        let price = Number(line.split(' : ')[1]);
        let product = new Product(name, price);
        let checkLetter = name[0];

        let present = false;

        for (let currentLetter of letters) {
            if (currentLetter.name === checkLetter) {
                present = true;
                currentLetter.products.push(product);
                break;
            }
        }

        if (!present) {
            let newLetter = new Letter(checkLetter);
            newLetter.products.push(product);
            letters.push(newLetter);
        }
    }

    letters.sort((letterA, letterB) => letterA.name.localeCompare(letterB.name));

    for (let letter of letters) {
        console.log(letter.name);

        letter.products.sort((productA, productB) => productA.name.localeCompare(productB.name));

        for (let product of letter.products) {
            console.log(`  ${product.name}: ${product.price}`);
        }
    }
}

createCatalogue([
    'Appricot : 20.4', 
    'Fridge : 1500', 
    'TV : 1499', 
    'Deodorant : 10', 
    'Boiler : 300', 
    'Apple : 1.25', 
    'Anti-Bug Spray : 15', 
    'T-Shirt : 10'
]);  