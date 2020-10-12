function breakfastRobot() {
    let microElements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
            order: ['carbohydrate', 'flavour']
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
            order: ['carbohydrate', 'flavour']
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
            order: ['carbohydrate', 'fat', 'flavour']
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
            order: ['protein', 'fat', 'flavour']
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
            order: ['protein', 'carbohydrate', 'fat', 'flavour']
        },
    };

    let commands = {
        restock,
        prepare,
        report,
    };

    function restock(element, quantity) {
        microElements[element] += quantity;
        return 'Success';
    }

    function prepare(recipe, quantity) {
        let required = Object.assign({}, recipes[recipe]);

        required.order.map(key => required[key] *= quantity);

        for (let element of required.order) {
            if (microElements[element] < required[element]) {
                return `Error: not enough ${element} in stock`;
            }
        }

        required.order.map(key => microElements[key] -= required[key]);

        return 'Success';
    }

    function report() {
        return `protein=${microElements.protein} carbohydrate=${microElements.carbohydrate} fat=${microElements.fat} flavour=${microElements.flavour}`;
    }

    function manager(command) {
        let tokens = command.split(' ');

        return commands[tokens[0]](tokens[1], Number(tokens[2]));
    }

    return manager;
}

let manager = breakfastRobot();
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));