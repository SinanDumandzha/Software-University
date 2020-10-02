function stopwatch() {
    let time = document.getElementById('time');
    let startBtn = document.getElementById('startBtn');
    let stopBtn = document.getElementById('stopBtn');

    startBtn.addEventListener('click', startBtnHandler);
    stopBtn.addEventListener('click', stopBtnHandler);

    let seconds = 0;
    let minutes = 0;

    let intervalID;

    function startBtnHandler(e) {
        time.innerText = "00:00";
        seconds = 0;
        minutes = 0;

        startBtn.setAttribute('disabled', 'true');
        stopBtn.removeAttribute('disabled');

        intervalID = setInterval(function () {
                seconds += 1;

                if (seconds === 60) {
                    seconds = 0;
                    minutes += 1;
                }

                let minutesText;
                let secondsText;

                minutes < 10 ? minutesText = `0${minutes}` : minutesText = minutes;
                seconds < 10 ? secondsText = `0${seconds}` : secondsText = seconds;
                time.innerText = `${minutesText}:${secondsText}`;
            },
            1000
        );
    }

    function stopBtnHandler(e) {
        stopBtn.setAttribute('disabled', 'true');
        startBtn.removeAttribute('disabled');
        clearInterval(intervalID);
    }
}