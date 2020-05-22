function solve(day, age) {
    let ticketPrice = 0;
    if (age < 0 || age > 122) {
        console.log('Error!');

    } else if (day == 'Weekday') {
        if (age >= 0 && age <= 18) {
            ticketPrice = 12;
        } else if (age > 18 && age <= 64) {
            ticketPrice = 18;
        } else if (age > 0 && age <= 122) {
            ticketPrice = 12;
        } else {

        }
        console.log(`${ticketPrice}$`);

    } else if (day == 'Weekend') {
        if (age >= 0 && age <= 18) {
            ticketPrice = 15;
        } else if (age > 18 && age <= 64) {
            ticketPrice = 20;
        } else {
            ticketPrice = 15;
        }
        console.log(`${ticketPrice}$`);

    } else if (day == 'Holiday') {
        if (age >= 0 && age <= 18) {
            ticketPrice = 5;
        } else if (age > 18 && age <= 64) {
            ticketPrice = 12;
        } else {
            ticketPrice = 10;
        }
        console.log(`${ticketPrice}$`);

    } else {
        console.log('Error!');
    }
}

solve('Holiday', -12);