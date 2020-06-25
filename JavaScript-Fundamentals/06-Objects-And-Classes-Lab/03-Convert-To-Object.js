function convertJsonToObject(inputJson) {

    let convertedToObject = JSON.parse(inputJson);

    let entries = Object.entries(convertedToObject);

    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}

convertJsonToObject('{"name": "George", "age": 40, "town": "Sofia"}');