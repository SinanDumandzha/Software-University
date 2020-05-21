function convertor (value, input, output) {

    value = Number(value);

    let inputValue = 0;
    let outputValue = 0;

    if (input === "mm") {
        inputValue = value / 1000;
    
    } else if (input === "cm") {
        inputValue = value / 100;

    } else {
        inputValue = value / 1;
    }

    if (output === "mm") {
        outputValue = inputValue * 1000;

    } else if (output === "cm") {
        outputValue = inputValue * 100;

    } else {
        outputValue = inputValue * 1;
    }
    console.log (outputValue.toFixed(3));
}

convertor ("12","mm","m");