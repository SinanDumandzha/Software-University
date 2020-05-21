function outfit(degree, dayTime) {

    degree = Number(degree);

    let outfit = '';
    let shoes = '';

    if (dayTime === 'Morning') {

        if (degree >= 10 && degree <= 18) {
            outfit = 'Sweatshirt';
            shoes = 'Sneakers';

        } else if (degree > 18 && degree <= 24) {
            outfit = 'Shirt';
            shoes = 'Moccasins';
          
        } else if (degree >= 25) {
            outfit = 'T-Shirt';
            shoes = 'Sandals';        
        }
         console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
    }
    if (dayTime === 'Afternoon') {

        if (degree >= 10 && degree <= 18) {
            outfit = 'Shirt';
            shoes = 'Moccasins';

        } else if (degree > 18 && degree <= 24) {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
          
        } else if (degree >= 25) {
            outfit = 'Swim Suit';
            shoes = 'Barefoot';        
        }
         console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
    }
    if (dayTime === 'Evening') {

        if (degree >= 10 && degree <= 18) {
            outfit = 'Shirt';
            shoes = 'Moccasins';

        } else if (degree > 18 && degree <= 24) {
            outfit = 'Shirt';
            shoes = 'Moccasins';
          
        } else if (degree >= 25) {
            outfit = 'Shirt';
            shoes = 'Moccasins';        
        }
         console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
    }
}

outfit ('26','Evening');