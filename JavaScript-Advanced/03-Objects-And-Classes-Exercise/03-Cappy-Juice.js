function calculateJuiceBottles(input) {
    let fruits = {};
    let juiceBottles = {};

    for (let fruit of input) {
        let [name, quantity] = fruit.split(' => ');
        quantity = Number(quantity);

        if (!fruits.hasOwnProperty(name)) {
            fruits[name] = quantity;
        } else {
            fruits[name] += quantity;
        }

        if (fruits[name] >= 1000) {
            let bottlesCount = Math.floor(fruits[name] / 1000);
            fruits[name] -= bottlesCount * 1000;
            !juiceBottles[name] ? (juiceBottles[name] = bottlesCount) : (juiceBottles[name] += bottlesCount);
        }
    }

    for (let bottlesInfo of Object.entries(juiceBottles)) {
        console.log(`${bottlesInfo[0]} => ${bottlesInfo[1]}`);
    }
}

calculateJuiceBottles(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);