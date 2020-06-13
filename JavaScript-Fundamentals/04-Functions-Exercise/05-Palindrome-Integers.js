function checkPalindrome(array) {

    while (array.length > 0) {

        let currentNum = array.shift();
        currentNum = currentNum.toString()

        let isPalindrome = true;
        let j = 0;

        for (let i = currentNum.length - 1; i >= currentNum.length / 2; i--) {

            if (currentNum[i] !== currentNum[j]) {

                isPalindrome = false;
                break;
            }
            j++;
        }
        console.log(isPalindrome);
    }
}

checkPalindrome([123, 323, 421, 121]);