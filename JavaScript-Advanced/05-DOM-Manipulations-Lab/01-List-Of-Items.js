function addItem() {
    let items = document.getElementById('items');
    let newItemText = document.getElementById('newItemText');

    let newItem = document.createElement('li');
    newItem.innerText = newItemText.value;

    if (newItem.innerText) {
        items.appendChild(newItem);
    }

    newItemText.value = '';
}