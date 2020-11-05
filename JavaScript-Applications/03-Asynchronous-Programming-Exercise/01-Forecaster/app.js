function attachEvents() {
    const locationsUrl = 'https://judgetests.firebaseio.com/locations.json';
    const weatherBaseUrl = 'https://judgetests.firebaseio.com/forecast/';

    let getWeatherButton = document.querySelector('#submit');
    let currentDiv = document.querySelector('#current');
    let locationInput = document.querySelector('#location');
    let forecastWrapper = document.querySelector('#forecast');
    let upcomingContainer = document.querySelector('#upcoming');

    const symbols = {
        'sunny': '&#x2600',
        'partly sunny': '&#x26C5',
        'overcast': '&#x2601',
        'rain': '&#x2614',
        'degrees': '&#176'
    };

    getWeatherButton.addEventListener('click', getLocation);

    function getLocation() {
        fetch(locationsUrl)
            .then(response => response.json())
            .then(data => {
                let {
                    name,
                    code
                } = data.find(city => city.name === locationInput.value);

                let currentWeatherUrl = weatherBaseUrl + `today/${code}.json`;
                let upcomingWeatherUrl = weatherBaseUrl + `upcoming/${code}.json`;

                let currentWeather = fetch(currentWeatherUrl)
                    .then(response => response.json());

                let upcomingWeather = fetch(upcomingWeatherUrl)
                    .then(response => response.json());

                Promise.all([currentWeather, upcomingWeather])
                    .then(showWeatherLocation)
                    .catch(errorHandler)
            })
            .catch(errorHandler)
    }

    function showWeatherLocation([todayData, upcomingData]) {
        const {
            condition,
            high,
            low
        } = todayData.forecast;

        let forecastsDiv = createHTMLElement('div', ['forecasts']);
        let symbolSpan = createHTMLElement('span', ['condition', 'symbol'], symbols[condition.toLowerCase()]);
        let conditionSpan = createHTMLElement('span', ['condition']);

        let forecastFirstDataSpan = createHTMLElement('span', ['forecast-data'], todayData.name);

        let degreesInfo = `${low}${symbols.degrees}/${high}${symbols.degrees}`;
        let forecastSecondDataSpan = createHTMLElement('span', ['forecast-data'], degreesInfo);

        let forecastThirdDataSpan = createHTMLElement('span', ['forecast-data'], condition);

        conditionSpan.appendChild(forecastFirstDataSpan);
        conditionSpan.appendChild(forecastSecondDataSpan);
        conditionSpan.appendChild(forecastThirdDataSpan);

        forecastsDiv.appendChild(symbolSpan);
        forecastsDiv.appendChild(conditionSpan);

        currentDiv.appendChild(forecastsDiv);
        forecastWrapper.style.display = 'block';

        upcomingWeather(upcomingData);
    }

    function upcomingWeather({
        forecast,
        name
    }) {
        let forecastDiv = createHTMLElement('div', ['forecast-info']);

        forecast.forEach(({
            condition,
            high,
            low
        }) => {
            let containerSpan = createHTMLElement('span', ['upcoming']);

            let degreesInfo = `${low}${symbols.degrees}/${high}${symbols.degrees}`;

            let firstDataSpan = createHTMLElement('span', ['symbol'], symbols[condition.toLowerCase()]);
            let secondDataSpan = createHTMLElement('span', ['forecast-data'], degreesInfo);
            let thirdDataSpan = createHTMLElement('span', ['forecast-data'], condition);

            containerSpan.appendChild(firstDataSpan);
            containerSpan.appendChild(secondDataSpan);
            containerSpan.appendChild(thirdDataSpan);

            forecastDiv.appendChild(containerSpan);
        });

        upcomingContainer.appendChild(forecastDiv);
    }

    const errorHandler = () => {
        console.log('Error!');
    };

    function createHTMLElement(tagName, classNames, textContent) {
        let element = document.createElement(tagName);

        if (classNames) {
            element.classList.add(...classNames);
        }

        if (textContent) {
            element.innerHTML = textContent;
        }

        return element;
    }
}

attachEvents();