function solve(input) {
    let badGrades = Number(input.shift());

    let sumOfGrade = 0;
    let numberOfProblems = 0;
    let numberOfBadGrades = 0;
    let lastProblem = '';

    while (numberOfBadGrades < badGrades) {
        let nameOfProblem = input.shift();
        let gradeFromProblem = Number(input.shift());

        if (nameOfProblem === 'Enough') {
            console.log(`Average score: ${(sumOfGrade / numberOfProblems).toFixed(2)}`);
            console.log(`Number of problems: ${numberOfProblems}`);
            console.log(`Last problem: ${lastProblem}`);
            break;
        }
        if (gradeFromProblem <= 4) {
            numberOfBadGrades += 1;
        }
        if (numberOfBadGrades == badGrades) {
            console.log(`You need a break, ${badGrades} poor grades.`);
            break;
        }
        numberOfProblems += 1;
        sumOfGrade += gradeFromProblem;
        lastProblem = nameOfProblem;
    }
}

solve([3, 'Money', 6, 'Story', 4, 'Spring Time', 5, 'Bus', 6, 'Enough']);