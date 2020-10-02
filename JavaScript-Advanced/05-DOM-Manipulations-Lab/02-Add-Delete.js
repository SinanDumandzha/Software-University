function addItem() {
    let items = document.getElementById('items');
    let newItemText = document.getElementById('newText');

    let newItem = document.createElement('li');
    newItem.innerText = newItemText.value;

    if (newItem.innerText) {
        items.appendChild(newItem);
    }

    let deleteItem = document.createElement('a');
    deleteItem.setAttribute('href', '#');
    deleteItem.innerText = '[Delete]';
    newItem.appendChild(deleteItem);

    deleteItem.addEventListener('click', deleteItemClick);

    function deleteItemClick() {
        newItem.remove();
    }

    newItemText.value = '';
}