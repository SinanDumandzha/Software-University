function checkSameDigits(number) {
    let num = number.toString();
    let isSameDigits = true;
    let sumOfDigits = 0;

    for (let i = 0; i < num.length; i++) {
        if ((Number(num[i]) !== Number(num[i + 1])) && (i + 1 < num.length)) {
            isSameDigits = false;
        }
        sumOfDigits += Number(num[i]);
    }
    console.log(isSameDigits);
    console.log(sumOfDigits);
}

checkSameDigits(1234);