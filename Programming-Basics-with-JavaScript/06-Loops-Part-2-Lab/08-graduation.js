function solve(input) {
    let name = input.shift();
    let grade = Number(input.shift());

    let totalGrades = 0;
    let averageGrade = 0;
    let year = 1;

    while (year <= 12) {

        if (grade >= 4.00) { 
            year += 1;
        }
        totalGrades += grade;
        grade = Number(input.shift());
    }
    year -= 1;
    averageGrade = totalGrades / year;
    console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
}

solve(['Pesho', '4', '5.5', '6', '5.43', '4.5', '6', '5.55', '5', '6', '6', '5.43', '5']);