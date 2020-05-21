function petShop (dogs, animals) {
    let dogsCount = Number(dogs);
    let animalsCount = Number(animals);

    let foodPrice = (2.50 * dogs) + (4 * animals);
    
    console.log (`${foodPrice.toFixed(2)} lv.`);
}

petShop ('5','4');
