function findEvenPositionElements(elementsArray) {
    let evenPositionElements = [];

    for (let i = 0; i < elementsArray.length; i += 2) {
        evenPositionElements.push(elementsArray[i]);
    }

    let result = evenPositionElements.join(' ');
    console.log(result);
}

findEvenPositionElements(['20', '30', '40']);