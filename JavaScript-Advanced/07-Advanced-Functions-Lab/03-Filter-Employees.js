function solve(data, criteria) {
    let employees = JSON.parse(data);

    if (criteria === 'all') {
        print(employees);
    } else {
        let [key, value] = criteria.split('-');
        let filteredEmployess = employees.filter(employee => employee[key] === value);
        print(filteredEmployess);
    }

    function print(list) {
        list.map((employee, index) => {
            console.log(`${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
        });
    }
}

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
    'gender-Female');