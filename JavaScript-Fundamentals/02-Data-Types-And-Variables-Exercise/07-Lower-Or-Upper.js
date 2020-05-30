function solve(letter) {
    if (letter == letter.toLowerCase()) {
        console.log('lower-case');
    } else if (letter == letter.toUpperCase()) {
        console.log('upper-case');
    } else {
        console.log('Error! Character must be a letter')
    }
}

solve('L');