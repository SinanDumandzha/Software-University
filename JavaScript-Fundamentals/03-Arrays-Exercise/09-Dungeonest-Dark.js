function solve(rooms) {
    let dungeons = rooms.shift().split('|');
    let health = 100;
    let coins = 0;
    let alive = true;

    for (let dungeon = 0; dungeon < dungeons.length; dungeon++) {
        let action = dungeons[dungeon].split(' ')[0];
        let value = Number(dungeons[dungeon].split(' ')[1]);

        if (action === 'potion') {
            console.log(`You healed for ${value + health > 100 ? 100 - health : value} hp.`);
            value + health > 100 ? health = 100 : health += value;
            console.log(`Current health: ${health} hp.`);

        } else if (action === 'chest') {
            coins += value;
            console.log(`You found ${value} coins.`);

        } else {
            health -= value;

            if (health > 0) {
                console.log(`You slayed ${action}.`);

            } else {
                console.log(`You died! Killed by ${action}.`);
                console.log(`Best room: ${dungeon + 1}`);
                alive = false;
                break;
            }
        }
    }

    if (alive) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

solve(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000']);