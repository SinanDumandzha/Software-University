function onTimeForTheExam(examHour, examMinute, arriveHour, arriveMinute) {

    examHour = Number(examHour);
    examMinute = Number(examMinute);
    arriveHour = Number(arriveHour);
    arriveMinute = Number(arriveMinute);

    let hourDifference = 0;
    let minuteDifference = 0;

    if (examHour === arriveHour) {

        if (examMinute === arriveMinute) {
            minuteDifference = examMinute - arriveMinute;
            console.log('On time');

        } else if (examMinute > arriveMinute) {
            minuteDifference = examMinute - arriveMinute
            if (minuteDifference <= 30) {
                console.log('On time');
                console.log(`${minuteDifference} minutes before the start`);
            }

        } else if (examMinute < arriveMinute) {
            minuteDifference = arriveMinute - examMinute;
            console.log('Late');
            console.log(`${minuteDifference} minutes after the start`);
        }






    } else if (examHour > arriveHour) {

        if (arriveMinute === 00) {
            minuteDifference = examMinute + arriveMinute;

        } else {
            minuteDifference = examMinute + (60 - arriveMinute);
        }

        if (examMinute === arriveMinute) {
            hourDifference = examHour - arriveHour;
            console.log('Early');
            console.log(`${hourDifference}:00 hours before the start`);

        } else if (minuteDifference <= 30) {
            hourDifference = examHour - arriveHour;

            if (hourDifference > 1) {
                hourDifference = (examHour - arriveHour) - 1;

                if (minuteDifference % 60 <= 9) {
                    console.log('Early');
                    console.log(`${hourDifference}:0${minuteDifference} hours before the start`);

                } else {
                    console.log('Early');
                    console.log(`${hourDifference}:${minuteDifference} hours before the start`);
                }

            } else {
                console.log('On time');
                console.log(`${minuteDifference} minutes before the start`);
            }

        } else if (examMinute + (60 - arriveMinute) > 30) {
            hourDifference = examHour - arriveHour;
            minuteDifference = examMinute + (60 - arriveMinute);

            if (minuteDifference < 60) {

                if (hourDifference <= 1) { 
                    console.log('Early');
                    console.log(`${minuteDifference} minutes before the start`);

                } else {
                    hourDifference = hourDifference - 1;

                    if (minuteDifference % 60 <= 9) {
                        console.log('Early');
                        console.log(`${hourDifference}:0${minuteDifference} hours before the start`);
    
                    } else {
                        console.log('Early');
                        console.log(`${hourDifference}:${minuteDifference} hours before the start`);
                    }
                }


            } else if (minuteDifference >= 60) {
                hourDifference = examHour - arriveHour;
                minuteDifference = minuteDifference % 60;

                if (minuteDifference % 60 <= 9) {
                    console.log('Early');
                    console.log(`${hourDifference}:0${minuteDifference} hours before the start`);

                } else {
                    console.log('Early');
                    console.log(`${hourDifference}:${minuteDifference} hours before the start`);
                }
            }

        }



    } else if (arriveHour > examHour) {
        hourDifference = arriveHour - examHour;

        if (hourDifference <= 1) {
            minuteDifference = (60 - examMinute) + arriveMinute;

            if (minuteDifference < 60) {
                console.log('Late');
                console.log(`${minuteDifference} minutes after the start`);

            } else if (minuteDifference >= 60) {
                minuteDifference = minuteDifference % 60;

                if (minuteDifference <= 9) {
                    console.log('Late');
                    console.log(`${hourDifference}:0${minuteDifference} hours after the start`);

                } else {
                    console.log('Late');
                    console.log(`${hourDifference}:${minuteDifference} hours after the start`);
                }
            }

        } if (hourDifference > 1) {
            minuteDifference = ((60 - examMinute) + arriveMinute) % 60;

            if (minuteDifference <= 9) {
                console.log('Late');
                console.log(`${hourDifference}:0${minuteDifference} hours after the start`);

            } else {
                console.log('Late');
                console.log(`${hourDifference}:${minuteDifference} hours after the start`);
            }
        }
    }
}

onTimeForTheExam('10', '00', '9', '55');

