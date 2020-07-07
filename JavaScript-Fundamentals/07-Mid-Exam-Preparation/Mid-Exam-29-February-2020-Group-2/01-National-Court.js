function neededTimeForAllAnswers(input) {
    let people = Number(input.pop());
    let answeredPerHour = 0;
    let hours = 0;

    for (answered of input) {
        answeredPerHour += Number(answered);
    }

    let breakCount = 0;

    while (people > 0) {
        people -= answeredPerHour;
        hours++;

        if (hours % 4 == 0 && hours !== 0) {
            hours++;
        }
    }
    console.log(`Time needed: ${hours}h.`);
}

neededTimeForAllAnswers(['1', '2', '3', '45']);