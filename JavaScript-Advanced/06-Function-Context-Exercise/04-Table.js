function solve() {
    let trElements = document.querySelectorAll('tbody > tr');
    let lastClicked = '';

    Array.from(trElements).forEach(trElement => trElement.addEventListener('click', (e) => {
        let tr = e.target.parentNode;

        if (tr.style.backgroundColor !== '') {
            tr.style.backgroundColor = '';
        } else {
            Array.from(trElements).forEach(tr => tr.style.backgroundColor = '')
            tr.style.backgroundColor = "#413f5e";
        }
    }));
}