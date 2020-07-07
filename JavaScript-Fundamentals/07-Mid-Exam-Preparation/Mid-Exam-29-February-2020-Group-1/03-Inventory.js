function inventoryList(input) {
    let inventory = input.shift().split(', ');

    for (command of input) {
        let [action, item] = command.split(' - ');

        switch (action) {
            case 'Collect':
                if (!inventory.includes(item)) {
                    inventory.push(item);
                }
                break;

            case 'Drop':
                if (inventory.includes(item)) {
                    inventory.splice(inventory.indexOf(item), 1);
                }
                break;

            case 'Combine Items':
                let [oldItem, newItem] = item.split(':');
                if (inventory.includes(oldItem)) {
                    inventory.splice(inventory.indexOf(oldItem) + 1, 0, newItem);
                }
                break;

            case 'Renew':
                if (inventory.includes(item)) {
                    inventory.splice(inventory.indexOf(item), 1);
                    inventory.push(item);
                }
                break;

            case 'Craft!':
                console.log(inventory.join(', '));
                break;
        }
    }
}

inventoryList([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]);