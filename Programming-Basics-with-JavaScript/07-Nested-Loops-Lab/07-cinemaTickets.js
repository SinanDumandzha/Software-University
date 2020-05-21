function solve(input) {
    let movie = input.shift();

    let hallPercentage = 0;
    let totalTicketsSold = 0;
    let studentCount = 0;
    let standardCount = 0;
    let kidsCount = 0;

    while (movie != 'Finish') {
        let freePlaces = Number(input.shift());
        let soldTickets = 0;

        let ticketType = input.shift();

        while (ticketType != 'End') {
            soldTickets++;

            if (ticketType == 'student') {
                studentCount++;
            } else if (ticketType == 'standard') {
                standardCount++;
            } else {
                kidsCount++;
            }
            
            if (soldTickets >= freePlaces) {
                break;
            }
            
            ticketType = input.shift();
        }
        totalTicketsSold += soldTickets;

        hallPercentage = (soldTickets / freePlaces * 100).toFixed(2);
        console.log(`${movie} - ${hallPercentage}% full.`);
        movie = input.shift();
       
    }
    console.log(`Total tickets: ${totalTicketsSold}`);
    console.log(`${(studentCount / totalTicketsSold * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardCount / totalTicketsSold * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidsCount / totalTicketsSold * 100).toFixed(2)}% kids tickets.`);
}

solve(['Taxi', 10, 'standard', 'kid', 'student', 'student', 'standard', 'standard', 'End', 'Scary Movie', 6, 'student', 'student', 'student', 'student', 'student', 'student', 'Finish']);