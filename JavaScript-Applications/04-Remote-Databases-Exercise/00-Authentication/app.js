const auth = firebase.auth();

let welcomeDiv = document.querySelector('.welcome');
let loginDiv = document.querySelector('.login');
let registerDiv = document.querySelector('.register');
let logoutDiv = document.querySelector('.logout');
let notificationDiv = document.querySelector('.notification');
let notificationMessage = document.querySelector('.message');

let loginBtn = document.querySelector('.login-btn');
let logoutBtn = document.querySelector('.logout-btn');
let registerBtn = document.querySelector('.register-btn');

loginBtn.addEventListener('click', login);
logoutBtn.addEventListener('click', logout);
registerBtn.addEventListener('click', register);

function login() {
    welcomeDiv.style.display = 'none';
    loginDiv.style.display = 'block';

    let loginButton = document.querySelector('.login-container input[type="submit"]');
    loginButton.addEventListener('click', (e) => {
        e.preventDefault();

        let emailInput = document.querySelector('.login-container input[type="email"]');
        let passwordInput = document.querySelector('.login-container input[type="password"]');

        auth.signInWithEmailAndPassword(emailInput.value, passwordInput.value)
            .then(data => {
                loginDiv.style.display = 'none';
                notificationDiv.style.display = 'block';
                logoutDiv.style.display = 'block';
                notificationMessage.textContent = `You have succesfully logged in, ${data.user.email}!`;
            })
            .catch(handleError);
    });
}

function logout() {
    auth.signOut()
        .then(data => {
            logoutDiv.style.display = 'none';
            notificationDiv.style.display = 'block';
            notificationMessage.textContent = 'You have succesfully signed out!';
        })
        .catch(handleError);
}

function register() {
    welcomeDiv.style.display = 'none';
    registerDiv.style.display = 'block';

    let registerButton = document.querySelector('.register-container input[type="submit"]');
    registerButton.addEventListener('click', (e) => {
        e.preventDefault();

        let emailInput = document.querySelector('.register-container input[type="email"]');
        let passwordInput = document.querySelector('.register-container input[type="password"]');

        if (emailInput.value != '' && passwordInput.value >= 6) {
            auth.createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
                .then(data => {
                    registerDiv.style.display = 'none';
                    notificationDiv.style.display = 'block';
                    notificationMessage.textContent = `You have succesfully registered, ${data.user.email}!`;
                })
                .catch(handleError);
        }
    });
}

function handleError(err) {
    notificationDiv.style.display = 'block';
    notificationMessage.textContent = `${err.message}`;
}