function rotateArray(input) {
    let data = input.slice();
    let rotateCount = Number(data.pop());
    rotateCount %= data.length;

    for (let i = 0; i < rotateCount; i++) {
        data.unshift(data.pop());
    }

    let result = data.join(' ');
    console.log(result);
}

rotateArray(['1',
    '2',
    '3',
    '4',
    '2'
]);