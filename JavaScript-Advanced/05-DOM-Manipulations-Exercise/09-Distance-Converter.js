function attachEventsListeners() {
    let convertBtn = document.querySelector('#convert');
    let inputArea = document.querySelector('#inputDistance');
    let inputUnits = document.querySelector('#inputUnits');
    let outputArea = document.querySelector('#outputDistance');
    let outputUnits = document.querySelector('#outputUnits');

    let conversationRates = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };

    convertBtn.addEventListener('click', function () {
        let inputDistance = Number(inputArea.value);
        let inputUnit = inputUnits.value;
        let outputUnit = outputUnits.value;
        let result = inputDistance * conversationRates[inputUnit] / conversationRates[outputUnit];

        outputArea.value = result;
    });
}