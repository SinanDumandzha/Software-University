function timePlus (hours, minutes) {

    hours = Number (hours);
    minutes = Number (minutes);

    let minutesPlus = minutes + 15;

    if (minutesPlus >= 60) {
        hours += 1;
        minutesPlus = minutesPlus % 60;
    }

    if (hours >= 24) {
        hours = hours % 24;

    } if (minutesPlus < 10) {
        console.log (`${hours}:0${minutesPlus}`)

    } else {
        console.log (`${hours}:${minutesPlus}`)
    }
}

timePlus ("11","08");