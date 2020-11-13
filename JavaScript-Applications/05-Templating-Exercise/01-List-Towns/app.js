let input = document.querySelector('#towns');
let button = document.querySelector('#btnLoadTowns');
let root = document.querySelector('#root');

button.addEventListener('click', getTowns);

function getTowns(e) {
    e.preventDefault();

    let {
        value
    } = input;

    let towns = value.split(/[, -]+/g).map(town => {
        return {
            name: town
        }
    });

    fetch('./template.hbs')
        .then(res => res.text())
        .then(tamplateSrc => {
            let template = Handlebars.compile(tamplateSrc);
            let result = template({
                towns
            });

            root.innerHTML = result;
        })
        .catch(err => {
            console.log(err.message);
        });
}