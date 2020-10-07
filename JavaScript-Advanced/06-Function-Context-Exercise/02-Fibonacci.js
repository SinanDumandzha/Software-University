function getFibonator() {
    let currNum = 0;
    let nextNum = 1;

    function fibonator() {
        let newNumber = nextNum + currNum;
        currNum = nextNum;
        nextNum = newNumber;

        return currNum;
    }
    return fibonator;
}

let fib = getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());