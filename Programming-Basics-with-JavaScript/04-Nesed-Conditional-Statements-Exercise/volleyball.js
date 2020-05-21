function volleyball(yearType, holidays, hometown) {

    holidays = Number(holidays);
    hometown = Number(hometown);

    let weekendsForVolleyball = 0;
    let holidaysForVolleyball = 0;
    let totalPlays = 0;

    weekendsForVolleyball = (48 - hometown) * (3 / 4);
    holidaysForVolleyball = (holidays) * (2 / 3);
    totalPlays = weekendsForVolleyball + holidaysForVolleyball + hometown;

    if (yearType === 'normal') {
        console.log(Math.floor(totalPlays));

    } else if (yearType === 'leap') {
        totalPlays *= 1.15;
        console.log(Math.floor(totalPlays));
    }
}

volleyball('normal', '11', '6');






