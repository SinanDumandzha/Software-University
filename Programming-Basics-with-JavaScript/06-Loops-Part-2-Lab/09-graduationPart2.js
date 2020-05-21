function solve(input) {
    let name = input.shift();
    let grade = Number(input.shift());

    let totalGrades = 0;
    let averageGrade = 0;
    let year = 1;
    let badGradesCount = 0;
    let isFailed = false;

    while (year <= 12) {
        if (grade >= 4.00) {
            year += 1;
        } else {
            badGradesCount++;
        }

        if (badGradesCount >= 2) {
            isFailed = true;
            break;
        }
        totalGrades += grade;
        grade = Number(input.shift());
    }
    if (!isFailed) {
        year -= 1;
        averageGrade = totalGrades / year;
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    } else {
        console.log(`${name} has been excluded at ${year} grade`);
    }

}

solve(['Gosho', 5, 5.5, 6, 5.43, 5.5, 6, 5.55, 5, 6, 6, 5.43, 5]);;