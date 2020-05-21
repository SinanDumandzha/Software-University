function radiansToDegrees (radian) {
    let radianNum = Number(radian);
    let degree = radian * (180 / Math.PI);
    
    console.log (degree.toFixed(0));
}

radiansToDegrees (3.1416);