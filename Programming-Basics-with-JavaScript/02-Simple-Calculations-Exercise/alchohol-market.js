function shopping (whiskeyPrice, beer, wine, rakia, whiskey) {
    whiskeyPrice = Number(whiskeyPrice);
    beer = Number(beer);
    wine = Number(wine);
    rakia = Number(rakia);
    whiskey = Number(whiskey);

    let rakiaPrice = whiskeyPrice / 2;
    let winePrice = rakiaPrice * 0.6;
    let beerPrice = rakiaPrice * 0.2;

    let totalAmount = (beer * beerPrice) + (wine * winePrice) + (rakia * rakiaPrice) + (whiskey * whiskeyPrice);

    console.log (totalAmount.toFixed(2));
}

shopping (50, 10, 3.5, 6.5, 1);