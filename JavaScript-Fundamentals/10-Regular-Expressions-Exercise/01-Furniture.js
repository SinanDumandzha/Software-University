function calculateFurnitureCost(input) {
    let data = input.slice(0, input.length - 1);

    let furnitureList = [];
    let spendMoney = 0;

    for (let info of data) {
        let regex = />>(?<furniture>[A-Za-z]+)<<(?<price>[\d]+\.?[\d]*)!(?<quantity>[\d]+)/g;

        let match = regex.exec(info);

        if (match) {
            furnitureList.push(match.groups.furniture);
            spendMoney += Number(match.groups.price) * Number(match.groups.quantity);
        }
    }
    console.log('Bought furniture:');

    if (furnitureList.length > 0) {
        console.log(furnitureList.join('\n'));
    }

    console.log(`Total money spend: ${spendMoney.toFixed(2)}`);
}

calculateFurnitureCost([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>>Invalid<<!5',
    'Purchase',
]);