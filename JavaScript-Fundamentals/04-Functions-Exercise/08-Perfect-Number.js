function checkIsPerfectNumber(number) {

    let positiveDividers = getPositiveDividers(number);
    let dividerSum = getDividerSum(positiveDividers);

    if (number == dividerSum) {
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
    }

    function getPositiveDividers(num) {

        let dividersArray = [];

        for (let i = 0; i < num; i++) {

            if (num % i == 0) {
                dividersArray.push(i);
            }
        }
        return dividersArray;
    }

    function getDividerSum(dividers) {

        let sum = 0;

        for (let num of dividers) {
            sum += num;
        }
        return sum;
    }
}

checkIsPerfectNumber(1236498);