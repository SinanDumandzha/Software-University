function printWarriorsQuest(input) {
    let skillText = input[0];
    let commands = input.slice(1);
    let command = commands.shift();

    while (command !== 'For Azeroth') {
        let tokens = command.split(' ');
        let action = tokens[0];

        switch (action) {
            case 'GladiatorStance':
                skillText = skillText.toUpperCase();
                console.log(skillText);
                break;

            case 'DefensiveStance':
                skillText = skillText.toLowerCase();
                console.log(skillText);
                break;

            case 'Dispel':
                let index = Number(tokens[1]);
                let letter = tokens[2];

                if (index >= 0 && index < skillText.length) {
                    skillText = skillText.substring(0, index) + letter + skillText.substring(index + 1);
                    console.log(`Success!`);
                } else {
                    console.log(`Dispel too weak.`);
                }
                break;

            case 'Target':
                let substring = tokens[2];
                let newSubstring = tokens[3];

                if (tokens[1] === 'Change') {
                    while (skillText.includes(substring)) {
                        skillText = skillText.replace(substring, newSubstring);
                    }
                    console.log(skillText);
                } else if (tokens[1] === 'Remove') {
                    while (skillText.includes(substring)) {
                        skillText = skillText.replace(substring, '');
                    }
                    console.log(skillText);
                } else {
                    console.log(`Command doesn't exist!`);
                }
                break;

            default:
                console.log(`Command doesn't exist!`);
                break;
        }
        command = commands.shift();
    }
}

printWarriorsQuest(['fr1c710n',
    'GladiatorStance',
    'Dispel 2 I',
    'Dispel 4 T',
    'Dispel 6 O',
    'Dispel 5 I',
    'Dispel 10 I',
    'Target Change RICTION riction',
    'For Azeroth'
]);