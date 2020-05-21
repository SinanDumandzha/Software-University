function fishTank (lenght, width, hight, percentage) {
    let lenthNum = Number(lenght);
    let widthNum = Number(width);
    let hightNum = Number(hight);
    let percentageNum = Number(percentage);

    let tankCapacity = lenght * width * hight;
    let tankWater = tankCapacity * 0.001;
    let percentageCalc = percentage * 0.01;
    let water = tankWater * (1 - percentageCalc);

    console.log (water.toFixed(3));
}

fishTank ('105','77','89','18.5');