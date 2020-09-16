function findGreatestCommonDivisor(num1, num2) {
    if (!num2) {
        return num1;
    }
    let result = findGreatestCommonDivisor(num2, num1 % num2);

    if (result) {
        console.log(result);
    }
}

findGreatestCommonDivisor(15, 5);