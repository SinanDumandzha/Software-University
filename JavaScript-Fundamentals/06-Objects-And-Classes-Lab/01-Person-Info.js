function printPersonInfo(firstName, lastName, age) {

    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };

    for (let key in person) {
        console.log(`${key}: ${person[key]}`);
    }
}

printPersonInfo('Peter', 'Pan', 20);