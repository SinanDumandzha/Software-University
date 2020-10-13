function listProcessor(input) {
    let processor = {
        output: [],
        add: function (string) {
            this.output.push(string);
        },
        remove: function (string) {
            this.output = this.output.filter(e => e !== string);
        },
        print: function () {
            console.log(this.output.join(','));
        },
    };

    input.map(act => {
        let [action, string] = act.split(' ');

        if (action === 'add') {
            processor.add(string);
        } else if (action === 'remove') {
            processor.remove(string);
        } else if (action === 'print') {
            processor.print();
        }
    });
}

console.log(listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']));