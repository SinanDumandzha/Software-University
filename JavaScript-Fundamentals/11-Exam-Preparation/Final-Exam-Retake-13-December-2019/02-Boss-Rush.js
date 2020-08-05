function checkAndDecryptText(input) {
    let dataCount = Number(input[0]);
    let data = input.slice(1);

    for (let i = 0; i < dataCount; i++) {
        let currentData = data[i];
        let pattern = /\|(?<bossName>[A-Z]{4,})\|:\#(?<title>[A-Za-z]+[ ][A-Za-z]+)\#/g;
        let match = pattern.exec(currentData);

        if (match) {
            let bossName = match.groups.bossName;
            let title = match.groups.title;

            console.log(`${bossName}, The ${title}`);
            console.log(`>> Strength: ${bossName.length}`);
            console.log(`>> Armour: ${title.length}`);
        } else {
            console.log(`Access denied!`);
        }
    }
}

checkAndDecryptText(['3',
    '|GEORGI|:#Lead architect#|',
    '|Hristo|:#High Overseer#|',
    '|STEFAN|:#Assistant Game Developer#'
]);