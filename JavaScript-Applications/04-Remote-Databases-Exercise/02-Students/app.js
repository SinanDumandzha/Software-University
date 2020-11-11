const url = 'https://students-app-311c5.firebaseio.com/students/.json';

let notificationH3 = document.querySelector('#notification h3');
let resultsTable = document.querySelector('#results');
let tbodyElement = document.querySelector('#results tbody');
let addStudentBtn = document.querySelector('#addStudent button');
let addStudentForm = document.querySelector('#addStudent-form');

addStudentBtn.addEventListener('click', loadAddStudentForm);

let currentId;

window.onload = () => {
    loadStudentsList();
};

function loadAddStudentForm() {
    addStudentForm.style.display = 'block';
    addStudentBtn.style.display = 'none';

    let addBtn = document.querySelector('#add');
    addBtn.addEventListener('click', addStudent);
}

function addStudent(e) {
    e.preventDefault();

    let firstNameInput = document.querySelector('#firstName');
    let lastNameInput = document.querySelector('#lastName');
    let facultyNumberInput = document.querySelector('#facultyNumber');
    let gradeInput = document.querySelector('#grade');

    let checkInputs = firstNameInput.value != '' && lastNameInput.value != '' && facultyNumberInput.value != '' && gradeInput.value != '';

    if (checkInputs) {
        let previousIdTr = tbodyElement.lastChild.firstChild;
        let previousId = Number(previousIdTr.textContent);
        currentId = previousId + 1;

        fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    id: currentId,
                    firstName: firstNameInput.value,
                    lastName: lastNameInput.value,
                    facultyNumber: facultyNumberInput.value,
                    grade: gradeInput.value
                })
            })
            .then(loadStudentsList)
            .catch(handleError);

        firstNameInput.value = '';
        lastNameInput.value = '';
        facultyNumberInput.value = '';
        gradeInput.value = '';

    } else {
        let errorMessage = '';

        if (firstNameInput.value === '') {
            errorMessage = 'You must enter a first name';
        }

        if (lastNameInput.value === '') {
            errorMessage = 'You must enter a last name';
        }

        if (facultyNumberInput.value === '') {
            errorMessage = 'You must enter a faculty namber';
        }

        if (grade.value === '') {
            errorMessage = 'You must enter a grade';
        }

        handleError(errorMessage);
    }
}

function loadStudentsList(data) {
    fetch(url)
        .then(res => res.json())
        .then(renderStudentsList)
        .catch(handleError);
}

function renderStudentsList(data) {
    cleaner();

    addStudentForm.style.display = 'none';
    addStudentBtn.style.display = 'block';

    Object.keys(data).forEach(student => {
        let {
            id,
            firstName,
            lastName,
            facultyNumber,
            grade
        } = data[student];

        let trElement = document.createElement('tr');

        let idTdElement = document.createElement('td');
        idTdElement.innerText = id;

        let firstNameTdElement = document.createElement('td');
        firstNameTdElement.innerText = firstName;

        let lastNameTdElement = document.createElement('td');
        lastNameTdElement.innerText = lastName;

        let facultyNumberTdElement = document.createElement('td');
        facultyNumberTdElement.innerText = facultyNumber;

        let gradeTdElement = document.createElement('td');
        gradeTdElement.innerText = grade;

        trElement.appendChild(idTdElement);
        trElement.appendChild(firstNameTdElement);
        trElement.appendChild(lastNameTdElement);
        trElement.appendChild(facultyNumberTdElement);
        trElement.appendChild(gradeTdElement);

        tbodyElement.appendChild(trElement);
    });
}

function validateNumber(num) {
    if ((num.match(/^-?\d+$/)) || (num.match(/^\d+\.\d+$/))) {
        return true;
    } else {
        return false;
    }
}

function cleaner() {
    if (tbodyElement.innerHTML !== '') {
        tbodyElement.innerHTML = '';
    }
}

function handleError(err) {
    notificationH3.style.display = 'block';
    notificationH3.innerText = err || err.message;

    setTimeout(() => {
        notificationH3.style.display = 'none';
    }, 3000);
}