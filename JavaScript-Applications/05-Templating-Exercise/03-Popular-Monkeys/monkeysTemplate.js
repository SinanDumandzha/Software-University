let monkeysDiv = document.querySelector('div.monkeys');
fetch('./monkeys.hbs')
    .then(res => res.text())
    .then(monkeysTemplateSrc => {
        let monkeysTemplate = Handlebars.compile(monkeysTemplateSrc);
        let result = monkeysTemplate({
            monkeys
        });

        monkeysDiv.innerHTML = result;
        monkeysDiv.addEventListener('click', showInfo);
    })
    .catch(err => {
        console.error(err);
    });

function showInfo(e) {
    if (!e.target.nodeName === 'BUTTON' || !e.textContent === 'info') {
        return;
    }

    let p = e.target.parentNode.querySelector('p');
    if (p.style.display == 'none' || !p.style.display) {
        p.style.display = 'block';
    } else {
        p.style.display = 'none';
    }
}