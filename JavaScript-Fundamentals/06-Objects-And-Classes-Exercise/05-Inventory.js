function printInventory(input) {
    let inventory = [];

    input.forEach(element => {
        let heroInfo = element.split(' / ');
        let name = heroInfo[0];
        let level = Number(heroInfo[1]);
        let items = heroInfo[2].split(', ').sort((a, b) => a.localeCompare(b)).join(', ');

        inventory.push({ name, level, items });
    });

    inventory.sort((a, b) => a.level - b.level);

    inventory.forEach(hero => {
        console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`);
    })
}

printInventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);