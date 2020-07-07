function createShoppingList(input) {
    let list = input.shift().split('!');

    for (command of input) {
        let [action, product, correctProduct] = command.split(' ');

        switch (action) {
            case 'Urgent':
                if (!list.includes(product)) {
                    list.unshift(product);
                }
                break;

            case 'Unnecessary':
                if (list.includes(product)) {
                    list.splice(list.indexOf(product), 1);
                }
                break;

            case 'Correct':
                if (list.includes(product)) {
                    list.splice(list.indexOf(product), 1, correctProduct);
                }
                break;

            case 'Rearrange':
                if (list.includes(product)) {
                    list.splice(list.indexOf(product), 1);
                    list.push(product);
                }
                break;
        }
    }
    console.log(list.join(', '));
}

createShoppingList(['Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'
]);
