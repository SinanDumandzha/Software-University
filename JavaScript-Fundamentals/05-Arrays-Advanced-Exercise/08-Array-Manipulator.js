function manipulteArray(array, manipulations) {

    for (let command of manipulations) {

        command = command.split(' ');

        let operation = command[0];
        let index = '';
        let elementToAdd = '';

        switch (operation) {
            case 'add':
                index = command[1];
                elementToAdd = Number(command[2]);

                array.splice(index, 0, elementToAdd)
                break;

            case 'addMany':
                command.shift();
                index = command.shift();

                for (let element of command) {
                    array.splice(index, 0, Number(element));

                    index++;
                }
                break;

            case 'contains':
                let checkedNumber = Number(command[1]);

                if (array.includes(checkedNumber)) {
                    console.log(array.indexOf(checkedNumber));
                } else {
                    console.log(-1);
                }
                break;

            case 'remove':
                let indexToRemove = Number(command[1]);

                array.splice(indexToRemove, 1);
                break;

            case 'shift':
                let position = Number(command[1]);

                for (let i = 0; i < position; i++) {
                    let shifted = array.shift();

                    array.push(shifted);
                }
                break;

            case 'sumPairs':

                let sumArray = [];

                while (array.length > 0) {

                    let firstElement = array.shift() || 0;
                    let secondElement = array.shift() || 0;

                    sumArray.push(firstElement + secondElement);
                }

                array.splice(0);
                array = array.concat(sumArray);
                break;

            case 'print':
                console.log(`[ ${array.join(", ")} ]`);
                break;
        }
    }
}

manipulteArray([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'sumPairs', 'print']);

manipulteArray([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);