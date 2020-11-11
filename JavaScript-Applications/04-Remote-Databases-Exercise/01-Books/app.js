const baseUrl = 'https://books-app-efa85.firebaseio.com/Books/';

let loadBooksBtn = document.querySelector('#loadBooks');
let booksContainer = document.querySelector('table > tbody');
let notificationH3 = document.querySelector('#notification > h3');

let titleInfo = document.querySelector('#title');
let authorInfo = document.querySelector('#author');
let isbnInfo = document.querySelector('#isbn');
let newBookForm = document.querySelector('#newBook-form');
let submitBtn = document.querySelector('#newBook-form > button');

let editForm = document.querySelector('#edit-form');
let editTitleInput = document.querySelector('#edit-title');
let editAuthorInput = document.querySelector('#edit-author');
let editIsbnInput = document.querySelector('#edit-isbn');
let editBtn = document.querySelector('#edit-form button');

let deleteForm = document.querySelector('#delete-form');
let deleteTitleInput = document.querySelector('#delete-title');
let deleteAuthorInput = document.querySelector('#delete-author');
let deleteIsbnInput = document.querySelector('#delete-isbn');
let deleteBtn = document.querySelector('#delete-form button');

loadBooksBtn.addEventListener('click', loadBookList);
submitBtn.addEventListener('click', submitNewBook);
editBtn.addEventListener('click', editBookInfo);

window.onload = () => {
    loadBookList();
};

function loadBookList() {
    let url = `${baseUrl}.json`;

    fetch(url)
        .then(res => res.json())
        .then(renderBookList)
        .catch(handleError);
}

function renderBookList(data) {
    cleaner();

    Object.keys(data).forEach(bookId => {
        let {
            title,
            author,
            isbn
        } = data[bookId];

        let trElement = createHTMLElement('tr', null, null, null);
        let tdTitleElement = createHTMLElement('td', null, title, null);
        let tdAuthorElement = createHTMLElement('td', null, author, null);
        let tdIsbnElement = createHTMLElement('td', null, isbn, null);
        let tdBtnsElement = createHTMLElement('td', null, null, null);
        let editBtnElement = createHTMLElement('button', '#editBtn', 'Edit', [{
            key: "data-key",
            value: bookId
        }]);
        let deleteBtnElement = createHTMLElement('button', '#deleteBtn', 'Delete', [{
            key: "data-key",
            value: bookId
        }]);

        editBtnElement.addEventListener('click', loadEditForm);
        deleteBtnElement.addEventListener('click', deleteBook);

        tdBtnsElement.appendChild(editBtnElement);
        tdBtnsElement.appendChild(deleteBtnElement);

        trElement.appendChild(tdTitleElement);
        trElement.appendChild(tdAuthorElement);
        trElement.appendChild(tdIsbnElement);
        trElement.appendChild(tdBtnsElement);

        booksContainer.appendChild(trElement);
    });
};

function submitNewBook(e) {
    e.preventDefault();

    let url = `${baseUrl}.json`;

    if (titleInfo.value !== '' && authorInfo.value !== '' && isbnInfo.value !== '') {
        fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    title: titleInfo.value,
                    author: authorInfo.value,
                    isbn: isbnInfo.value
                })
            })
            .then(loadBookList)
            .catch(handleError);

        titleInfo.value = '';
        authorInfo.value = '';
        isbnInfo.value = '';

    } else {
        let errorMessage = '';

        if (titleInfo.value === '') {
            errorMessage = 'You must enter a book title';
        }

        if (authorInfo.value === '') {
            errorMessage = 'You must enter a author name';
        }

        if (isbnInfo.value === '') {
            errorMessage = 'You must enter an isbn number';
        }

        handleError(errorMessage);
    }
}

function loadEditForm() {
    newBookForm.style.display = 'none';

    let id = this.getAttribute('data-key');
    let url = `${baseUrl}${id}.json`

    fetch(url)
        .then(res => res.json())
        .then(({
            title,
            author,
            isbn
        }) => {
            editTitleInput.value = title;
            editAuthorInput.value = author;
            editIsbnInput.value = isbn;

            editForm.style.display = 'block';
            editBtn.setAttribute('data-key', id);
        })
        .catch(handleError);
}

function editBookInfo(e) {
    e.preventDefault();

    let id = this.getAttribute('data-key');
    let url = `${baseUrl}${id}.json`

    if (editTitleInput.value !== '' && editAuthorInput.value !== '' && editIsbnInput.value !== '') {
        fetch(url, {
                method: "PATCH",
                body: JSON.stringify({
                    title: editTitleInput.value,
                    author: editAuthorInput.value,
                    isbn: editIsbnInput.value
                })
            })
            .then(() => {
                editForm.style.display = 'none';
                loadBookList();
            })
            .catch(handleError);

        titleInfo.value = '';
        authorInfo.value = '';
        isbnInfo.value = '';
    } else {
        let errorMessage = '';

        if (titleInfo.value === '') {
            errorMessage = 'You must enter a book title';
        }

        if (authorInfo.value === '') {
            errorMessage = 'You must enter a author name';
        }

        handleError(errorMessage);
    }
}

function deleteBook(e) {
    let id = this.getAttribute('data-key');
    let url = `${baseUrl}${id}.json`

    fetch(url, {
            method: "DELETE"
        })
        .then(() => {
            loadBookList();
        })
        .catch(handleError);
}

function cleaner() {
    if (booksContainer.innerHTML !== '') {
        booksContainer.innerHTML = '';
    }
}

function handleError(err) {
    notificationH3.style.display = 'block';
    notificationH3.innerText = err.message;

    setTimeout(() => {
        notificationH3.style.display = 'none';
    }, 3000);
}

function createHTMLElement(tagName, className, textContent, attributes, events) {
    let element = document.createElement(tagName);

    if (className) {
        element.classList.add(className);
    }

    if (textContent) {
        element.textContent = textContent;
    }

    if (attributes) {
        attributes.forEach((a) => element.setAttribute(a.key, a.value));
    }

    if (event) {
        element.addEventListener(event.type, event.func);
    }

    return element;
}