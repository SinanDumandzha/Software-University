function solve(input) {
    let username = input.shift();

    let totalTrys = 0;

    for (let pass of input) {
        let reverse = pass.split('').reverse().join('');
        totalTrys += 1;
        if (reverse == username) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            if (totalTrys == 4) {
                console.log(`User ${username} blocked!`);
                break;
            } else {
                console.log(`Incorrect password. Try again.`);
            }
        }
    }
}

solve(['Acer', 'login', 'go', 'let me in', 'recA']);