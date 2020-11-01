function attachEvents() {
    const url = 'https://phonebook-nakov.firebaseio.com/phonebook.json';

    let loadButton = document.querySelector('#btnLoad');
    let createButton = document.querySelector('#btnCreate');
    let ul = document.querySelector('#phonebook');
    let person = document.querySelector('#person');
    let phone = document.querySelector('#phone');

    loadButton.addEventListener('click', () => {
        fetch(url)
            .then(response => response.json())
            .then(response => {
                Object.entries(response).forEach(([id, contact]) => {
                    let li = document.createElement('li');
                    li.innerText = `${contact.person} ${contact.phone}`;

                    let deleteButton = document.createElement('button');
                    deleteButton.innerText = 'DELETE';
                    let urlToDelete = `https://phonebook-nakov.firebaseio.com/phonebook/${id}.json`

                    li.appendChild(deleteButton);
                    ul.appendChild(li);

                    deleteButton.addEventListener('click', (e) => {
                        fetch(urlToDelete, {
                            method: 'DELETE'
                        });

                        e.currentTarget.parentNode.remove();
                    });
                });
            })
    });

    createButton.addEventListener('click', () => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                person: person.value,
                phone: phone.value
            })
        });

    });
}

attachEvents();