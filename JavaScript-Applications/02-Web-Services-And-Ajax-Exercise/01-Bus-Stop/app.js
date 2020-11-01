function getInfo() {
    let validBusStopNo = ['1287', '1308', '1327', '2334'];

    let stopId = document.querySelector('#stopId');
    let stopName = document.querySelector('#stopName');
    let busesLi = document.querySelector('#buses');

    if (!validBusStopNo.includes(stopId.value)) {
        stopName.textContent = 'Error';
        busesLi.innerHTML = '';
        return;
    }

    const url = `https://judgetests.firebaseio.com/businfo/${stopId.value}.json`

    fetch(url)
        .then(response => response.json())
        .then(response => {
            stopName.textContent = response.name;

            Object.entries(response.buses).forEach(([busNo, minutes]) => {
                let li = document.createElement('li');
                li.textContent = `Bus ${busNo} arrives in ${minutes} minutes`;
                busesLi.appendChild(li);
            });
        });
}