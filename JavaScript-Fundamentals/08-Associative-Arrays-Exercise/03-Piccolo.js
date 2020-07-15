function carsInParkingLot(input) {
    function parkingInfo(input) {
        let parking = {};

        input.forEach((line) => {
            let car = line.split(", ");
            parking[car[1]] = car[0];
        });
        return parking;
    }

    function filterCarsIn(parking) {
        let output = [];

        Object.entries(parking).forEach((entry) => {
            if (entry[1] === "IN") {
                output.push(entry[0]);
            }
        });
        return output;
    }

    let parking = parkingInfo(input);
    let output = filterCarsIn(parking);

    output.length === 0
        ? "Parking Lot is Empty"
        : output.sort((a, b) => a.localeCompare(b)).join("\n");

    output.forEach((element) => {
        console.log(element);
    });
}

carsInParkingLot([
    "IN, CA2844AA",
    "IN, CA1234TA",
    "OUT, CA2844AA",
    "IN, CA9999TT",
    "IN, CA2866HI",
    "OUT, CA1234TA",
    "IN, CA2844AA",
    "OUT, CA2866HI",
    "IN, CA9876HH",
    "IN, CA2822UU",
]);
