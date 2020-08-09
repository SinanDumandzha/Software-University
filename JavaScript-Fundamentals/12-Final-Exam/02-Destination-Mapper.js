function printDestinationsAndTraveltravelPoints(input) {
    let travelPoints = 0;
    let pattern = /(?<start>\=|\/)(?<destination>[A-Z][A-Za-z]{2,})(\k<start>)/g;
    let match = pattern.exec(input);

    while (match !== null) {
        travelPoints += match.groups.destination.length;
        match = pattern.exec(input);
    }

    let destinations = Array.from(input.matchAll(pattern), m => m[2]);
    destinations.length > 0 ? console.log(`Destinations: ${destinations.join(', ')}`) : console.log(`Destinations:`);
    console.log(`Travel Points: ${travelPoints}`);
}

printDestinationsAndTraveltravelPoints('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=/Cyprus/');