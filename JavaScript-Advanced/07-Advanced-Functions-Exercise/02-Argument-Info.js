function printArgsInfo(...arguments) {
    let types = {};

    arguments.map(arg => {
        let type = typeof (arg);
        let value = String(arg);

        console.log(`${type}: ${value}`);

        types.hasOwnProperty(type) ? types[type] += 1 : types[type] = 1;
    });

    Array
        .from(Object.keys(types))
        .sort((a, b) => types[b] - types[a])
        .map(type => {
            console.log(`${type} = ${types[type]}`);
        });
}

printArgsInfo('cat', 42, function () {
    console.log('Hello world!');
});