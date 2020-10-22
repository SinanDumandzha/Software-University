class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];
        this.totalSoldTickets = 0;
        this.totalProfit = 0;
    }

    newScreening(date, hall, description) {
        let screening = this.screenings.find(x => x.date === date && x.hall === hall);

        if (screening) {
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`)
        }

        screening = {
            date,
            hall,
            description,
            profit: 0
        }

        this.screenings.push(screening);

        return `New screening of ${this.movieName} is added.`;
    }

    endScreening(date, hall, soldTickets) {
        let screening = this.screenings.find(x => x.date === date && x.hall === hall);

        if (!screening) {
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`);
        }

        this.totalSoldTickets += Number(soldTickets);
        screening.profit = Number(soldTickets) * Number(this.ticketPrice);
        this.totalProfit += screening.profit;

        this.screenings = this.screenings.filter(s => s.date !== date || s.hall !== hall);

        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${screening.profit}`;
    }

    toString() {
        let result = [
            `${this.movieName} full information:`,
            `Total profit: ${this.totalProfit.toFixed(0)}$`,
            `Sold Tickets: ${this.totalSoldTickets.toFixed(0)}`
        ];

        if (this.screenings.length > 0) {
            result.push(`Remaining film screenings:`);

            let sortedScreenings = this.screenings.sort((a, b) => a.hall.localeCompare(b.hall));

            sortedScreenings.forEach(sc => {
                result.push(`${sc.hall} - ${sc.date} - ${sc.description}`);
            });
        } else {
            result.push("No more screenings!");
        }

        return result.join('\n');
    }
}