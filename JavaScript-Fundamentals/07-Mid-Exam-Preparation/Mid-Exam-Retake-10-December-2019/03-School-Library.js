function createLibrary(input) {
    let library = input.shift().split('&');

    for (command of input) {
        let [action, bookName, bookNameTwo] = command.split(' | ');

        switch (action) {
            case 'Add Book':
                if (!library.includes(bookName)) {
                    library.unshift(bookName);
                }
                break;

            case 'Take Book':
                if (library.includes(bookName)) {
                    library.splice(library.indexOf(bookName), 1);
                }
                break;

            case 'Swap Books':
                if (library.includes(bookName) && library.includes(bookNameTwo)) {
                    let bookOne = library.indexOf(bookName);
                    let bookTwo = library.indexOf(bookNameTwo);

                    let temp = library[bookOne];
                    library[bookOne] = library[bookTwo];
                    library[bookTwo] = temp;
                }
                break;

            case 'Insert Book':
                library.push(bookName);
                break;

            case 'Check Book':
                let checkIndex = Number(bookName);

                if (0 <= checkIndex && checkIndex < library.length) {
                    console.log(`${library[checkIndex]}`);
                }
                break;
        }
    }
    console.log(library.join(', '));
}

// createLibrary(["Don Quixote&The Great Gatsby&Moby Dick&Hamlet",
//     "Add Book | The Odyssey",
//     "Take Book | Don Quixote",
//     "Insert Book | Alice's Adventures in Wonderland",
//     "Check Book | 3",
//     "Done"
// ]);

createLibrary(['Anna Karenina&Heart of Darkness&Catch-22&The Stranger',
    'Add Book | David Copperfield',
    'Add Book | One Thousand and One Nights',
    'Swap Books | One Thousand and One Nights | Catch-22',
    'Take Book | David Copperfield',
    'Insert Book | The Stories of Anton Chekhov',
    'Check Book | 17',
    'Done',
]);