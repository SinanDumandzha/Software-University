function printWithDelimeter(input) {
    let data = input.slice();
    let delimeter = data.pop();
    let result = data.join(delimeter);

    console.log(result);
}

printWithDelimeter(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-'
]);