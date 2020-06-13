function oddAndEvenSum(number) {

    let resultOddSum = oddSum(number);
    let resultEvenSum = evenSum(number);

    console.log(`Odd sum = ${resultOddSum}, Even sum = ${resultEvenSum}`);

    function oddSum(num) {

        let oddSumTotal = 0;

        while (num > 0) {

            let checkedNum = num % 10;

            if (checkedNum % 2 !== 0) {
                oddSumTotal += checkedNum;
            }
            num = Math.trunc(num / 10);
        }
        return oddSumTotal;
    }

    function evenSum(num) {

        let evenSumTotal = 0;

        while (num > 0) {

            let checkedNum = num % 10;

            if (checkedNum % 2 == 0) {
                evenSumTotal += checkedNum;
            }
            num = Math.trunc(num / 10);
        }
        return evenSumTotal;
    }
}

oddAndEvenSum(1000435);