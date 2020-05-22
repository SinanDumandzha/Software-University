function charity (days, chefs, cakes, waffles, pancakes) {
    days = Number(days);
    chefs = Number(chefs);
    cakes = Number(cakes);
    waffles = Number(waffles);
    pancakes = Number(pancakes);

    let price = days * chefs * ((cakes * 45) + (waffles * 5.80) + (pancakes * 3.20));
    let finalAmount = price - (price / 8);

    console.log (finalAmount.toFixed(2));
}

charity(20, 8, 14, 30, 16);