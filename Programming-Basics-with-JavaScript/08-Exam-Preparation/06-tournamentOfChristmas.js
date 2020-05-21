function solve(input) {
    let days = Number(input.shift());

    let daysWon = 0;
    let moneyWon = 0;

    for (let i = 0; i < days; i++) {
        let sport = input.shift();
        let gamesWon = 0;
        let gamesLost = 0;
        let moneyWonForDay = 0;

        while (sport != 'Finish') {
            let result = input.shift();

            if (result == 'win') {
                gamesWon++;
                moneyWonForDay += 20;
            } else {
                gamesLost++;
            }
            sport = input.shift();
        }
        if (gamesWon > gamesLost) {
            daysWon++;
            moneyWonForDay *= 1.1;
        }
        moneyWon += moneyWonForDay;
    }
    let hasWin = daysWon > days / 2;

    if (hasWin) {
        moneyWon *= 1.2;
    }

    if (hasWin) {
        console.log(`You won the tournament! Total raised money: ${moneyWon.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${moneyWon.toFixed(2)}`);
    }
}

solve(['2', 'volleyball', 'win', 'football', 'lose', 'basketball', 'win', 'Finish', 'golf', 'win', 'tennis', 'win', 'badminton', 'win', 'Finish']);