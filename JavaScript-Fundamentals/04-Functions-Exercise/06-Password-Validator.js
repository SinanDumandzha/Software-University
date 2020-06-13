function passwordValidator(password) {

    let checkOne = checkLength(password);
    let checkTwo = checkCharacters(password);
    let checkThree = checkDigitCount(password);

    if (checkOne && checkTwo && checkThree) {
        console.log('Password is valid');
    }

    function checkLength(pass) {

        if (pass.length < 6 || pass.length > 10) {
            return console.log('Password must be between 6 and 10 characters');
        } else {
            return true;
        }
    }

    function checkCharacters(pass) {

        let checkResult = true;

        for (let i = 0; i < pass.length; i++) {

            let currentChar = pass.charCodeAt(i);
            let checkIsLetter = (currentChar >= 65 && currentChar <= 90) || (currentChar >= 97 && currentChar <= 122);
            let checkIsDigit = (currentChar >= 48 && currentChar <= 57);

            if (!checkIsLetter && !checkIsDigit) {
                console.log('Password must consist only of letters and digits');
                checkResult = false;
                break;
            }
        }
        return checkResult;
    }

    function checkDigitCount(pass) {

        let digitCount = 0;

        for (let i = 0; i < pass.length; i++) {

            let currentChar = pass.charCodeAt(i);
            let checkIsDigit = (currentChar >= 48 && currentChar <= 57);

            if (checkIsDigit) {
                digitCount++;
            }
        }

        if (digitCount < 2) {
            console.log('Password must have at least 2 digits');
        } else {
            return true;
        }
    }
}

passwordValidator('MyPass123');