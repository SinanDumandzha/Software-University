function checkPointsValidity(pointsArray) {
    let x1 = Number(pointsArray[0]);
    let y1 = Number(pointsArray[1]);
    let x2 = Number(pointsArray[2]);
    let y2 = Number(pointsArray[3]);

    function calculateDistance(x1, y1, x2, y2) {
        let distanceX = x1 - x2;
        let distanceY = y1 - y2;
        return Math.sqrt((distanceX ** 2) + (distanceY ** 2));
    }

    if (Number.isInteger(calculateDistance(x1, y1, 0, 0))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(calculateDistance(x2, y2, 0, 0))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(calculateDistance(x1, y1, x2, y2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

checkPointsValidity([2, 1, 1, 1]);