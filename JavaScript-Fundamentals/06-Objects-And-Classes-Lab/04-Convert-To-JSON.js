function convertObjectToJson(name, lastName, hairColor) {

    let person = {
        name: name,
        lastName: lastName,
        hairColor: hairColor,
    }

    let convertedToJson = JSON.stringify(person);

    console.log(convertedToJson);
}

convertObjectToJson('George', 'Jones', 'Brown');