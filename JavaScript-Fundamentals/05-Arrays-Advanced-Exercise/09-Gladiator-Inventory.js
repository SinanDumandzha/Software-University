function manageInventory(info) {

    let inventory = [];
    let items = info[0].split(' ');

    for (let item of items) {
        inventory.push(item);
    }

    info.shift();

    for (let index in info) {
        let command = info[index].split(' ');

        switch (command[0]) {
            case 'Buy':
                if (!(inventory.includes(command[1]))) {
                    inventory.push(command[1]);
                };
                break;

            case 'Trash':
                if (inventory.includes(command[1])) {
                    inventory.splice(inventory.indexOf(command[1]), 1);
                }
                break;

            case 'Repair':
                if (inventory.includes(command[1])) {
                    inventory.splice((inventory.indexOf(command[1])), 1);
                    inventory.push(command[1]);
                }
                break;

            case 'Upgrade':
                let upgrade = command[1].split('-');

                if (inventory.includes(upgrade[0])) {
                    let upgradeResult = `${upgrade[0]}:${upgrade[1]}`;

                    inventory.splice((inventory.indexOf(upgrade[0]) + 1), 0, upgradeResult);
                }
                break;
        }
    }

    console.log(inventory.join(' '));
}

manageInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);