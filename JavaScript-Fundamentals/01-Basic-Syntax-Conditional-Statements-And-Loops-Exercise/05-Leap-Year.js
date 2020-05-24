function solve(year) {
    let check1 = year % 4 == 0 && year % 100 != 0;
    let check2 = year % 400 == 0;

    if (check1 || check2) {
        console.log('yes');
    } else {
        console.log('no');
    }
}

solve(2003);