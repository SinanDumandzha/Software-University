function solve(input) {
    let numberOfNumber = Number(input.shift());
    let number = Number(input.shift());

    let numberCount = 1;
    let littleNumber = 0;

    while (numberCount <= numberOfNumber) {
        numberCount += 1;
        
        if (number < littleNumber) {
            littleNumber = number;
        } 
        number = Number(input.shift());
    }console.log(`${littleNumber}`);
}

solve(['5', '-8', '15', '-3', '17', '1']);