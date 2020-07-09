function createPhoneBook(input) {
    let phoneBook = {};

    for (let data of input) {
        let [name, number] = data.split(' ');
        phoneBook[name] = number;
    }

    for (let key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}

createPhoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);