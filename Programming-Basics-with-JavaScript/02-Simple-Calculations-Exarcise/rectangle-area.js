function area (x1, y1, x2, y2) {
    let x1Num = Number(x1);
    let y1Num = Number(y1);
    let x2Num = Number(x2);
    let y2Num = Number(y2);

    let areaCalcX = Math.abs(x1 - x2);
    let areaCalcY = Math.abs(y1 - y2);
    let areaTotal = areaCalcX * areaCalcY;
    let perimeter = 2 * (areaCalcX + areaCalcY);

    console.log (areaTotal.toFixed(2));
    console.log (perimeter.toFixed(2));
}

area ('60','20','10','50');