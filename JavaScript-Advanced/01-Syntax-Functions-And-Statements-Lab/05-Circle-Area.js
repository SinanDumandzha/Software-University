function calculateCircleArea(radius) {
    let inputType = typeof (radius);

    if (inputType === 'number') {
        let area = (Math.pow(radius, 2) * Math.PI).toFixed(2);
        console.log(area);
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}

calculateCircleArea(5);