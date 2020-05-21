function solve(flowerTypeInput, flowerCountInput, seasonInput) {
    let flowerType = flowerTypeInput;
    let flowerCount = flowerCountInput;
    let season = seasonInput;

    let honey = 0;

    if (flowerType == 'Sunflower') {
        if (season == 'Spring') {
            honey = flowerCount * 10;
            console.log(`Total honey harvested: ${honey.toFixed(2)}`);
        } else if (season == 'Summer') {
            honey = flowerCount * 8;
            honey *= 1.1;
            console.log(`Total honey harvested: ${honey.toFixed(2)}`);
        } else {
            honey = flowerCount * 12;
            honey *= 0.95;
            console.log(`Total honey harvested: ${honey.toFixed(2)}`);
        }
    }

    if (flowerType == 'Daisy') {
        if (season == 'Spring') {
            honey = flowerCount * 12;
            honey *= 1.1;
            console.log(`Total honey harvested: ${honey.toFixed(2)}`);
        } else if (season == 'Summer') {
            honey = flowerCount * 8;
            honey *= 1.1;
            console.log(`Total honey harvested: ${honey.toFixed(2)}`);
        } else {
            honey = flowerCount * 6;
            honey *= 0.95;
            console.log(`Total honey harvested: ${honey.toFixed(2)}`);
        }
    }

    if (flowerType == 'Lavender') {
        if (season == 'Spring') {
            honey = flowerCount * 12;
            console.log(`Total honey harvested: ${honey.toFixed(2)}`);
        } else if (season == 'Summer') {
            honey = flowerCount * 8;
            honey *= 1.1;
            console.log(`Total honey harvested: ${honey.toFixed(2)}`);
        } else {
            honey = flowerCount * 6;
            honey *= 0.95;
            console.log(`Total honey harvested: ${honey.toFixed(2)}`);
        }
    }

    if (flowerType == 'Mint') {
        if (season == 'Spring') {
            honey = flowerCount * 10;
            honey *= 1.1;
            console.log(`Total honey harvested: ${honey.toFixed(2)}`);
        } else if (season == 'Summer') {
            honey = flowerCount * 12;
            honey *= 1.1;
            console.log(`Total honey harvested: ${honey.toFixed(2)}`);
        } else {
            honey = flowerCount * 6;
            honey *= 0.95;
            console.log(`Total honey harvested: ${honey.toFixed(2)}`);
        }
    }
}

solve('Daisy', '15', 'Autumn');