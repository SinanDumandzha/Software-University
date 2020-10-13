function cars(input) {
    let cars = {};

    input.map(data => {
        let [action, name, infoOne, infoTwo] = data.split(' ');

        if (action === 'create' && (!infoOne && !infoTwo)) {
            create(name);
        } else if (action === 'create') {
            createAndInherit(name, infoTwo);
        } else if (action === 'set') {
            set(name, infoOne, infoTwo);
        } else if (action === 'print') {
            print(name);
        }
    });

    function create(name) {
        cars[name] = {};
    }

    function createAndInherit(name, infoTwo) {
        let parent = cars[infoTwo];
        cars[name] = Object.create(parent);
    }

    function set(name, key, value) {
        cars[name][key] = value;
    }

    function print(name) {
        let items = [];

        for (let i in cars[name]) {
            items.push(`${i}:${cars[name][i]}`);
        }
        console.log(items.join(', '));
    }
}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);