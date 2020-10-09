function solution(numberOne) {
    let result = 0;

    return function (numberTwo) {
        result = numberOne + numberTwo;
        return result;
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));