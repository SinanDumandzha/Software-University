function sumFirstAndLastNumber(numbers) {
    let firstNumber = Number(numbers[0]);
    let lastNumber = Number(numbers[numbers.length - 1]);
    let sum = firstNumber + lastNumber;

    console.log(sum);
}

sumFirstAndLastNumber(['20', '30', '40']);