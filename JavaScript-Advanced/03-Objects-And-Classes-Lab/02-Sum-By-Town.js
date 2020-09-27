function calculateTownsTotalIncome(input) {
    let townsIncomeInfo = {};

    for (let i = 0; i < input.length; i += 2) {
        if ((i % 2 == 0) && (!townsIncomeInfo.hasOwnProperty(input[i]))) {
            townsIncomeInfo[input[i]] = Number(input[i + 1]);
        } else if ((i % 2 == 0) && (townsIncomeInfo.hasOwnProperty(input[i]))) {
            townsIncomeInfo[input[i]] += Number(input[i + 1]);
        }
    }

    console.log(JSON.stringify(townsIncomeInfo));
}

calculateTownsTotalIncome(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);