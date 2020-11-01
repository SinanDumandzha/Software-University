function attachEvents() {
    const url = `https://rest-messanger.firebaseio.com/messanger.json`;

    let messages = document.querySelector('#messages');
    let refreshButton = document.querySelector('#refresh');
    let submitButton = document.querySelector('#submit');
    let author = document.querySelector('#author');
    let content = document.querySelector('#content');

    refreshButton.addEventListener('click', () => {
        fetch(url)
            .then(response => response.json())
            .then(response => {
                let currentMessages = [];

                Object.values(response).forEach(message => {
                    currentMessages.push(`${message.author}: ${message.content}\n`);
                });

                messages.textContent = currentMessages.join('');
            });
    });

    submitButton.addEventListener('click', () => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                author: author.value,
                content: content.value
            })
        });

        author.value = '';
        content.value = '';
    });
}

attachEvents();