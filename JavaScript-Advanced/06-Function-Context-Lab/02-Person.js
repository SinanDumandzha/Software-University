class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        let firstAndLastName = name.split(' ');

        if (firstAndLastName.length > 1) {
            this.firstName = firstAndLastName[0];
            this.lastName = firstAndLastName[1];
        }
    }
}

let person = new Person("Peter", "Ivanov");
console.log(person.fullName);
person.firstName = "George";
console.log(person.fullName);
person.lastName = "Peterson";
console.log(person.fullName);
person.fullName = "Nikola Tesla";
console.log(person.firstName);
console.log(person.lastName);