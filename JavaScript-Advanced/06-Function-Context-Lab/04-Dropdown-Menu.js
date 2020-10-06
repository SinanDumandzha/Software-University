function solve() {
    let chooseBtn = document.querySelector('#dropdown');
    let dropdownUlElement = document.querySelector('#dropdown-ul');
    let dropdownLiElements = document.querySelectorAll('#dropdown-ul > li');
    let box = document.querySelector('#box');

    chooseBtn.addEventListener('click', () => {
        dropdownUlElement.setAttribute('style', 'display: block');

        Array.from(dropdownLiElements).forEach(li => {
            li.addEventListener('click', (e) => {
                let boxStyle = e.target.innerText;
                box.setAttribute('style', `background-color: ${boxStyle}`);
                box.style.color = 'black';
            })
        });

        chooseBtn.addEventListener('click', () => {
            dropdownUlElement.setAttribute('style', 'display: none');
            box.style.backgroundColor = 'black';
            box.style.color = 'white';
        })
    });
}