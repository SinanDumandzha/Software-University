function greening (area) {
    let areaNum = Number(area);
    let greeningPrice = area * 7.61;
    let discount = greeningPrice * 0.18;
    let finalPrice = greeningPrice - discount;

    console.log (`The final price is: ${finalPrice.toFixed(2)} lv.`);
    console.log (`The discount is: ${discount.toFixed(2)} lv.`);
}

greening ('540');