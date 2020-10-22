function solve() {
    let addButton = document.getElementById('add');

    addButton.addEventListener('click', add);

    function add(e) {
        e.preventDefault();

        let taskInput = document.querySelector('#task');
        let descriptionInput = document.querySelector('#description');
        let dueDateInput = document.querySelector('#date');

        let checkInputs = taskInput.value && descriptionInput.value && dueDateInput.value;

        if (!checkInputs) {
            return;
        }

        let article = document.createElement('article');

        let h3 = document.createElement('h3');
        h3.textContent = taskInput.value;

        let pDescription = document.createElement('p');
        pDescription.textContent = `Description: ${descriptionInput.value}`;

        let pDueDate = document.createElement('p');
        pDueDate.textContent = `Due Date: ${dueDateInput.value}`;

        let div = document.createElement('div');
        div.classList.add('flex');

        let startButton = document.createElement('button');
        startButton.classList.add('green');
        startButton.textContent = 'Start';

        startButton.addEventListener('click', start);

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('red');
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', deleteTask);

        div.appendChild(startButton);
        div.appendChild(deleteButton);
        article.appendChild(h3);
        article.appendChild(pDescription);
        article.appendChild(pDueDate);
        article.appendChild(div);

        let openTasksSection = document.querySelectorAll('section')[1].children[1];

        openTasksSection.appendChild(article);

        taskInput.value = '';
        descriptionInput.value = '';
        dueDateInput.value = '';
    }

    function start(e) {
        let inProgressSection = document.querySelectorAll('section')[2].children[1];
        let articleElement = e.currentTarget.parentNode.parentNode;
        articleElement.querySelector('button').remove();

        let finishButton = document.createElement('button');
        finishButton.classList.add('orange');
        finishButton.textContent = 'Finish';
        finishButton.addEventListener('click', finish);

        articleElement.querySelector('.flex').appendChild(finishButton);
        inProgressSection.appendChild(articleElement);
    }

    function deleteTask(e) {
        let articleElement = e.currentTarget.parentNode.parentNode;
        articleElement.remove();
    }

    function finish(e) {
        let articleElement = e.currentTarget.parentNode.parentNode;
        let completeMenu = document.querySelectorAll('section')[3].children[1];
        articleElement.querySelector('button').parentElement.remove();
        articleElement.remove();
        completeMenu.appendChild(articleElement);
    }
}