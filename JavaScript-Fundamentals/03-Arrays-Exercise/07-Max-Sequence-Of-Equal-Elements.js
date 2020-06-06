function solve(array) {
    let currentSequence = [];
    let maxSequence = [];

    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        currentSequence = [element];

        for (let i = index + 1; i < array.length; i++) {
            if (array[index] == array[i]) {
                currentSequence.push(array[index]);
            } else {
                break;
            }
        }

        if (currentSequence.length > maxSequence.length) {
            maxSequence = currentSequence;
        }
    }
    console.log(maxSequence.join(' '));
}

solve([2, 1, 1, 3, 3, 2, 2, 2, 1]);