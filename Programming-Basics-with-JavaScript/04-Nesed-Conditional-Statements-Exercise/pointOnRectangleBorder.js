function point (x1, y1, x2, y2, pointX, pointY) {

    x1 = Number (x1);
    y1 = Number (y1);
    x2 = Number (x2);
    y2 = Number (y2);
    pointX = Number (pointX);
    pointY = Number (pointY);

   let check1 = (pointX === x1 || pointX === x2) && (pointY >= y1 && pointY <= y2);
   let check2 = (pointY === y1 || pointY === y2) && (pointX >= x1 && pointX <= x2);


    if (check1 || check2) {
        console.log('Border');
        
    } else {
        console.log ('Inside / Outside');
    }
}

point ('2', '-3', '12', '3', '12', '-1');