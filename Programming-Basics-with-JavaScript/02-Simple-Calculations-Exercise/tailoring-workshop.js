function tailoringWorkshop (tableCount, tableLenght, tableWidth) {
    tableCount = Number(tableCount);
    tableLenght = Number(tableLenght);
    tableWidth = Number(tableWidth);

    let tableClothSize = tableCount * (tableLenght + 2 * 0.3) * (tableWidth  + 2 * 0.3);
    let tableSquareSize = tableCount * (tableLenght / 2) * (tableLenght / 2);

    let priceUSD = 7 * tableClothSize + 9 * tableSquareSize;
    let priceBGN = priceUSD * 1.85;  

    console.log (`${priceUSD.toFixed(2)} USD`);
    console.log (`${priceBGN.toFixed(2)} BGN`);
}

tailoringWorkshop ('5','1.00','0.50');