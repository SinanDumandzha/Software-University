function createPokerGame(input) {
    let cards = input.shift().split(':');
    let command = input.shift();
    let deck = [];

    while (command !== 'Ready') {
        let [action, cardName, info] = command.split(' ');

        switch (action) {
            case 'Add':
                if (cards.includes(cardName)) {
                    deck.push(cardName);
                } else {
                    console.log(`Card not found.`);
                }
                command = input.shift();
                break;

            case 'Insert':
                info = Number(info);

                if (cards.includes(cardName) && info >= 0 && info < deck.length) {
                    deck.splice(info, 0, cardName);
                } else {
                    console.log(`Error!`);
                }
                command = input.shift();
                break;

            case 'Remove':
                if (deck.includes(cardName)) {
                    let removeIndex = deck.indexOf(cardName);
                    deck.splice(removeIndex, 1);
                } else {
                    console.log(`Card not found.`);
                }
                command = input.shift();
                break;

            case 'Swap':
                let cardOne = deck.indexOf(cardName);
                let cardTwo = deck.indexOf(info);
                [deck[cardOne], deck[cardTwo]] = [deck[cardTwo], deck[cardOne]];
                command = input.shift();
                break;

            case 'Shuffle':
                deck.reverse();
                command = input.shift();
                break;
        }
    }
    console.log(deck.join(' '));
}

// createPokerGame(['Innervate:Moonfire:Pounce:Claw:Wrath:Bite',
//     'Add Moonfire',
//     'Add Pounce',
//     'Add Bite',
//     'Add Wrath',
//     'Insert Claw 0',
//     'Swap Claw Moonfire',
//     'Remove Bite',
//     'Shuffle deck',
//     'Ready'
// ]);

createPokerGame(['Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop',
    'Add Pop',
    'Add Exodia',
    'Add Aso',
    'Remove Wrath',
    'Add SineokBqlDrakon',
    'Shuffle deck',
    'Insert Pesho 0',
    'Ready'
]);