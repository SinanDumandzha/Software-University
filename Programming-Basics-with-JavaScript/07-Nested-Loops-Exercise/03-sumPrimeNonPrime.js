function solve(input) {
    let currentLine = input.shift();

    let primeSum = 0;
    let nonPrimeSum = 0;

    while (currentLine !== 'stop') {
        let number = Number(currentLine);

        if (number < 0) {
            console.log('Number is negative.');
           
        } else {
            isPrime = true;

            for (let i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                primeSum += number;
            } else {
                nonPrimeSum += number;
            }
        }
        currentLine = input.shift();
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

solve([3, 9, 0, 7, 19, 4, 'stop']);