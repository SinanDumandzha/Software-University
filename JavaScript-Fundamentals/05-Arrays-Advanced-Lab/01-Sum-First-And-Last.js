function sumFirstAndLastNumbers(array) {
    
    let firstNumber = Number(array.shift());
    let lastNumber = Number(array.pop());

    let sum = firstNumber + lastNumber;

    console.log(sum);
}

sumFirstAndLastNumbers(['20', '30', '40']);