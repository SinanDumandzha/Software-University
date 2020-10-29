const assert = require('chai').assert;
const Warehouse = require('./Warehouse');

describe('Warehouse', () => {
    let warehouse;

    describe('constructor', () => {
        it('should throw an Error with a empty string as a capacity parameter', () => {
            assert.throw(() => {
                warehouse = new Warehouse('');
            }, 'Invalid given warehouse space');
        });

        it('should throw an Error with a 0 as a capacity parameter', () => {
            assert.throw(() => {
                warehouse = new Warehouse(0);
            }, 'Invalid given warehouse space');
        });

        it('should throw an Error with a negative number than 1 as a capacity parameter', () => {
            assert.throw(() => {
                warehouse = new Warehouse(-5);
            }, 'Invalid given warehouse space');
        });

        it('should throw an Error with a Array as a capacity parameter', () => {
            assert.throw(() => {
                warehouse = new Warehouse([]);
            }, 'Invalid given warehouse space');
        });

        it('should throw an Error with a Object as a capacity parameter', () => {
            assert.throw(() => {
                warehouse = new Warehouse({});
            }, 'Invalid given warehouse space');
        });

        it('should work with a positive number as a capacity parameter', () => {
            warehouse = new Warehouse(10);
            assert.equal(10, warehouse.capacity);
        });
    });

    describe('addProduct', () => {
        it('should add product and return it', () => {
            warehouse = new Warehouse(10);
            let current = warehouse.addProduct('Food', 'burger', 2);

            assert.equal(2, current.burger);
        });

        it('should have same value for occupied capacity and taken space by product', () => {
            warehouse = new Warehouse(10);
            let current = warehouse.addProduct('Food', 'burger', 2);

            assert.equal(warehouse.occupiedCapacity(), current.burger);
        });

        it('should add product and increase its quantity if exists', () => {
            warehouse = new Warehouse(10);
            let product = 'burger';
            let type = 'Food';
            let quantity = 2;

            warehouse.addProduct(type, product, quantity);
            warehouse.addProduct(type, product, quantity);

            let productQuantity = warehouse.availableProducts.Food[product];
            let expectedQuantity = quantity * 2;

            assert.equal(productQuantity, expectedQuantity);
        });

        it('should throw error with a higher quantity than capacity', () => {
            assert.throw(() => {
                warehouse = new Warehouse(5);
                warehouse.addProduct('Food', 'burger', 8);
            }, 'There is not enough space or the warehouse is already full');
        });
    });

    describe('orderProducts', () => {
        it('should sort products by type descending order', () => {
            warehouse = new Warehouse(10);
            let productType = 'Food';

            warehouse.addProduct('Food', 'burger', 4);
            warehouse.addProduct('Food', 'hotdog', 2);

            let result = warehouse.orderProducts(productType);
            let expected = {
                burger: 4,
                hotdog: 2,
            };

            assert.deepEqual(result, expected);
        });
    });

    describe('occupiedCapacity', () => {
        it('should return 0 with no products', () => {
            warehouse = new Warehouse(10);

            assert.equal(0, warehouse.occupiedCapacity());
        });

        it('should return products count', () => {
            warehouse = new Warehouse(10);
            let productOne = 'burger';
            let productOneType = 'Food';
            let productOneQuantity = 4;

            let productTwo = 'water';
            let productTwoType = 'Drink';
            let productTwoQuantity = 2;

            warehouse.addProduct(productOneType, productOne, productOneQuantity);
            warehouse.addProduct(productTwoType, productTwo, productTwoQuantity);

            assert.equal(6, warehouse.occupiedCapacity());
        });
    });

    describe('revision', () => {
        it('should return message with empty warehouse', () => {
            warehouse = new Warehouse(10);

            assert.equal('The warehouse is empty', warehouse.revision());
        });

        it('should return an ordered list of warehouse', () => {
            warehouse = new Warehouse(10);
            let productOne = 'burger';
            let productOneType = 'Food';
            let productOneQuantity = 4;

            let productTwo = 'water';
            let productTwoType = 'Drink';
            let productTwoQuantity = 2;

            warehouse.addProduct(productOneType, productOne, productOneQuantity);
            warehouse.addProduct(productTwoType, productTwo, productTwoQuantity);

            let expectedOutput = `Product type - [${productOneType}]\n` +
                `- ${productOne} ${productOneQuantity}\n` +
                `Product type - [${productTwoType}]\n` +
                `- ${productTwo} ${productTwoQuantity}\n`;
            let expected = expectedOutput.trim();

            assert.equal(expected, warehouse.revision());
        });
    });

    describe('scrapeAProduct', () => {
        it('should return nonexistent product', () => {
            let noneExistingProductType = 'Furniture';

            assert.throw(() => {
                warehouse = new Warehouse(10);
                let product = 'burger';
                let type = 'Food';
                let quantity = 5;

                warehouse.addProduct(type, product, quantity);
                warehouse.scrapeAProduct(noneExistingProductType, 3);

            }, `${noneExistingProductType} do not exists`);
        });

        it('should reset amount of the product with not enough quantity', () => {
            warehouse = new Warehouse(10);
            let product = 'burger';
            let type = 'Food';
            let quantity = 2;
            let wantedQuantity = 5;

            warehouse.addProduct(type, product, quantity);
            warehouse.scrapeAProduct(product, wantedQuantity);

            let currentCount = warehouse.availableProducts.Food[product];

            assert.equal(currentCount, 0);
        });

        it('should return correct quantity with a higher capacity than product quantity', () => {
            warehouse = new Warehouse(10);
            let product = 'burger';
            let type = 'Food';
            let quantity = 5;
            let wantedQuantity = 2;

            warehouse.addProduct(type, product, quantity);
            warehouse.scrapeAProduct(product, wantedQuantity);

            let currentCount = warehouse.availableProducts.Food[product];

            assert.equal(currentCount, 3);
        });
    });
});