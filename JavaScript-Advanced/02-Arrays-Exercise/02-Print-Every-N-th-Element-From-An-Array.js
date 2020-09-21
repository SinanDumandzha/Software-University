function printNthElement(input) {
    let data = input.slice();
    let nthElement = data.pop();

    data.forEach((element, index) => {
        if (index % nthElement === 0) {
            console.log(element);
        }
    });
}

printNthElement(['5',
    '20',
    '31',
    '4',
    '20',
    '2'
]);