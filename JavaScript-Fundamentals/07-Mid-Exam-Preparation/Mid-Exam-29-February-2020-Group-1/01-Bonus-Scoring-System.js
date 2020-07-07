function calculateScore(input) {
    let studentsCount = input.shift();
    let lecturesCount = Number(input.shift());
    let bonusPoints = Number(input.shift());
    let finalScores = [];

    let students = input.sort((a, b) => b - a);

    let maxBonus = 0;
    let maxAttendence = 0;

    if (!lecturesCount <= 0) {
        for (student of students) {
            let studentsBonus = Math.max(Math.ceil(student / lecturesCount * (5 + bonusPoints)), 0);

            finalScores.push(studentsBonus);
        }
        maxBonus = finalScores[0];
        maxAttendence = students[0];
    }
    console.log(`Max Bonus: ${maxBonus}.`);
    console.log(`The student has attended ${maxAttendence} lectures.`);
}

calculateScore([
    '5', '0', '30',
    '12', '19', '24',
    '16', '20'
]);