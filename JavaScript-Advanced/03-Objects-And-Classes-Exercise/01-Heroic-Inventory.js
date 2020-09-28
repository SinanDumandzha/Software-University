function printHeroesDataInJSON(input) {
    let heroes = [];

    input.forEach(heroInfo => {
        let [name, level, items] = heroInfo.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        heroes.push({
            name,
            level,
            items
        });
    });

    console.log(JSON.stringify(heroes));
}

printHeroesDataInJSON(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);