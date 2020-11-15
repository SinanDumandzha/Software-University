const routes = {
    'home': document.getElementById('home-section'),
    'create': document.getElementById('create-section'),
    'details': document.getElementById('details-section'),
};

const router = (pathname) => {
    let [path, id] = pathname.split('/').filter(x => x);

    Object.values(routes).forEach(section => section.style.display = 'none');

    routes[path].style.display = 'block';

    switch (path) {
        case 'home':
            renderHomePage();
            break;
        case 'details':
            renderDetailsPage(id);
            break;
    }
};

function redirect(path) {
    history.pushState({}, '', path);

    router(path)
}

function renderDetailsPage(id) {
    fetch(`https://furnitures-app.firebaseio.com/furnitures/${id}.json`)
        .then(res => res.json())
        .then(data => {
            let cardBody = document.querySelector('.card-body img');
            let detailsView = document.getElementById('details-view');

            cardBody.setAttribute('src', `${data.image}`);
            cardBody.setAttribute('width', '300');

            detailsView.innerHTML = `
                <p>Make: ${data.make}</p>
                <p>Model: ${data.model}</p>
                <p>Year: ${data.year}</p>
                <p>Description: ${data.description}</p>
                <p>Price: ${data.price}</p>
                <p>Material: ${data.material}</p>`;
        });
}

function renderHomePage() {
    let furnitureList = document.getElementById('furniture-list');

    fetch('https://furnitures-app.firebaseio.com/furnitures.json')
        .then(res => res.json())
        .then(data => {
            let dataHtml = Object.keys(data).map(x => furnitureItemTemplate(x, data[x])).join('');

            furnitureList.innerHTML = dataHtml;
        });
}

function onRouteChange(e) {
    if (e.target.tagName != 'A') {
        return;
    }

    e.preventDefault();

    let url = new URL(e.target.href);

    redirect(url.pathname)
}

function onCreateSubmit(e) {
    e.preventDefault();

    let make = form.querySelector('#new-make').value;
    let price = form.querySelector('#new-price').value;
    let model = form.querySelector('#new-model').value;
    let image = form.querySelector('#new-image').value;
    let year = form.querySelector('#new-year').value;
    let material = form.querySelector('#new-material').value;
    let description = form.querySelector('#new-description').value;

    let newFurniture = {
        make,
        price,
        model,
        image,
        year,
        material,
        description,
    };

    fetch('https://furnitures-app.firebaseio.com/furnitures.json', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFurniture)
        })
        .then(res => res.json())
        .then(data => redirect('home'));
}

document.querySelector('nav').addEventListener('click', onRouteChange);

let form = document.getElementById('create-form');
form.addEventListener('submit', onCreateSubmit);

router(location.pathname);