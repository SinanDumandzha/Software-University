function solveClasses() {
    class Hall {
        constructor(capacity, name) {
            this.capacity = capacity;
            this.name = name;
            this.events = [];
        }

        hallEvent(title) {
            if (this.events.includes(title)) {
                throw new Error('This event is already added!');
            }

            this.events.push(title);

            return 'Event is added.';
        }

        close() {
            this.events = [];

            return `${this.name} hall is closed.`
        }

        toString() {
            let result = `${this.name} hall - ${this.capacity}`;

            if (this.events.length > 0) {
                result += `\nEvents: ${this.events.join(', ')}`;
            }

            return result;
        }
    }

    class MovieTheater extends Hall {
        constructor(capacity, name, screenSize) {
            super(capacity, name);
            this.screenSize = screenSize;
            this.events = [];
        }

        close() {
            return super.close() + 'Аll screenings are over.';
        }

        toString() {
            let result = super.toString();

            result += `\n${this.name} is a movie theater with ${this.screenSize} screensize and ${this.capacity} seats capacity.`;

            return result;
        }
    }

    class ConcertHall extends Hall {
        constructor(capacity, name) {
            super(capacity, name);
            this.events = [];
            this.performers = []
        }

        hallEvent(title, performers) {
            if (this.events.includes(title)) {
                throw new Error('This event is already added!');
            }

            this.events.push(title);
            this.performers.push(...performers);

            return 'Event is added.';
        }

        close() {
            this.performers = [];

            return super.close() + 'Аll performances are over.';
        }

        toString() {
            let result = super.toString();

            if (this.performers.length > 0) {
                result += `\nPerformers: ${this.performers.join(', ')}.`;
            }

            return result;
        }
    }

    return {
        Hall,
        MovieTheater,
        ConcertHall
    }
}