function addItem() {
    let newItemValue = document.getElementById('newItemValue');
    let newItemText = document.getElementById('newItemText');
    let select = document.getElementById('menu');

    if (newItemValue.value && newItemText.value) {
        let option = document.createElement('option');
        option.setAttribute('value', newItemValue.value);
        option.textContent = newItemText.value;
        select.appendChild(option);

        newItemValue.value = '';
        newItemText.value = '';
    }
}