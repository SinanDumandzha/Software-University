function printTicTacToeResult(input) {
    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let player = 'X';

    for (let line of input) {
        [currentRow, currentCol] = line.split(' ').map(Number);

        if (dashboard[currentRow][currentCol] !== false) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        dashboard[currentRow][currentCol] = player;

        for (let i = 0; i < 3; i++) {
            if (
                dashboard[i][0] === player &&
                dashboard[i][1] === player &&
                dashboard[i][2] === player
            ) {
                console.log(`Player ${player} wins!`);
                printResult();
                return;
            } else if (
                dashboard[0][i] === player &&
                dashboard[1][i] === player &&
                dashboard[2][i] === player
            ) {
                console.log(`Player ${player} wins!`);
                printResult();
                return;
            }
        }

        if (
            dashboard[0][0] === player &&
            dashboard[1][1] === player &&
            dashboard[2][2] === player
        ) {
            console.log(`Player ${player} wins!`);
            printResult();
            return;
        } else if (
            dashboard[0][2] === player &&
            dashboard[1][1] === player &&
            dashboard[2][0] === player
        ) {
            console.log(`Player ${player} wins!`);
            printResult();
            return;
        }

        let theresFalse = false;

        for (let row = 0; row < dashboard.length; row++) {
            if (dashboard[row].includes(false)) {
                theresFalse = true;
            }
        }

        if (!theresFalse) {
            console.log('The game ended! Nobody wins :(');
            printResult();
            return;
        }

        player = player === 'X' ? 'O' : 'X';
    }

    function printResult() {
        for (let row = 0; row < dashboard.length; row++) {
            console.log(dashboard[row].join('\t'));
        }
    }
}

printTicTacToeResult(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"
]);