function solve(arrayOfNumbers) {
    let evenSum = 0;
    let oddSum = 0;

    for (let element of arrayOfNumbers) {
        if (element % 2 === 0) {
            evenSum += element;
        } else {
            oddSum += element;
        }
    }
    let result = evenSum - oddSum;
    
    console.log(result);
}

solve([1, 2, 3, 4, 5, 6]);