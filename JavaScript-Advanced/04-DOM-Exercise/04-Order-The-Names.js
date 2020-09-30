function solve() {
    let button = document.querySelector('button');
    let inputText = document.querySelector('input');

    button.addEventListener('click', function () {
        if (inputText.value) {
            let firstLetterIndex = inputText.value[0].toUpperCase().charCodeAt(0) - 65;
            let liElement = document.querySelector('ol').children.item(firstLetterIndex);

            let list = liElement.textContent.split(', ');
            list.push((inputText.value.charAt(0).toUpperCase()) + (inputText.value.slice(1).toLowerCase()));
            list = list.filter(Boolean);
            liElement.textContent = list.join(', ');

            inputText.value = '';
        }
    });
}