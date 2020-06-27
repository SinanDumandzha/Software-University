function printEmployees(input) {
    for (emloyee of input) {
        let employees = {};
        employees.name = emloyee;
        employees.personalNum = Number(emloyee.length);

        console.log(`Name: ${employees.name} -- Personal Number: ${employees.personalNum}`);
    }
}

printEmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])