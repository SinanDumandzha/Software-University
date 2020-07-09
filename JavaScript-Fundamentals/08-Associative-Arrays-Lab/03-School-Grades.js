function createGradesList(input) {
    let gradesMap = new Map();

    for (let data of input) {
        let tokens = data.split(' ');
        let student = tokens[0];
        let grades = tokens.splice(1, tokens.length).map(Number);

        if (!gradesMap.has(student)) {
            gradesMap.set(student, grades);
        } else {
            gradesMap.set(student, gradesMap.get(student).concat(grades));
        }
    }

    let sorted = Array.from(gradesMap).sort((a, b) => sortAverage(a, b));

    for (let info of sorted) {
        console.log(`${info[0]}: ${info[1].join(', ')}`);
    }

    function sortAverage(a, b) {
        let sumA = 0;

        for (let i = 0; i < a[1].length; i++) {
            sumA += a[1][i];
        }

        let sumB = 0;

        for (let i = 0; i < b[1].length; i++) {
            sumB += b[1][i];
        }

        let averageA = sumA / a[1].length;
        let averageB = sumB / b[1].length;

        return averageA - averageB;
    }
}

createGradesList(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);