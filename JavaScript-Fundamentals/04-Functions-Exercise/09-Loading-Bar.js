function visualizeLoadingBar(percentage) {

    let loaded = percentage / 10;
    let notLoaded = (100 - percentage) / 10;

    let loadedSymbol = '%';
    let notLoadedSymbol = '.';

    if (percentage == 100) {
        console.log(`${percentage}% Complete!`);
        console.log(`[${loadedSymbol.repeat(loaded)}]`);
    } else {
        result = `${percentage}% [${loadedSymbol.repeat(loaded)}${notLoadedSymbol.repeat(notLoaded)}]`;
        console.log(result);
        console.log(`Still loading...`);
    }
}

visualizeLoadingBar(100);