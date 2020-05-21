function cinema (projectionType, row, column) {

    row = Number (row);
    column = Number (column);

    let capacity = row * column;
    let income = 0;

    if (projectionType === 'Premiere') {
        income = capacity * 12.00;
        console.log(`${income.toFixed(2)} leva`);
        
    } else if (projectionType === 'Normal') {
        income = capacity * 7.50;
        console.log(`${income.toFixed(2)} leva`);
        
    } else if (projectionType === 'Discount') {
        income = capacity * 5.00;
        console.log(`${income.toFixed(2)} leva`);  
    }
}

cinema ('Normal', '21', '13');