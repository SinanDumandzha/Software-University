function solve(arrayOne, arrayTwo) {
    for (let charFirstArray of arrayOne) {
        for (let charSecondArray of arrayTwo) {
            if (charFirstArray === charSecondArray) {
                console.log(charFirstArray);
            }
        }
    }
}

solve(['S', 'o', 'f', 't', 'U', 'n', 'i'], ['s', 'o', 'c', 'i', 'a', 'l']);