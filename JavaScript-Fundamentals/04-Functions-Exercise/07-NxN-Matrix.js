function matrixCreator(count) {

    for (let i = 0; i < count; i++) {

        let result = '';

        for (let j = 0; j < count; j++) {
            result += count + ' ';
        }
        console.log(result);
    }
}

matrixCreator(8);