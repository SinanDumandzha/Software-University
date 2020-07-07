function calculateNeededTime(input) {
    let studentsCount = Number(input.pop());
    let totalAnswersPerHour = 0;
    let hours = 0;

    for (employee of input) {
        employee = Number(employee);
        totalAnswersPerHour += Number(employee);
    }

    let counter = 0;

    if (studentsCount > 0 && totalAnswersPerHour > 0) {
        while (studentsCount > 0) {
            studentsCount -= totalAnswersPerHour;
            hours++;
            counter++;

            if (counter % 3 == 0 && studentsCount > 0) {
                hours++;
                counter = 0
            }
        }
    } else {
        hours = 0;
    }
    console.log(`Time needed: ${hours}h.`);
}

calculateNeededTime(['3', '2', '5', '51']);