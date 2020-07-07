function createTankSCollectionList(input) {
    let collection = input.shift().split(', ');
    let commandsCount = Number(input.shift());

    for (command of input) {
        let [action, info, tankName] = command.split(', ');

        switch (action) {
            case 'Add':
                if (collection.includes(info)) {
                    console.log(`Tank is already bought`);
                } else {
                    console.log(`Tank successfully bought`);
                    collection.push(info);
                }
                break;

            case 'Remove':
                if (collection.includes(info)) {
                    console.log(`Tank successfully sold`);
                    let removeinfo = collection.indexOf(info);
                    collection.splice(removeinfo, 1);
                } else {
                    console.log(`Tank not found`);
                }
                break;

            case 'Remove At':
                info = Number(info);

                if (!((info >= 0) && (info < collection.length))) {
                    console.log(`Index out of range`);
                } else {
                    collection.splice(info, 1);
                    console.log(`Tank successfully sold`);
                }
                break;

            case 'Insert':
                info = Number(info);

                if (!((info >= 0) && (info < collection.length))) {
                    console.log(`Index out of range`);
                } else if ((info >= 0) && (info < collection.length) && !(collection.includes(tankName))) {
                    collection.splice(info, 0, tankName);
                    console.log(`Tank successfully bought`);
                } else if ((info >= 0) && (info < collection.length) && (collection.includes(tankName))) {
                    console.log(`Tank is already bought`);
                }
                break;
        }
    }
    console.log(collection.join(', '));
}

createTankSCollectionList(['T-34-85 Rudy, SU-100Y, STG',
    '3',
    'Add, King Tiger(C)',
    'Insert, 6, IS-2M',
    'Remove, T-34-85 Rudy'
]);