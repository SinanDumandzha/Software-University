let allCatsSection = document.querySelector('#allCats');

Promise.all([getTemplate('./template.hbs'), getTemplate('./cat.hbs')])

    .then(([templateSrc, catSrc]) => {
        Handlebars.registerPartial('cat', catSrc);

        let template = Handlebars.compile(templateSrc);
        let result = template({
            cats
        });

        allCatsSection.innerHTML = result;

        allCatsSection.addEventListener('click', showStatusCode);
    })
    .catch(err => {
        console.error(err);
    });

function getTemplate(templateLocation) {
    return fetch(templateLocation)
        .then(res => res.text());
}

function showStatusCode(e) {
    let targetParent = e.target.parentElement;

    if (e.target.nodeName === 'BUTTON' && e.target.className === 'showBtn') {
        let statusDiv = targetParent.querySelector('div.status');

        if (statusDiv.style.display === 'none') {
            statusDiv.style.display = 'block';
            e.target.innerText = 'Hide';
        } else {
            statusDiv.style.display = 'none';
            e.target.innerText = 'Show status code';
        }
    }
}