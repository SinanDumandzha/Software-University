function onTimeForTheExam(examHour, examMinute, arriveHour, arriveMinute) {

    examHour = Number(examHour);
    examMinute = Number(examMinute);
    arriveHour = Number(arriveHour);
    arriveMinute = Number(arriveMinute);

    let examTime = (examHour * 60) + examMinute;
    let arriveTime = (arriveHour * 60) + arriveMinute;
    let difference = Math.abs(examTime - arriveTime);

    let hours = 0;
    let minutes = 0;

    if (arriveTime > examTime) {

        if (difference >= 60) {
            minutes = difference % 60;
            hours = (difference - minutes) / 60;

            if (minutes <= 9) {
                console.log('Late');
                console.log(`${hours}:0${minutes} hours after the start`);

            } else {
                console.log('Late');
                console.log(`${hours}:${minutes} hours after the start`);
            }

        } else {
            console.log('Late');
            console.log(`${difference} minutes after the start`);
        }

    } else {

        if (difference === 0) {
            console.log('On time');

        } else if (difference <= 30) {
            console.log('On time');
            console.log(`${difference} minutes before the start`);

        } else if (difference >= 60) {
            minutes = difference % 60;
            hours = (difference - minutes) / 60;

            if (minutes <= 9) {
                console.log('Early');
                console.log(`${hours}:0${minutes} hours before the start`);

            } else {
                console.log('Early');
                console.log(`${hours}:${minutes} hours before the start`);
            }

        } else {
            console.log('Early');
            console.log(`${difference} minutes before the start`);
        }
    }
}


onTimeForTheExam('10', '00', '6', '42');