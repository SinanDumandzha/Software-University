function gameHistory(input) {
    let dungeons = input.split('|');
    let health = 100;
    let coins = 0;
    let currentDungeon = 0;
    let isAlive = true;
 
    for (const dungeon of dungeons) {
        let [command, value] = dungeon.split(' ');
        value = Number(value);
        currentDungeon++;
 
        if (command == 'potion') {
            let healedWith = value;
 
            if (health + value > 100) {
                healedWith = 100 - health;
                health = 100;
            } else {
                health += value;
            }
 
            console.log(`You healed for ${healedWith} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (command == 'chest') {
            coins += value;
            console.log(`You found ${value} bitcoins.`);
        } else {
            health -= value;
           
            if (health <= 0) {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${currentDungeon}`);
                isAlive = false;
                break;
            }
            console.log(`You slayed ${command}.`);
        }
    }
 
    if (isAlive) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}

gameHistory('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110');
