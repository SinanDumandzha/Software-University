function addEventListeners() {
    let navigationTemplate = Handlebars.compile(document.getElementById('navigation-template').innerHTML);
    let movieCardTemplate = Handlebars.compile(document.getElementById('movie-card-template').innerHTML);

    Handlebars.registerPartial('navigation-template', navigationTemplate);
    Handlebars.registerPartial('movie-card-template', movieCardTemplate);

    navigate(location.pathname == '/' ? 'home' : location.pathname.slice(1));
}

function showError(message) {

}

function showNotification(type, message) {
    let notification;

    switch (type) {
        case 'error':
            notification = document.querySelector('#errorBoxSection');
            break;
        default:
            notification = document.querySelector('#succesNotification');
            break;
    }

    notification.firstElementChild.innerText = message;
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    });
}

function navigateHandler(e) {
    e.preventDefault();

    if (e.target.tagName != 'A' && e.target.tagName != 'BUTTON') {
        return;
    }

    let url;

    e.target.tagName == 'A' ? url = new URL(e.target.href) : url = new URL(e.target.parentElement.href);

    navigate(url.pathname.slice(1));
}

function onLoginSubmit(e) {
    e.preventDefault();

    let formData = new FormData(document.forms['login-form']);

    let email = formData.get('email');
    let password = formData.get('password');

    authService.login(email, password)
        .then(data => {
            navigate('home');
        });
}

function onRegisterSubmit(e) {
    e.preventDefault();

    let formData = new FormData(document.forms['register-form']);

    let email = formData.get('email');
    let password = formData.get('password');
    let repeatPassword = formData.get('repeatPassword');

    if (password !== repeatPassword) {
        return;
    }

    authService.register(email, password, repeatPassword)
        .then(data => {
            navigate('login');
        });
}

function onAddMovieSubmit(e) {
    e.preventDefault();

    let formData = new FormData(document.forms['add-movie-form']);

    let title = formData.get('title');
    let description = formData.get('description');
    let imageUrl = formData.get('imageUrl');

    let {
        email
    } = authService.getData()

    if (title == '' || description == '' || imageUrl == '') {
        return;
    }

    movieService.addMovie({
        creator: email,
        title,
        description,
        imageUrl,
    }).then(res => {
        navigate('home');
    });
}

function onEditMovieSubmit(e, id) {
    e.preventDefault();

    let formData = new FormData(document.forms['edit-movie-form']);

    let title = formData.get('title');
    let description = formData.get('description');
    let imageUrl = formData.get('imageUrl');

    if (title == '' || description == '' || imageUrl == '') {
        return;
    }

    movieService.editMovie(id, {
        title,
        description,
        imageUrl
    }).then(res => {
        navigate(`details/${id}`);
    });
}

function deleteMovie(e) {
    e.preventDefault();

    let id = e.target.dataset.id;
    console.log(id)

    movieService.deleteMovie(id)
        .then(res => {
            navigate('home');
        });
}

function onMovieLike(e, movieId) {
    e.preventDefault();

    let {
        email
    } = authService.getData();

    movieService.likeMovie(movieId, email)
        .than(res => {
            navigate(`details/${movieId}`);
        });
}

function onMovieSearchSubmit(e) {
    e.preventDefault();

    let formData = new FormData(document.forms['search-movie-form']);

    let searchText = formData.get('search-text');

    navigate(`home?search=${searchText}`);
}

addEventListeners();