function attachEventsListeners() {
    let daysText = document.getElementById('days');
    let hoursText = document.getElementById('hours');
    let minutesText = document.getElementById('minutes');
    let secondsText = document.getElementById('seconds');

    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', () => {
        convertTime(daysText.value * (24 * 60 * 60));
    });
    hoursBtn.addEventListener('click', () => {
        convertTime(hoursText.value * (60 * 60));
    });
    minutesBtn.addEventListener('click', () => {
        convertTime(minutesText.value * 60);
    });
    secondsBtn.addEventListener('click', () => {
        convertTime(secondsText.value);
    });

    function convertTime(seconds) {
        let totalDays = seconds / (24 * 60 * 60);
        let totalHours = seconds / (60 * 60);
        let totalMinutes = seconds / 60;
        let totalSeconds = seconds;

        return daysText.value = totalDays,
            hoursText.value = totalHours,
            minutesText.value = totalMinutes,
            secondsText.value = totalSeconds;
    }
}