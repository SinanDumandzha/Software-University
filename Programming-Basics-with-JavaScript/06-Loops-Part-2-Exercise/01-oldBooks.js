function solve(input) {
    let favoriteBook = input.shift();
    let numberOfBooks = Number(input.shift());
    let nextBook = '';
    let bookIsFound = false;

    let searchedBooks = 0;

    while (searchedBooks < numberOfBooks) {
        nextBook = input.shift();

        if (favoriteBook === nextBook) {
            bookIsFound = true;
            break;
        }
        searchedBooks += 1;
    }
    if (bookIsFound === true) {
        console.log(`You checked ${searchedBooks} books and found it.`);
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${searchedBooks} books.`);
    }
}

solve(['Troy', '8', 'Stronger', 'Life Style', 'Troy']);