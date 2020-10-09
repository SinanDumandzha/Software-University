function solution() {
    let input = '';

    return {
        append(string) {
            return input += string;
        },
        removeStart(n) {
            return input = input.slice(n);
        },
        removeEnd(n) {
            return input = input.slice(0, input.length - n);
        },
        print() {
            return console.log(input);
        }
    };
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();