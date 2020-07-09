function createStorageList(input) {
    let storageMap = new Map();

    for (let data of input) {
        let [product, quantity] = data.split(' ');
        quantity = Number(quantity);

        if (!storageMap.has(product)) {
            storageMap.set(product, quantity);
        } else {
            let previousQuantity = storageMap.get(product);
            let updatedQuantity = previousQuantity + quantity;
            storageMap.set(product, updatedQuantity);
        }
    }

    for (let info of storageMap) {
        console.log(`${info[0]} -> ${info[1]}`);
    }
}

createStorageList(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);