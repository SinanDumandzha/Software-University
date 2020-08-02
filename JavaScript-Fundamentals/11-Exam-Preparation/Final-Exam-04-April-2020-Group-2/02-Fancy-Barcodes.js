function validateBarcode(input) {
    let barcodesCount = Number(input[0]);
    let barcodes = input.slice(1);

    for (let i = 0; i < barcodes.length; i++) {
        let pattern = /[@][#]+(?<barcode>[A-Z][A-Za-z|0-9]{4,}[A-Z])[@][#]+/g;
        let match = pattern.exec(barcodes[i]);

        let productGroup = '';

        if (match !== null) {
            let digitPattern = /[0-9]/g;
            let digitMatch = match[1].match(digitPattern);

            if (digitMatch !== null) {
                digitMatch.forEach(digit => {
                    productGroup += digit;
                });
            } else {
                productGroup = '00';
            }
            console.log(`Product group: ${productGroup}`);
        } else {
            console.log(`Invalid barcode`);
        }
    }
}

validateBarcode(['6',
    '@###Val1d1teM@###',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#',
]);