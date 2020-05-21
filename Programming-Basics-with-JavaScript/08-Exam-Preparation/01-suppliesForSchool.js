function solve(input) {
    let pensPrice = 5.80;
    let markersPrice = 7.20;
    let detergentPrice = 1.20;

    let pensCount = Number(input.shift());
    let markersCount = Number(input.shift());
    let detergentLt = Number(input.shift());

    let discountPercent = Number(input.shift());

    let pensTotalPrice = pensPrice * pensCount;
    let markersTotalPrice = markersPrice * markersCount;
    let detergentTotalPrice = detergentPrice * detergentLt;

    let totalPrice = pensTotalPrice + markersTotalPrice + detergentTotalPrice;

    let discount = discountPercent / 100;
    let totalPriceWithDiscount = totalPrice * (1 - discount);

    console.log(`${totalPriceWithDiscount.toFixed(3)}`);
}

solve(['2', '3', '2.5', '']);