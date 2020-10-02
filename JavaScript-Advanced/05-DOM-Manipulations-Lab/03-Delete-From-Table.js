function deleteByEmail() {
    let inputText = document.querySelector('input[name=email]');
    let emailTds = Array.from(document.querySelectorAll('#customers td:last-child'));
    let result = document.querySelector('#result');

    let emailToDelete = inputText.value;

    if (!emailToDelete) {
        return;
    }

    let td = emailTds.find(function (td) {
        return td.innerText === emailToDelete;
    });

    if (!td) {
        result.innerText = 'Not found.';
        return;
    }

    td.parentElement.remove();
    result.innerText = 'Deleted.';
}