function calculateBarIncome(input) {
    let data = input.slice(0, -1);
    let totalIncome = 0;

    for (let info of data) {
        let pattern = /%(?<customerName>[A-Z][a-z]+)%[^|$%.]*<(?<product>[\w]+)>[^|$%.]*.*\|(?<quantity>[\d]+)\|[^|$%.\d]*[^\d]*(?<price>[\d]+\.?[\d]*)\$/g;

        let match = pattern.exec(info);

        if (match) {
            let totalPrice = Number(match.groups.quantity) * Number(match.groups.price);

            console.log(`${match.groups.customerName}: ${match.groups.product} - ${totalPrice.toFixed(2)}`);

            totalIncome += totalPrice;
        }
    }

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

calculateBarIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
]);