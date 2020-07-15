function calculateTravelTime(input) {
    let countries = {};

    input.forEach((data) => {
        let [country, city, price] = data.split(" > ");
        if (!countries.hasOwnProperty(country)) {
            countries[country] = {};
            countries[country][city] = Number(price);
        } else {
            if (!countries[country].hasOwnProperty(city)) {
                countries[country][city] = Number(price);
            } else {
                if (price < countries[country][city]) {
                    countries[country][city] = price;
                }
            }
        }
    });

    for (let country of Object.keys(countries).sort((a, b) =>
        a.localeCompare(b)
    )) {
        let result = `${country} -> `;

        for (let city of Object.keys(countries[country]).sort(
            (a, b) => countries[country][a] - countries[country][b]
        )) {
            result += `${city} -> ${countries[country][city]} `;
        }
        console.log(result);
    }
}

calculateTravelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200",
]);
