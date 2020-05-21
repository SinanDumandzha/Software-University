function solve(input) {
    let levels = Number(input.shift());
    let apartments = Number(input.shift());

    for (let l = levels; l >= 1; l--) {
        let type = '';
        let floor = '';
        for (let a = 0; a < apartments; a++) {
            if (l == levels) {
                type = "L";
            } else if (l % 2 == 0) {
                type = "O";
            } else if (l % 2 != 0) {
                type = "A";
            }
            floor += `${type}${l}${a} `;
        }
        console.log(floor);
    }
}

solve([6, 4]);