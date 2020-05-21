function solve(input) {
    let n = Number(input.shift());
    let currentLine = input.shift();
    let gradesCount = 0;
    let sumAllGrades = 0;

    while (currentLine !== 'Finish') {
        let presentation = currentLine;
        let currentSum = 0;

        for (let i = 0; i < n; i++) {
            let currentGrade = Number(input.shift());
            currentSum += currentGrade;
        }
        sumAllGrades += currentSum;
        gradesCount += n;
        let currentAverage = (currentSum / n).toFixed(2);
        console.log(`${presentation} - ${currentAverage}.`);

        currentLine = input.shift();
    }
    let allGradesAverage = (sumAllGrades / gradesCount).toFixed(2);
    console.log(`Student's final assessment is ${allGradesAverage}.`);
}

solve([2, 'While-Loop', 6.00, 5.50,'For-Loop', 5.84, 5.66, 'Finish']);