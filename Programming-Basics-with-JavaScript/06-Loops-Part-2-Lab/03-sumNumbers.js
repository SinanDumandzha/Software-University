function solve(input) {
    let number = input.shift();

    let sumOfNumbers = 0;

    while (number != 'Stop') {
        
        sumOfNumbers += Number(number);
        number = input.shift();
    }
    
    console.log(`${sumOfNumbers}`);
}

solve(['1', '2', '3', '4', '5', '6', 'Stop']);