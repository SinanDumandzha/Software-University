function printBattleResult(input) {
    let battleData = {}
    let peopleCount = 0;
    let actions = input.slice();
    let action = actions.shift();

    while (action !== 'Results') {
        let tokens = action.split(':');
        let command = tokens[0];

        switch (command) {
            case 'Add':
                let personName = tokens[1];
                let health = Number(tokens[2]);
                let energy = Number(tokens[3]);

                if (!battleData.hasOwnProperty(personName)) {
                    battleData[personName] = {
                        health: health,
                        energy: energy
                    }
                    peopleCount++;
                } else {
                    battleData[personName].health += health;
                }
                break;

            case 'Attack':
                let attackerName = tokens[1];
                let defenderName = tokens[2];
                let damage = Number(tokens[3]);

                if (battleData.hasOwnProperty(attackerName) && battleData.hasOwnProperty(defenderName)) {
                    battleData[defenderName].health -= damage;
                    battleData[attackerName].energy -= 1;

                    if (battleData[defenderName].health <= 0) {
                        delete battleData[defenderName];
                        console.log(`${defenderName} was disqualified!`);
                        peopleCount--;
                    }

                    if (battleData[attackerName].energy <= 0) {
                        delete battleData[attackerName];
                        console.log(`${attackerName} was disqualified!`);
                        peopleCount--;
                    }
                }
                break;

            case 'Delete':
                let username = tokens[1];

                if (battleData.hasOwnProperty(username)) {
                    delete battleData[username];
                    peopleCount--;
                } else if (username === 'All') {
                    for (let user in battleData) {
                        delete battleData[user];
                        peopleCount--;
                    }
                }
                break;
        }
        action = actions.shift();
    }

    console.log(`People count: ${peopleCount}`);

    let sortedBattleData = Object.entries(battleData).sort((a, b) => b[1].health - a[1].health || a[0].localeCompare(b[0]));

    for (let userData of sortedBattleData) {
        console.log(`${userData[0]} - ${userData[1].health} - ${userData[1].energy}`);
    }
}

printBattleResult(['Add:Mark:1000:5',
    'Add:Clark:1000:3',
    'Attack:Clark:Mark:500',
    'Add:Allison:2500:5',
    'Attack:Clark:Mark:300',
    'Add:Charlie:4000:10',
    'Attack:Clark:Mark:500',
    'Results'
]);