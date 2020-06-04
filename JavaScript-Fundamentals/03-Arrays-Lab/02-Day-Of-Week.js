function solve(numberOfDay) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let dayResult = '';

    if (numberOfDay < 1 || numberOfDay > 7) {
        dayResult = 'Invalid day!';
    } else {
        dayResult = days[numberOfDay - 1];
    }
    console.log(dayResult);
}

solve(3);