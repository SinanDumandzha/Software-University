(function () {
    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663'
    };

    let cardObject = {
        cardFace: undefined,
        cardSuit: undefined,

        toString() {
            return `${cardObject.cardFace}${cardObject.cardSuit}`;
        },
    };

    return function (face, suit) {
        if (!validFaces.includes(face) || validSuits[suit] == undefined) {
            throw Error('Error');
        }

        cardObject.cardFace = face;
        cardObject.cardSuit = validSuits[suit];
        return cardObject;
    };
}());