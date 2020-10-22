function solveClasses() {
    class Article {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Title: ${this.title}\nContent: ${this.content}`;
        }
    }

    class ShortReports extends Article {
        constructor(title, content, originalResearch) {
            super(title, content);
            this.comments = [];
            this.originalResearch = originalResearch;

            if (content.length >= 150) {
                throw new Error('Short reports content should be less then 150 symbols.');
            }

            if (!originalResearch.hasOwnProperty('title') || !originalResearch.hasOwnProperty('author')) {
                throw new Error('The original research should have author and title.');
            }

        }

        addComment(comment) {
            this.comments.push(comment);

            return 'The comment is added.';
        }

        toString() {
            let result = super.toString();
            result += `\nOriginal Research: ${this.originalResearch.title} by ${this.originalResearch.author}`;

            if (this.comments.length > 0) {
                result += '\nComments:\n'
                result += this.comments.join('\n');
            }

            return result;
        }
    }

    class BookReview extends Article {
        constructor(title, content, book) {
            super(title, content);
            this.book = book;
            this.clients = [];
        }

        addClient(clientName, orderDescription) {
            let checkClient = this.clients.find(client => client.name === clientName &&
                client.description === orderDescription);

            if (checkClient) {
                throw new Error('This client has already ordered this review.');
            }

            this.clients.push({
                name: clientName,
                description: orderDescription
            });

            return `${clientName} has ordered a review for ${orderDescription}`;
        }

        toString() {
            let result = super.toString() + '\n';
            result += `Book: ${this.book.name}`;

            if (this.clients.length > 0) {
                result += '\nOrders:\n';
                result += this.clients.map(client => `${client.name} - ${client.description}`).join('\n');
            }

            return result;
        }
    }

    return {
        Article,
        ShortReports,
        BookReview
    };
}