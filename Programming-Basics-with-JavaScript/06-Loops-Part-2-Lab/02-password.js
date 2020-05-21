function solve(input) {
    let username = input.shift();
    let password = input.shift();

    let succesLogin = input.shift();

    while(password !== succesLogin) {
        succesLogin = input.shift();
    }
    console.log(`Welcome ${username}!`);
}

solve (['Gosho', '123456', '123', '1234', '12345', '123456']);