function manageDatabaseOfTickets(ticketDescriptions, sortingCriteria) {
    let ticketsDatabase = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    ticketDescriptions.forEach(description => {
        let [destination, price, status] = description.split('|');
        price = Number(price);
        ticketsDatabase.push(new Ticket(destination, price, status))
    });

    switch (sortingCriteria) {
        case 'destination':
            ticketsDatabase = ticketsDatabase.sort((a, b) => a.destination.localeCompare(b.destination));
            break;

        case 'price':
            ticketsDatabase = ticketsDatabase.sort((a, b) => a.price - b.price);
            break;

        case 'status':
            ticketsDatabase = ticketsDatabase.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }

    return ticketsDatabase;
}

console.log(manageDatabaseOfTickets([
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'));