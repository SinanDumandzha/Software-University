function printGameResult(input) {
    let heroes = {};
    let heroesCount = Number(input[0]);
    let heroesInfo = input.slice(1, heroesCount + 1);

    for (let i = 0; i < heroesInfo.length; i++) {
        let [heroName, HP, MP] = heroesInfo[i].split(' ');
        HP = Number(HP);
        MP = Number(MP);

        heroes[heroName] = {
            HP: (Math.min(HP, 100)),
            MP: (Math.min(MP, 200))
        }
    }

    let actions = input.slice(heroesCount + 1);
    let action = actions.shift();

    while (action !== 'End') {
        let tokens = action.split(' - ');
        let command = tokens[0];
        let heroName = tokens[1];

        switch (command) {
            case 'CastSpell':
                let neededMP = Number(tokens[2]);
                let spellName = tokens[3];

                if (heroes[heroName] !== undefined) {
                    if (heroes[heroName].MP >= neededMP) {
                        heroes[heroName].MP -= neededMP;
                        console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].MP} MP!`);
                    } else {
                        console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
                    }
                    break;
                }
                case 'TakeDamage':
                    let damage = Number(tokens[2]);
                    let attacker = tokens[3];

                    if (heroes[heroName].HP > damage) {
                        heroes[heroName].HP -= damage
                        console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].HP} HP left!`);
                    } else {
                        delete heroes[heroName];
                        console.log(`${heroName} has been killed by ${attacker}!`);
                    }
                    break;

                case 'Recharge':
                    let amountMP = Number(tokens[2]);

                    if ((heroes[heroName].MP + amountMP) <= 200) {
                        heroes[heroName].MP += amountMP;
                        console.log(`${heroName} recharged for ${amountMP} MP!`);
                    } else {
                        let oldMP = heroes[heroName].MP;
                        let recoveredMP = 200 - oldMP;
                        heroes[heroName].MP = 200;
                        console.log(`${heroName} recharged for ${recoveredMP} MP!`);
                    }
                    break;

                case 'Heal':
                    let amountHeal = Number(tokens[2]);

                    if ((heroes[heroName].HP + amountHeal) <= 100) {
                        heroes[heroName].HP += amountHeal;
                        console.log(`${heroName} healed for ${amountHeal} HP!`);
                    } else {
                        let oldHP = heroes[heroName].HP;
                        let recoveredHP = 100 - oldHP;
                        heroes[heroName].HP = 100;
                        console.log(`${heroName} healed for ${recoveredHP} HP!`);
                    }
                    break;
        }
        action = actions.shift();
    }

    let sortedHeroes = Object.entries(heroes).sort((a, b) => (b[1].HP - a[1].HP) || (a[1].localeComapare(b[1])));

    for (let hero of sortedHeroes) {
        console.log(`${hero[0]}`);
        console.log(`  HP: ${hero[1].HP}`);
        console.log(`  MP: ${hero[1].MP}`);
    }
}

printGameResult(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
]);