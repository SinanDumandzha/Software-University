function solve() {
    let info = document.querySelector('#info');

    let currentStopId = 'depot';

    function depart() {
        const url = `https://judgetests.firebaseio.com/schedule/${currentStopId}.json`

        fetch(url)
            .then(response => response.json())
            .then(response => {
                info.textContent = `Next stop ${response.name}`;
                currentStopId = response.next;
            });

        disableButton();
    }

    function arrive() {
        info.textContent = `Arriving at ${currentStopId}`;

        disableButton();
    }

    return {
        depart,
        arrive
    };

    function disableButton() {
        let departButton = document.querySelector('#depart');
        let arriveButton = document.querySelector('#arrive');

        if (arriveButton.disabled) {
            arriveButton.disabled = false;
            departButton.disabled = true;
        } else {
            departButton.disabled = false;
            arriveButton.disabled = true;
        }
    }
}

let result = solve();