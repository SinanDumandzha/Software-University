function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let brokenHelmets = Math.trunc(lostFights / 2);
    let brokenSwords = Math.trunc(lostFights / 3);
    let brokenShields = Math.trunc(lostFights / 6);
    let brokenArmors = Math.trunc(lostFights / 12);

    let helmetsRepairPrice = helmetPrice * brokenHelmets;
    let swordsRepairPrice = swordPrice * brokenSwords;
    let shieldsRepairPrice = shieldPrice * brokenShields;
    let armorsRepairPrice = armorPrice * brokenArmors;

    let totalRepairPrice = helmetsRepairPrice + swordsRepairPrice + shieldsRepairPrice + armorsRepairPrice;
    
    console.log(`Gladiator expenses: ${totalRepairPrice.toFixed(2)} aureus`);
}

solve(23, 12.50, 21.50, 40, 200);